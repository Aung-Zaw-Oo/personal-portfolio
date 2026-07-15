import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ContactItem } from "./types";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const contacts: ContactItem[] = [
  {
    label: "DIRECT EMAIL",
    value: "1997azo.azo@gmail.com",
    href: "mailto:1997azo.azo@gmail.com",
    icon: faEnvelope,
    type: "email",
  },

  {
    label: "LINKEDIN PROFILE",
    value: "linkedin.com/in/aung-zaw-oo-180a46387",
    href: "https://www.linkedin.com/in/aung-zaw-oo-180a46387/",
    icon: faLinkedin,
    type: "linkedin",
  },

  {
    label: "GITHUB DIRECTORY",
    value: "github.com/Aung-Zaw-Oo",
    href: "https://github.com/Aung-Zaw-Oo",
    icon: faGithub,
    type: "github",
  },
];
