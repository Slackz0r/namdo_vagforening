import Image from "next/image";
import SiteContainer from "@/components/site-container";

export default function MapPage() {
  return (
    <main>
      <SiteContainer>
        <section>
          <h1>Karta över området</h1>
          <figure className="relative aspect-[15/9] overflow-hidden">
            <Image
              src="/images/karta_nordostra_namdo.png"
              alt="Flygbild över Nämdöskärgården"
              fill
              preload
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="object-cover"
            />
          </figure>
        </section>
      </SiteContainer>
    </main>
  );
}
