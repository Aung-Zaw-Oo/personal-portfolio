import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Service {
  id: number;

  title: string;

  description: string;

  icon: IconDefinition;

  color: "violet" | "cyan" | "emerald" | "amber";

  highlights: string[];
}
