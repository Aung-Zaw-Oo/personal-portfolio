import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    text: "Frontend Architecture",
    color: "text-blue-500",
  },
  {
    text: "Backend Systems",
    color: "text-cyan-500",
  },
  {
    text: "TypeScript Development",
    color: "text-emerald-500",
  },
  {
    text: "Database Design",
    color: "text-purple-500",
  },
];

export default function TechMarquee() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-zinc-900 bg-zinc-950 py-12">
      <div className="flex w-max animate-scroll gap-8 select-none">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-4 font-heading text-3xl font-bold tracking-widest whitespace-nowrap text-zinc-700 uppercase"
          >
            {item.text}

            <FontAwesomeIcon
              icon={faAsterisk}
              className={`text-sm ${item.color} animate-spin-slow`}
            />
          </span>
        ))}
      </div>
    </section>
  );
}
