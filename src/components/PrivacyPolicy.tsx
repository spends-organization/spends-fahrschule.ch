import React from 'react';
import Layout from './Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        <p className="text-gray-600 mb-8">Stand: 1. Juni 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Der Schutz Ihrer persönlichen Daten ist uns ein sehr wichtiges Anliegen. Diese Datenschutzerklärung informiert Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten bei der Nutzung unserer Website. Wir aktualisieren diese Erklärung regelmässig, um Ihnen stets transparente Informationen zu bieten.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Erfasste Daten</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personenbezogene Daten</h3>
          <p className="mb-4">
            Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierbare Person beziehen. Eine Person ist identifizierbar, wenn sie direkt oder indirekt, insbesondere durch Zuordnung zu einer Kennung wie einem Namen, einer Kennnummer, Standortdaten oder einem Online-Identifikator, identifiziert werden kann.
          </p>
          <p className="mb-4">Beispiele für personenbezogene Daten sind Name, Adresse, E-Mail-Adresse und IP-Adresse.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Von Ihnen bereitgestellte Daten</h3>
          <p className="mb-4">
            Sie haben die Möglichkeit, uns personenbezogene Daten freiwillig zur Verfügung zu stellen. Dies geschieht beispielsweise, wenn Sie mit uns in Kontakt treten oder unsere Dienstleistungen in Anspruch nehmen möchten (z.B. beim Drücken des Whatsapp-Buttons "Jetzt Kontaktieren" oder "Auf Whatsapp Kontaktieren").
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatisch erhobene Daten</h3>
          <p className="mb-4">
            Bei der Nutzung unserer Website werden bestimmte Daten automatisch erfasst. Dies umfasst technische Daten wie Browser-Typ, Betriebssystem und Geräteinformationen.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Verwendete Dienste und Datenweitergabe</h2>

          Wir geben Ihre Personendaten an Unternehmen weiter, die selbst entscheiden können, wie sie die Daten nutzen. Meist erfolgt dies, weil es zur Einhaltung von gesetzlichen Vorschriften erforderlich ist, wenn eine offene Forderung an ein Inkassounternehmen übertragen wird oder um betrügerische Aktivitäten festzustellen.

          <h3 className="text-xl font-semibold mt-6 mb-3">Google Maps</h3>
          <p className="mb-4">
            Für die Standortdarstellung nutzen wir den Kartendienst Google Maps von Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) und Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA).
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Datenschutz und Cookies</h4>
          <p className="mb-4">
            Google Maps setzt Cookies, die für die Funktionalität des Kartendienstes erforderlich sind. Mit der Nutzung unserer Website stimmen Sie der Verarbeitung Ihrer Daten durch Google Maps zu.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Erfasste Informationen</h4>
          <p className="mb-4">
            Bei der Nutzung von Google Maps können folgende Daten verarbeitet werden:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP-Adresse</li>
            <li>Browser-Typ und -Version</li>
            <li>Betriebssystem</li>
            <li>Geräteinformationen</li>
            <li>Bildschirmauflösung</li>
            <li>Nutzungsdaten der Karte</li>
          </ul>
          <p className="mb-4">
            Die IP-Adresse wird durch Google Maps anonymisiert, sodass ein Personenbezug nicht mehr möglich ist. Sofern Sie ein Google-Konto besitzen und angemeldet sind, die Datenverarbeitung durch Google Maps auch geräteübergreifend erfolgen.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Zu welchem Zweck verarbeiten wir die Daten?</h4>
          <p className="mb-4">
            Die IP-Adresse wird verarbeitet, um den groben Standort des Besuchers zu analysieren, damit beim Webseitenaufruf der richtige Abschnitt angezeigt wird. Die technischen Informationen werden verarbeitet damit die Karte auf allen Geräten passend angezeigt werden kann. Ihre Interaktionsdaten werden erhoben, damit die Karte interaktiv genützt werden kann und damit wir die Kartennutzung verbessern können. Sofern Sie mit ihrem Google-Konto angemeldet sind, werden die Daten zwischen Ihren Geräten synchronisiert. Beispielsweise werden Markierungen und geplante Routen zwischen den Geräten synchronisiert.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Google Web Fonts</h3>
          <p className="mb-4">
            Zur einheitlichen Darstellung von Schriftarten verwenden wir Google Web Fonts. Diese werden beim Aufruf unserer Website in den Browsercache geladen.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Verwendung von Google Web Fonts</h4>
          <p className="mb-4">
            Wir setzen Google Web Fonts ein, um eine einheitliche und professionelle Darstellung unserer Website zu gewährleisten. Die Schriftarten werden direkt von Google Servern geladen und in Ihrem Browser zwischengespeichert.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Google Analytics</h3>
          <p className="mb-4">
            Wir verwenden Google Analytics, einen Webanalysedienst von Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA), um die Nutzung unserer Website zu analysieren und zu verbessern.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Verwendung von Google Analytics</h4>
          <p className="mb-4">
            Google Analytics verwendet Cookies, um Informationen über Ihre Nutzung unserer Website zu sammeln. Diese Informationen werden verwendet, um:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Die Nutzung unserer Website zu analysieren</li>
            <li>Berichte über die Websiteaktivitäten zu erstellen</li>
            <li>Weitere mit der Websitenutzung verbundene Dienstleistungen zu erbringen</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Erfasste Informationen</h4>
          <p className="mb-4">
            Google Analytics erfasst folgende Daten:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Besuchte Seiten</li>
            <li>Verweildauer auf den Seiten</li>
            <li>Verwendete Geräte und Browser</li>
            <li>Geografische Herkunft</li>
            <li>Verweisquellen (wie Sie auf unsere Website gelangt sind)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-4 mb-2">Datenschutz und Cookies</h4>
          <p className="mb-4">
            Die durch Google Analytics erzeugten Informationen über Ihre Nutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die IP-Adresse wird durch Google Analytics anonymisiert, sodass ein Personenbezug nicht mehr möglich ist.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Hosting</h3>
          <p className="mb-4">
            Unsere Website wird auf unserem eigenem Servern gehostet. Diese bieten eine schnelle und zuverlässige Bereitstellung der Inhalte.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Buchungssystem von kyberna.ch</h3>
          <p className="mb-4">
            Für die Online-Buchung von Verkehrskundeunterricht (VKU) nutzen wir das Buchungssystem der Firma <strong>kyberna AG</strong> (www.kyberna.ch),
            Fürst-Franz-Josef-Strasse 5, 9490 Vaduz, Fürstentum Liechtenstein. Bei der Nutzung des Buchungsformulars werden die von Ihnen eingegebenen Daten direkt an kyberna AG übermittelt und dort verarbeitet. Weitere Informationen zum Datenschutz finden Sie auf der Website von kyberna AG.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Änderungen</h2>
          <p>Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die jeweils aktuelle Version finden Sie auf der Website von uns.</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 