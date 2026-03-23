/** Public foundation / leadership — used by UI and structured data (keep in sync). */
export type FoundationMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

export const FOUNDATION_TEAM: readonly FoundationMember[] = [
  {
    name: "Aaron Jay Sopeña",
    role: "Co-founder & CTO",
    image: "/Profile/Aaron jay Sopeña.jpeg",
    linkedin: "https://www.linkedin.com/in/aaron-jay-sopena-b6853732a/",
  },
  {
    name: "Justine Lupasi",
    role: "Co-founder & CPOO",
    image: "/Profile/Justine Lupasi.jpeg",
    linkedin: "https://www.linkedin.com/in/justine-lupasi-444608295/",
  },
  {
    name: "Tristan Triñanes",
    role: "Co-founder & CMFO",
    image: "/Profile/Tristan Triñanes.jpeg",
    linkedin: "https://www.linkedin.com/in/tristan-tri%C3%B1anes-7ba447356/",
  },
];
