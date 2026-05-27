export type WasteCollectionPeriod = {
  label: string;
  weeks: number[];
};

export type WasteFerryVisit = {
  date: string;
  label: string;
  time: string;
  location: string;
};

const collectionPeriods: WasteCollectionPeriod[] = [
  { label: "Varannan vecka", weeks: [18, 20, 22] },
  { label: "Varje vecka", weeks: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36] },
  { label: "Varannan vecka", weeks: [38, 40, 42] },
];

const ferryVisits: WasteFerryVisit[] = [
  {
    date: "2026-06-13",
    label: "Lördag 13/6 2026",
    time: "12:00-13:30",
    location: "Östanviks brygga",
  },
  {
    date: "2026-08-15",
    label: "Lördag 15/8 2026",
    time: "10:00-11:30",
    location: "Östanviks brygga",
  },
];

export const residentInformation = {
  eyebrow: "För boende",
  title: "Information för boende",
  description:
    "Praktisk information för fastighetsägare och boende i området, bland annat avfallshantering och återkommande föreningsfrågor.",
  waste: {
    id: "sophamtning",
    title: "Sophämtning och avfall",
    description:
      "Sophämtning från föreningens egna soptunnor 2026 sker enligt veckorna nedan.",
    collectionPeriods,
    winterInfo: "Under vintertid lämnas avfall i sopskjul vid Sand och Solvik på Nämdö.",
    bulkyWaste: {
      title: "Grovavfall och farligt avfall",
      intro: "Grovavfall, elavfall samt farligt avfall lämnas på Grovsopfärjan.",
      ferryIntro: "Grovsopfärjan kommer till Östanviks brygga två gånger per år:",
      visits: ferryVisits,
      warning: "Gummidäck får inte lämnas på Grovsopfärjan.",
      largeBag:
        "Du kan också beställa hämtning av storsäck för grovavfall från angöringsplats med båt. Kostnad för hämtning av storsäck finns i avfallstaxan. Beställning görs genom att ringa eller mejla till kommunen.",
      contact: {
        name: "Värmdö kommun servicecenter",
        email: "varmdo.kommun@varmdo.se",
        phone: "08-570 470 00",
        phoneHref: "tel:+46857047000",
      },
    },
  },
};
