/** Public foundation / leadership  -  used by UI and structured data (keep in sync). */
export type FoundationMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

export const FOUNDATION_TEAM: readonly FoundationMember[] = [
  {
    name: "Justine Lupasi",
    role: "Founder & CEO, product, operations & delivery",
    image: "/Profile/transparent/Justine Lupasi.jpeg",
    linkedin: "https://www.linkedin.com/in/justine-lupasi-444608295/",
  },
];
