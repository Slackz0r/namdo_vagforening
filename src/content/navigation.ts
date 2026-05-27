export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Start", href: "/" },
  { label: "Information", href: "/information" },
  { label: "Aktuella projekt", href: "/projects" },
  { label: "Protokoll", href: "/protocols" },
  { label: "Stadgar", href: "/statutes" },
  { label: "Karta", href: "/map" },
  { label: "Kontakt", href: "/contact" },
];
