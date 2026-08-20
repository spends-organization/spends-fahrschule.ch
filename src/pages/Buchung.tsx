import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Car, Clock, CheckCircle, Gift } from 'lucide-react';

declare global {
  function gtag(...args: any[]): void;
}

/**
 * Cal.com Event-Typ-Link für die gratis Probelektion.
 * PLATZHALTER: Vor dem Live-Gang durch den echten Cal.com-Link ersetzen,
 * z.B. "spends-fahrschule/probelektion".
 */
const CALCOM_LINK = 'PLATZHALTER-CALCOM-LINK';

const highlights = [
  {
    icon: <Gift className="h-8 w-8 text-blue-700" />,
    title: 'Komplett gratis',
    description: 'Die Probelektion ist für dich kostenlos und unverbindlich.',
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-700" />,
    title: '45 Minuten',
    description: 'Genug Zeit, um dein Fahrkönnen einzuschätzen.',
  },
  {
    icon: <Car className="h-8 w-8 text-blue-700" />,
    title: 'Moderne Fahrzeuge',
    description: 'Lerne unsere Fahrzeuge und deinen Fahrlehrer kennen.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-700" />,
    title: 'Unverbindlich',
    description: 'Keine Verpflichtung – du entscheidest ganz in Ruhe.',
  },
];

const Buchung: React.FC = () => {
  useEffect(() => {
    document.title = "Gratis Probelektion buchen | Spend's Fahrschule";
  }, []);

  useEffect(() => {
    let api: Awaited<ReturnType<typeof getCalApi>> | undefined;

    // Cal.com Embed-API initialisieren und auf erfolgreiche Buchungen hören.
    (async () => {
      api = await getCalApi();

      // UI etwas an unser Design anpassen (Akzentfarbe Blau).
      api('ui', {
        theme: 'light',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#2563eb' },
          dark: { 'cal-brand': '#2563eb' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });

      // Conversion-Tracking: feuert, sobald eine Probelektion erfolgreich
      // gebucht wurde.
      api('on', {
        action: 'bookingSuccessful',
        callback: () => {
          // Google Ads Conversion.
          // PLATZHALTER-LABEL: durch das echte Conversion-Label aus Google Ads
          // ersetzen (Format: AW-17059213090/xxxxxxxxxxxxxxxxxxx).
          gtag('event', 'conversion', {
            send_to: 'AW-17059213090/PLATZHALTER-LABEL',
          });

          // Zusätzliches GA4-Event zur Auswertung im GA4-Property (G-LB95BFPW7W).
          gtag('event', 'probelektion_gebucht', {
            event_category: 'conversion',
            event_label: 'Gratis Probelektion',
          });
        },
      });
    })();

    return () => {
      // Beim Verlassen der Seite den Listener wieder entfernen.
      api?.('off', {
        action: 'bookingSuccessful',
        callback: () => {},
      });
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Hero / Intro */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold text-sm md:text-base px-5 py-1.5 rounded-full shadow-md border border-yellow-200 mb-4">
                Gratis &amp; unverbindlich
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Gratis Probelektion buchen
              </h1>
              <p className="text-lg text-gray-700 mb-2">
                Lerne uns kennen und teste deine Fahrkünste – ganz ohne Kosten
                und ohne Verpflichtung. Wähle einfach unten einen passenden
                Termin aus.
              </p>
              <p className="text-base text-gray-600">
                In Winterthur, Effretikon, Bassersdorf und Frauenfeld.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-5xl mx-auto">
              {highlights.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 100 + 200}>
                  <div className="bg-white/90 border border-blue-100 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Cal.com Buchungsformular */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <Cal
                  calLink={CALCOM_LINK}
                  style={{ width: '100%', height: '100%', minHeight: '650px', overflow: 'scroll' }}
                  config={{ layout: 'month_view' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Buchung;
