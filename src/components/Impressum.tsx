import React from 'react';
import Layout from './Layout';

const Impressum: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <p className="mb-4">
              Verantwortlich für den Inhalt dieser Website:
            </p>
            <p className="mb-4">
              Spend's Fahrschule<br />
              Zürcherstrasse 46<br />
              8400 Winterthur<br />
              Schweiz
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <p className="mb-4">
              Spend Izairi<br />
              Telefon: <a href="tel:+41764305658" className="text-blue-600 hover:text-blue-800">+41 76 430 56 58</a><br />
              E-Mail: <a href="mailto:info@spends-fahrschule.ch" className="text-blue-600 hover:text-blue-800">info@spends-fahrschule.ch</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rechtliche Hinweise</h2>
            <p className="mb-4">
              Alle Texte und Links wurden sorgfältig geprüft und werden regelmässig aktualisiert. Wir sind bemüht, richtige und vollständige Informationen auf dieser Website bereitzustellen, übernehmen aber keine Haftung, Garantie oder Gewähr dafür, dass die durch diese Website bereitgestellten Informationen in jeder Hinsicht vollständig, korrekt und aktuell sind.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
            <p className="mb-4">
              Alle Inhalte dieser Website (Texte, Bilder, Grafiken, etc.) sind urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Bildmaterial</h2>
            <p className="mb-4">
              Die auf dieser Website verwendeten Bilder stammen von Unsplash (https://unsplash.com). Wir bedanken uns bei den Fotografen für ihre grossartigen Werke. Die Bilder werden unter der Unsplash-Lizenz verwendet, die eine freie Nutzung für kommerzielle und nicht-kommerzielle Zwecke erlaubt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Logo und Markenzeichen</h2>
            <p className="mb-4">
              Das "Spend's Fahrschule" Logo und alle damit verbundenen Markenzeichen sind Eigentum der Spend's Fahrschule.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Datenschutz</h2>
            <p className="mb-4">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum; 