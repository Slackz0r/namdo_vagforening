import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";
import { meetingProtocols } from "@/content/meetings";
import { formatDate } from "@/utils/dateUtils";

export const metadata: Metadata = {
  title: "Protokoll",
  description:
    "Stämmoprotokoll och möteshandlingar för Nordöstra Nämdö Samfällighetsförening.",
};

export default function ProtocolsPage() {
  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article className="py-10 md:py-16">
          <PageHeader
            eyebrow="Protokoll"
            title="Stämmoprotokoll"
            description="Här samlas föreningens protokoll som statiska sidor. Välj ett protokoll för att läsa det i sin helhet."
          />

          <section aria-labelledby="protocol-list-heading" className="mt-10 max-w-4xl">
            <h2 id="protocol-list-heading" className="sr-only">
              Tillgängliga protokoll
            </h2>

            <ul className="space-y-4">
              {meetingProtocols.map((meeting) => (
                <li key={meeting.id}>
                  <Link
                    className="group block rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:border-primary hover:bg-surface-muted hover:shadow-small"
                    href={`/protocols/${meeting.id}`}
                  >
                    <article className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary">
                          {meeting.title}
                        </h3>
                        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                          {meeting.protocol.intro}
                        </p>
                      </div>

                      <time
                        className="w-fit shrink-0 rounded-full bg-surface-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                        dateTime={meeting.date}
                      >
                        {formatDate(meeting.date)}
                      </time>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </SiteContainer>
    </main>
  );
}
