export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Maria José Mignacca D'Agostini",
    role: "Sócia — CRC-MG 18663",
    bio: "Mais de 50 anos de experiência na área contábil.",
  },
];
