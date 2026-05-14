export type MeetingProtocol = {
  id: number;
  title: string;
  date: string;
  year: number;
  protocol: {
    intro: string;
    items: ProtocolItem[];
  };
};

export type ProtocolItem = {
  no: string;
  title: string;
  paragraphs: string[];
};

export const meetingProtocols: MeetingProtocol[] = [
  {
    id: 1,
    title: "Stämmaprotokoll 2025",
    date: "2025-10-06",
    year: 2025,
    protocol: {
      intro:
        "Protokoll fört vid ordinarie föreningsstämma för Nordöstra Nämdös Samfällighetsförening den 20 september 2025.",
      items: [
        {
          no: "§1",
          title: "Ordförande",
          paragraphs: [
            "Till ordförande för stämman valdes Benny Norling. Röstlängd upprättades.",
          ],
        },
        {
          no: "§2",
          title: "Sekreterare",
          paragraphs: ["Till sekreterare för stämman valdes Ulf Haeggström."],
        },
        {
          no: "§3",
          title: "Justeringsmän",
          paragraphs: ["Till justeringsmän valdes Siw Bernqvist och Lars Haeggström."],
        },
        {
          no: "§4",
          title: "Kallelse",
          paragraphs: ["Kallelsen befanns vara utsänd i enlighet med föreningens stadgar."],
        },
        {
          no: "§5",
          title: "Styrelsens och revisorernas berättelser",
          paragraphs: [
            "Sekreteraren föredrog styrelsens förvaltningsberättelse för verksamhetsåret 2024-2025.",
            "Anders Asp redovisade resultat- och balansräkning.",
            "Boel Carlsson redogjorde för sin revisionsberättelse.",
          ],
        },
        {
          no: "§6",
          title: "Ansvarsfrihet för styrelsen",
          paragraphs: ["Stämman beviljade styrelsen ansvarsfrihet för verksamhetsåret 2024-2025."],
        },
        {
          no: "§7",
          title: "Inga motioner har inkommit",
          paragraphs: [
            "Påtalas önskemål om uppdatering av ingående fastigheter efter till exempel styckning.",
          ],
        },
        {
          no: "§8",
          title: "Bötebryggan",
          paragraphs: [
            "Benny Norling gav en utmärkt statusrapport med historik. Bryggan behöver åtgärdas för att fungera långsiktigt. Rapporten kan fås på mail för intresserade.",
            "Projektgruppen där Benny Norling är projektledare har med hjälp av konsulter utarbetat ett anbudsunderlag som skickats till ett antal potentiella entreprenörer med deadline 2025-10-01.",
            "En lantmäteriförrättning gällande väg till Bötebryggan kommer sannolikt krävas för att möjliggöra stöd från myndigheter etc.",
            "Stämman beslutar att gå vidare med ovanstående förrättning förutsatt att den inte kostar mer än 150 000 kronor.",
          ],
        },
        {
          no: "§9",
          title: "Ersättning till styrelsen och revisorerna",
          paragraphs: [
            "Stämman beslöt att ingen ersättning skall utgå till styrelsen och revisorerna.",
            "Styrelsen avnjuter en lunch i samband med ett styrelsemöte.",
          ],
        },
        {
          no: "§10",
          title: "Styrelsens förslag till utgifts- och inkomststat",
          paragraphs: [
            "Stämman antog enhälligt styrelsens förslag enligt följande:",
            "GA 1 Vägar utförande/drift: 0 kr per andel.",
            "GA 2 Östanviks brygga: 0 kr per andel.",
            "GA 3 Nämdö Böte brygga: 1000 kr per andel.",
            "En normal fastighet har 6 andelar.",
          ],
        },
        {
          no: "§11",
          title: "Val av två ordinarie styrelseledamöter för en tid av två år",
          paragraphs: [
            "Stämman valde Anders Asp (omval) och Benny Norling (omval) till ordinarie styrelseledamöter på två år.",
            "Stämman valde Jesper Magnusson (nyval) till ordförande på ett år.",
          ],
        },
        {
          no: "§12",
          title: "Val av två suppleanter för en tid av ett år",
          paragraphs: [
            "Stämman valde William Ekecrantz (nyval) och Helen Saranius (omval) till suppleanter för en tid av ett år.",
          ],
        },
        {
          no: "§13",
          title: "Val av en revisor och en revisorssuppleant",
          paragraphs: [
            "Stämman valde Boel Carlsson (omval) till revisor.",
            "Stämman valde Siw Bernqvist (omval) till revisorssuppleant.",
          ],
        },
        {
          no: "§14",
          title: "Val av valberedning",
          paragraphs: [
            "Stämman valde Jörgen Carlberg (omval) till ordförande i valberedningen och Christina Alewald (omval) till ledamot.",
          ],
        },
        {
          no: "§15",
          title: "Meddelande av plats där stämmoprotokoll hålls tillgängligt",
          paragraphs: [
            "Stämman beslutade att stämmoprotokollet tillsammans med justerad resultat- och balansräkning ska hållas tillgängligt hos styrelsen och att stämmoprotokollet anslås på bryggorna Östanvik, Böte, Kalkberget och Gamla Östanvik.",
            "Protokollet skickas dessutom till alla fastighetsägare där vi har mailadresser och läggs upp på föreningens nuvarande hemsida.",
          ],
        },
        {
          no: "§16",
          title: "Inga övriga frågor",
          paragraphs: ["Inga övriga frågor."],
        },
        {
          no: "§17",
          title: "Stämmans avslutande",
          paragraphs: ["Ordförande förklarade stämman avslutad."],
        },
      ],
    },
  },
];
