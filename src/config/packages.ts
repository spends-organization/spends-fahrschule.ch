export interface Package {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const packages: Package[] = [
  {
    title: "Easy Start Paket",
    price: "CHF\u00A0295",
    originalPrice: "CHF\u00A0450",
    description: "Perfekt für den Einstieg in die Fahrausbildung.",
    features: [
      "5 Fahrstunden",
      "CHF\u00A059 pro Lektion",
      "Flexible Terminvereinbarung",
      "Moderne Fahrzeuge",
      "Persönliche Betreuung",
      "Administrative Leistungen und Versicherung sind im Preis inbegriffen."
    ],
    popular: false
  },
  {
    title: "Go for it Paket",
    price: "CHF\u00A0790",
    originalPrice: "CHF\u00A0900",
    description: "Unser meistgewähltes Paket für eine umfassende Ausbildung.",
    features: [
      "10 Fahrstunden",
      "CHF\u00A079 pro Lektion (statt CHF\u00A090)",
      "Flexible Terminvereinbarung",
      "Moderne Fahrzeuge",
      "Persönliche Betreuung",
      "Administrative Leistungen und Versicherung sind im Preis inbegriffen."
    ],
    popular: true
  },
  {
    title: "All in Paket",
    price: "CHF\u00A01'150",
    originalPrice: "CHF\u00A01'350",
    description: "Für alle, die Vollgas geben wollen.",
    features: [
      "15 Fahrstunden",
      "CHF\u00A077 pro Lektion (statt CHF\u00A090)",
      "Flexible Terminvereinbarung",
      "Moderne Fahrzeuge",
      "Persönliche Betreuung",
      "Administrative Leistungen und Versicherung sind im Preis inbegriffen."
    ],
    popular: false
  }
];

export const singleLessons = {
  regular: {
    title: "Einzellektion",
    price: "CHF\u00A090"
  },
  trial: {
    title: "Probelektion",
    price: "Gratis",
    originalPrice: "CHF\u00A050"
  }
};

export const formatPackageMessage = (packageInfo: Package | typeof singleLessons.regular | typeof singleLessons.trial) => {
  let message = `Ausgewähltes Paket: ${packageInfo.title} (${packageInfo.price})`;
  if ('originalPrice' in packageInfo && packageInfo.originalPrice) {
    message += ` (statt ${packageInfo.originalPrice})`;
  }
  return message;
}; 