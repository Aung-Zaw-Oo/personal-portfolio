import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function AboutCard({ icon, title, description }: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <FontAwesomeIcon icon={icon} className="mb-4 text-xl text-blue-400" />

      <h3 className="font-heading text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </div>
  );
}
