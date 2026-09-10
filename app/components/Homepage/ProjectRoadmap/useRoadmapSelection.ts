"use client";

import { useEffect, useRef, useState } from "react";

type SelectionPhase = "idle" | "isolating" | "centering" | "opening";

function pause(duration: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    const cancel = () => { clearTimeout(timer); reject(signal.reason); };
    const timer = setTimeout(() => { signal.removeEventListener("abort", cancel); resolve(); }, duration);
    signal.addEventListener("abort", cancel, { once: true });
    if (signal.aborted) cancel();
  });
}

/** Shared entrance for every node; chapter-specific work starts after centering. */
export function useRoadmapSelection() {
  const [phase, setPhase] = useState<SelectionPhase>("idle");
  const [offset, setOffset] = useState(0);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => () => {
    controller.current?.abort();
    controller.current = null;
  }, []);

  function reset() {
    controller.current?.abort();
    controller.current = null;
    setPhase("idle");
  }

  async function open(container: HTMLElement, slot: HTMLElement, onCentered: () => Promise<void>) {
    if (controller.current) return;
    const run = new AbortController();
    controller.current = run;
    const rect = container.getBoundingClientRect();
    // Measure the layout position, even if a previous return transition is still running.
    const parent = slot.offsetParent as HTMLElement;
    const origin = parent.getBoundingClientRect().left + slot.offsetLeft;
    setOffset(rect.left + rect.width / 2 - origin - slot.offsetWidth / 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const interrupt = () => run.abort();
    const onKey = (event: KeyboardEvent) => {
      if (["Escape", "PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp", " "].includes(event.key)) interrupt();
    };
    const removeListeners = () => {
      window.removeEventListener("resize", interrupt);
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("touchstart", interrupt);
      window.removeEventListener("keydown", onKey);
    };
    window.addEventListener("resize", interrupt);
    window.addEventListener("wheel", interrupt, { passive: true });
    window.addEventListener("touchstart", interrupt, { passive: true });
    window.addEventListener("keydown", onKey);
    try {
      setPhase("isolating");
      await pause(reduced ? 0 : 380, run.signal);
      setPhase("centering");
      await pause(reduced ? 0 : 450, run.signal);
      // The chapter owns interruption and scrolling from this point onward.
      removeListeners();
      setPhase("opening");
      await onCentered();
    } catch (error) {
      if (!run.signal.aborted) throw error;
    } finally {
      removeListeners();
      if (controller.current === run) {
        controller.current = null;
        setPhase("idle");
      }
    }
  }

  return { phase, offset, open, reset };
}
