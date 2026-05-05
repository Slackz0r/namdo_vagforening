import SiteContainer from "@/components/site-container";

export default function ProjectsPage() {
  return (
    <main>
      <SiteContainer>
        <article className="py-10 md:py-16">
          <header className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Pågående projekt
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Information om Nämdö Böte brygga
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Föreningen arbetar med att ta fram en teknisk lösning och finansiering för renovering
              av Nämdö Böte trafikbrygga.
            </p>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <section
              aria-label="Projektinformation"
              className="max-w-3xl space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8"
            >
              <p className="leading-8">
                Föreningen förvaltar vägarna med underhåll, plogning, snöröjning m.m. samt har
                ansvaret för bryggorna. Historiskt har det varit svårt att nå ut med information om
                föreningens aktiviteter och möten. Adresser till fastighetsägare har ändrats och
                inga e-mail adresser har funnits tillgängliga, tills nu.
              </p>

              <p className="leading-8">
                Nämdö Böte Trafikbrygga är nu i behov av renovering. På årsmötet 2024 beslöts att en
                projektgrupp skulle startas för att ta fram en teknisk lösning och finna
                finansiering. En statusrapport redovisades på senaste årsmötet i september 2025, se
                bilaga. Då en renovering är kostsam, runt 3–4 MSEK, så måste finansiering dels komma
                från externa bidragsgivare och dels från berörda medlemmar.
              </p>

              <p className="leading-8">
                Lantmäteriet har nycklat ut andelstal per fastighet som är knuten till Nämdö Böte
                Trafikbrygga, i likhet med Östanviks Brygga. De tyngsta bidragsgivarna som
                identifierats är EU/Leader Stockholmsbygd samt Trafikverket. Det krävs en hel del
                underlag för att ges möjlighet till bidrag, vilket projektgruppen arbetar med.
              </p>

              <p className="leading-8">
                För att få extern finansiering krävs “underliggande behov”. Projektgruppen har
                därför frågat och erhållit supportskrivelser från Trafikantföreningen, Visit
                Stockholm, Nämdö Green Archipelago och Nämdö Hembygdsförening. Dessa har poängterat
                vikten av att Nämdö Böte brygga görs tillgänglig och säker även i framtiden.
              </p>

              <p className="leading-8">
                Skärgårdsstiftelsen, som har sex andelar i Nämdö Trafikbrygga, har trots begäran sen
                28 april 2025 inte inkommit med svar. Med den uppmärksamhet som funnits i pressen om
                Nämdö nationalpark, Stockholm Archipelago Trail m.m. så anser vi att Nämdö Böte
                Trafikbrygga utgör en viktig länk i Nämdöskärgårdens tillgänglighet.
              </p>

              <p className="leading-8">
                Projektarbetet har fortsatt efter sommaren. Detaljerad anbudsinfordran med
                förslagsritning har sänts till åtta tänkbara entreprenörer. Anbud förväntas
                utvärderas under november 2025.
              </p>
            </section>

            <aside
              aria-labelledby="project-summary-heading"
              className="rounded-2xl border border-border bg-sky p-6 shadow-sm"
            >
              <h2 id="project-summary-heading" className="text-xl font-semibold">
                Projektstatus
              </h2>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Brygga</dt>
                  <dd className="mt-1 font-medium">Nämdö Böte trafikbrygga</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Beslut</dt>
                  <dd className="mt-1 font-medium">Årsmötet 2024</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Uppskattad kostnad</dt>
                  <dd className="mt-1 font-medium">3–4 MSEK</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Finansiering</dt>
                  <dd className="mt-1 font-medium">Bidrag och berörda medlemmar</dd>
                </div>

                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Nästa steg</dt>
                  <dd className="mt-1 font-medium">Utvärdering av anbud under november 2025</dd>
                </div>
              </dl>
            </aside>
          </div>
        </article>
      </SiteContainer>
    </main>
  );
}
