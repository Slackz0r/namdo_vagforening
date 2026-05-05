import Image from "next/image";
import { SiteContainer } from "@/components/site-container";

export default function Home() {
  return (
    <>
      <header>
        <SiteContainer>
          <nav aria-label="Huvudmeny">
            <ul role="list">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </SiteContainer>
      </header>

      <main className="bg-background text-foreground">
        <SiteContainer>
          <section>
            <h1>Nordöstra Nämdö Samfällighetsförening</h1>

            <figure className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/namdo-skargarden.jpg"
                alt="Flygbild över Nämdöskärgården"
                fill
                preload
                sizes="(min-width: 1200px) 1200px, 100vw"
                className="object-cover"
              />
            </figure>

            <p>
              Nordöstra Nämdö samfällighetsförening innefattar 92 fastigheter på norra Nämdö.
              Föreningen etablerades vid en förrättning av Lantmäteriet 1985. Den omfattar:
            </p>

            <ul className="w-fit list-disc pl-8 bg-sky p-4 rounded-lg">
              <li>Östanviks Brygga</li>
              <li>Vägen från Östanviks brygga till grindstolpen vid gamla Östanviks gård</li>
              <li>Traktorstigen mellan Östanviks gård och Nämdö Böte brygga</li>
              <li>Nämdö Böte brygga</li>
            </ul>

            <p>
              Föreningen förvaltar dessa vägar och bryggor, vilket innebär underhåll, drift och
              planering. Som fastighetsägare är man obligatoriskt ansluten till föreningen. Man är
              då skyldig att respektera föreningens stadgar, och de beslut som tas på föreningens
              årsstämma, som hålls på Nämdö varje år. Fastighetsägare har olika andelar i
              föreningen, vilket har fastställts av Lantmäteriet. Fastighetsägare kan heller inte
              utträda ur föreningen men välkomnas att göra sin röst hörd under årsstämman.
            </p>
          </section>
        </SiteContainer>
      </main>

      <footer>
        <SiteContainer>
          <nav aria-label="Sidfotsmeny">
            <ul role="list">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </SiteContainer>
      </footer>
    </>
  );
}
