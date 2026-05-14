import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import SiteContainer from "@/components/site-container";
import { meetingProtocols } from "@/content/meetings";
import { formatDate } from "@/utils/dateUtils";

type ProtocolPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return meetingProtocols.map((meeting) => ({
    id: String(meeting.id),
  }));
}

export async function generateMetadata({ params }: ProtocolPageProps): Promise<Metadata> {
  const { id } = await params;
  const meeting = getMeetingProtocol(id);

  if (!meeting) {
    return {
      title: "Protokoll saknas",
    };
  }

  return {
    title: meeting.title,
    description: meeting.protocol.intro,
  };
}

export default async function ProtocolPage({ params }: ProtocolPageProps) {
  const { id } = await params;
  const meeting = getMeetingProtocol(id);

  if (!meeting) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      <SiteContainer>
        <article className="py-10 md:py-16">
          <Link
            className="mb-8 inline-flex text-sm font-semibold text-primary hover:underline"
            href="/protocols"
          >
            Tillbaka till alla protokoll
          </Link>

          <PageHeader
            eyebrow={`Protokoll ${meeting.year}`}
            title={meeting.title}
            description={meeting.protocol.intro}
          >
            <dl className="mt-6 grid gap-3 rounded-xl border border-border bg-surface p-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-muted-foreground">Datum</dt>
                <dd>
                  <time dateTime={meeting.date}>{formatDate(meeting.date)}</time>
                </dd>
              </div>

              <div>
                <dt className="font-medium text-muted-foreground">År</dt>
                <dd>{meeting.year}</dd>
              </div>
            </dl>
          </PageHeader>

          <div className="mt-10 max-w-4xl rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
            <ol className="space-y-8">
              {meeting.protocol.items.map((item) => (
                <li key={item.no} className="border-b border-border pb-8 last:border-b-0 last:pb-0">
                  <section>
                    <h2 className="text-2xl font-semibold leading-tight text-foreground">
                      <span className="text-primary">{item.no}</span> {item.title}
                    </h2>

                    <div className="mt-4 space-y-4 leading-8 text-muted-foreground">
                      {item.paragraphs.map((paragraph, index) => (
                        <p key={`${item.no}-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </SiteContainer>
    </main>
  );
}

function getMeetingProtocol(id: string) {
  return meetingProtocols.find((meeting) => String(meeting.id) === id);
}
