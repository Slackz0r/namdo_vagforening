import Image from "next/image";
import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
import SiteContainer from "./site-container";

export default function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface/95 sticky top-0 z-999">
      <SiteContainer className="flex flex-col gap-4 py-2 md:flex-row md:items-center md:justify-between">
        <Link
          className="inline-flex w-fit items-center text-foreground transition hover:text-primary"
          href="/"
        >
          <Image
            src="/svg/island_outline_logo.svg"
            alt=""
            aria-hidden="true"
            width={100}
            height={100}
            className="h-19 w-19 text-primary"
          />
          <span className="sr-only">Nordöstra Nämdös Samfällighetsförening</span>
        </Link>

        <nav aria-label="Huvudmeny">
          <ul className="flex flex-wrap gap-2 text-base font-semibold text-muted-foreground">
            {mainNavigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  className="inline-flex rounded-md px-3 py-2 transition hover:bg-sky hover:text-primary hover:shadow-sm"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SiteContainer>
    </header>
  );
}
