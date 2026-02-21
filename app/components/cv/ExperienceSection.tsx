import { Experience } from "@/data/cv.types";

type Props = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: Props) {
  return (
    <section>
      <h3>Experience</h3>
      {experiences.map((exp) => (
        <div key={exp.id}>
          <strong>{exp.title}</strong> - {exp.company}
          <p>
            {exp.start} - {exp.end}
          </p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}
