import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: IconDefinition;
  type: "email" | "linkedin" | "github";
}
