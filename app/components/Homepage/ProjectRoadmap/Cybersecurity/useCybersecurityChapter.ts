"use client";

import { useEffect, useRef, useState } from "react";

export type ChapterPhase = "idle" | "centering" | "isolating" | "charging" | "intro" | "travelling" | "revealing" | "ready";

function centerChapterNode(container: HTMLElement, node: HTMLElement, duration: number, signal: AbortSignal) {
  const containerRect = container.getBoundingClientRect();
  const nodeRect = node.getBoundingClientRect();
  const start = container.scrollLeft;
  const target = Math.max(0, Math.min(container.scrollWidth - container.clientWidth,
    start + nodeRect.left + nodeRect.width / 2 - containerRect.left - containerRect.width / 2));
  return new Promise<void>((resolve, reject) => {
    let frame = 0;
    const started = performance.now();
    const cancel = () => { cancelAnimationFrame(frame); reject(signal.reason); };
    const tick = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min(1, (now - started) / duration);
      const eased = progress * progress * (3 - 2 * progress);
      container.scrollTo({ left: start + (target - start) * eased, behavior: "instant" });
      if (progress < 1) frame = requestAnimationFrame(tick);
      else { signal.removeEventListener("abort", cancel); resolve(); }
    };
    signal.addEventListener("abort", cancel, { once: true });
    if (signal.aborted) cancel();
    else frame = requestAnimationFrame(tick);
  });
}

// Each phase awaits its own completion; aborting also cancels pending animation frames.
function wait(duration: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const cancel = () => { clearTimeout(timer); reject(signal.reason); };
    const timer = setTimeout(() => { signal.removeEventListener("abort", cancel); resolve(); }, duration);
    signal.addEventListener("abort", cancel, { once: true });
    if (signal.aborted) cancel();
  });
}

function scrollToComposition(element: HTMLElement, center: boolean, duration: number, signal: AbortSignal) {
  const banner = document.querySelector<HTMLElement>("body > header, header[role='banner']");
  const bannerBottom = banner?.getBoundingClientRect().bottom ?? 100;
  const topInset = Math.max(100, Math.min(bannerBottom + 24, 180));
  const rect = element.getBoundingClientRect();
  const available = window.innerHeight - topInset - 24;
  const inset = center ? topInset + Math.max(0, (available - rect.height) / 2) : topInset;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const target = Math.max(0, Math.min(window.scrollY + rect.top - inset, maxScroll));
  const start = window.scrollY;

  return new Promise<void>((resolve, reject) => {
    let frame = 0;
    const started = performance.now();
    const cancel = () => { cancelAnimationFrame(frame); reject(signal.reason); };
    const tick = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min(1, (now - started) / duration);
      const eased = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      window.scrollTo({ top: start + (target - start) * eased, behavior: "instant" });
      if (progress < 1) frame = requestAnimationFrame(tick);
      else { signal.removeEventListener("abort", cancel); resolve(); }
    };
    signal.addEventListener("abort", cancel, { once: true });
    if (signal.aborted) cancel();
    else frame = requestAnimationFrame(tick);
  });
}

export function useCybersecurityChapter() {
  const [phase, setPhase] = useState<ChapterPhase>("idle");
  const introRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => () => controller.current?.abort(), []);

  useEffect(() => {
    if (phase === "idle" || phase === "ready") return;
    const interrupt = () => { controller.current?.abort(); controller.current = null; setPhase("ready"); };
    const onKey = (event: KeyboardEvent) => {
      if (["Escape", "PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp", " "].includes(event.key)) interrupt();
    };
    window.addEventListener("wheel", interrupt, { passive: true });
    window.addEventListener("touchstart", interrupt, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", interrupt);
    return () => {
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("touchstart", interrupt);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", interrupt);
    };
  }, [phase]);

  async function open(container: HTMLElement, node: HTMLElement) {
    if (controller.current || phase !== "idle") return;
    const run = new AbortController();
    controller.current = run;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try {
      setPhase("centering");
      await centerChapterNode(container, node, reduced ? 0 : 450, run.signal);
      setPhase("isolating");
      await wait(reduced ? 0 : 380, run.signal);
      setPhase("charging");
      await wait(reduced ? 0 : 1250, run.signal);
      setPhase("intro");
      await wait(32, run.signal); // Allow React to commit the intro before measuring it.
      if (introRef.current && !reduced) await scrollToComposition(introRef.current, true, 700, run.signal);
      await wait(reduced ? 0 : 850, run.signal);
      setPhase("travelling");
      if (stageRef.current) await scrollToComposition(stageRef.current, true, reduced ? 0 : 850, run.signal);
      setPhase("revealing");
      await wait(reduced ? 0 : 1650, run.signal);
      setPhase("ready");
    } catch (error) {
      if (!run.signal.aborted) throw error;
    } finally {
      if (controller.current === run) controller.current = null;
    }
  }

  function reset() {
    controller.current?.abort();
    controller.current = null;
    setPhase("idle");
  }

  return { phase, introRef, stageRef, open, reset };
}
