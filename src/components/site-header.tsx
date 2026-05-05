import Link from "next/link";
import SiteContainer from "./site-container";

export default function SiteHeader() {
  return (
    <header>
      <SiteContainer>
        <nav aria-label="Huvudmeny">
          <ul role="list" className="flex gap-8">
            <li>
              <Link href="/">Start</Link>
            </li>

            <li>
              <Link href="/projects">Aktuella projekt</Link>
            </li>

            <li>
              <Link href="/statutes">Stadgar</Link>
            </li>

            <li>
              <Link href="/map">Karta</Link>
            </li>

            <li></li>
          </ul>
        </nav>
      </SiteContainer>
    </header>
  );
}
