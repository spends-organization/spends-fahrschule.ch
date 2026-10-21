# Schlachtplan VKU-Boost – Spend's Fahrschule

Stand: 21.10.2026 · Verantwortlich: Lazar (Laki Development)

**Ziel:** Die VKU-Kampagne auf das Niveau der Fahrschul-Kampagne bringen, die VKU-Kurse füllen und messbar machen, wie viele Anmeldungen über die Werbung kommen.

---

## 1. Ausgangslage (Zahlen vom 20.10.2026, Zeitraum 6.5.2025 – 20.10.2026)

| | Fahrschul-Kampagne | VKU-Kampagne |
|---|---|---|
| Typ | Performance Max | Suche (`vku-search-kampagne`) |
| Budget | CHF 3.00/Tag | CHF 1.00/Tag |
| Klicks | 5'936 | 602 |
| Kosten | CHF 4'882.62 | CHF 1'071.07 |
| Conversions | 105 | 3 |
| Kosten / Conversion | CHF 46.50 | CHF 357.02 |
| Status | Limited by budget | Limited by budget, Ziel-CPA CHF 68 |

**Auslastung VKU (asa-System, 20.10.2026):** Die meisten Kurse ab 26.10. haben 12 von 12 Plätzen frei. Es ist also genug Platz da, um die Kurse zu füllen.

## 2. Warum die VKU-Kampagne bisher nicht funktioniert hat

**Sicher (aus Code und Zahlen):**

1. **Keine echte Conversion.** Die Fahrschul-Kampagne zählt WhatsApp-Klicks als Google-Ads-Conversion (`src/components/Contact.tsx`, `src/components/Modal.tsx`, Label `ZmIDCPvelsYaEKLeu8Y_`). Die VKU-Seite meldet dagegen nur jeden **Seitenbesuch** als «Conversion» mit Wert CHF 109 (`src/pages/vku.tsx:40`, Event `vku_page_view`). Das ist keine Anmeldung. Google optimiert also blind.
2. **Die Anmeldung ist für Google unsichtbar.** Die Buchung läuft im eingebetteten asa-Fenster, und Klicks darin sieht Google Ads nicht.
3. **Das Budget ist zu klein.** Bei CHF 1/Tag und rund CHF 1.78 pro Klick reicht es im Schnitt nicht einmal für einen Klick pro Tag.
4. **Ein Ziel-CPA ohne Daten.** CHF 68 pro Conversion bei nur 3 Conversions: Google kann so nicht lernen und spielt die Werbung zurückhaltend aus.
5. **`/vku` fehlt in der Sitemap** (`public/sitemap.xml`).

**Vermutet (im Google-Ads-Konto zu prüfen):**

6. **Zu breite Ausspielung.** Die Spitze bei den Impressionen Mitte/Ende 2025 (bis ca. 14'000) deutet auf unpassende Suchanfragen oder Partner-Websites hin.
7. **Zielseite.** Zu prüfen ist, ob die Werbung auf `/vku` führt oder auf die Startseite.
8. **Werbetexte** ohne Preis, Kleingruppe oder Kursstart. Die Klickrate von 1,42 % deutet darauf hin.
9. **Konkurrenz** grösserer VKU-Anbieter in Winterthur.

## 3. Änderungen an der Website (dieses Repo)

> Kundenseite: Alles zuerst auf dem Branch `vku-boost` umsetzen und als Vercel-Vorschau testen. Live schalten nur mit OK von Lazar.

### 3.1 Messung (`src/pages/vku.tsx`)
- [ ] Das `vku_page_view`-Event als «Conversion» **entfernen**.
- [ ] Button **«Jetzt VKU-Platz buchen»** oben auf der Seite. Er öffnet die asa-Anmeldung in einem neuen Tab und löst die Google-Ads-Conversion **«VKU Buchen-Klick»** aus (Label in Google Ads anlegen, siehe 4.1).
- [ ] **Klick ins eingebettete Buchungsfenster** zählen (`window` blur + `document.activeElement === iframe`). Das ist eine Zusatz-Conversion, sie zeigt Interesse, aber keine fertige Anmeldung.
- [ ] WhatsApp-Button **«Frage zum VKU»** mit eigener Conversion, getrennt von den Fahrstunden.

### 3.2 VKU-Seite umbauen (Vorbild: Vorschau `sf-entwurf-lk26.vercel.app/vku`)
- [ ] **Oben sofort sichtbar:** Preis CHF 109, «max. 12 Plätze», «jede Woche ein Kurs», Buchen-Button.
- [ ] **Buchungsfenster:** feste Höhe statt `calc(100vh - 200px)` und `100vw`, damit es auf dem Handy bedienbar ist. Dazu der Link «In neuem Fenster öffnen».
- [ ] **Ablauf in 3 Schritten** und **Fragen zum VKU** einbauen.
- [ ] Hinweis auf Fahrstunden unten (gratis Probelektion, Pakete).

### 3.3 Auffindbarkeit
- [ ] Titel und Beschreibung der VKU-Seite: «VKU Winterthur – CHF 109 · Kleingruppe | Spend's Fahrschule».
- [ ] `/vku` in `public/sitemap.xml` eintragen.

### 3.4 Startseite
- [ ] Neues Design aus der Vorschau übernehmen (`~/Projects/spends-preview`), sobald die Fahrschule zustimmt.

## 4. Änderungen im Google-Ads-Konto (AW-17059213090)

### 4.1 Conversions
- [ ] Conversion-Aktion **«VKU Buchen-Klick»** anlegen (Kategorie: Anmeldung). Das Label kommt in 3.1.
- [ ] Conversion **«VKU WhatsApp»** anlegen.
- [ ] Prüfen, ob `vku_page_view` als Conversion zählt. Wenn ja: entfernen oder auf «sekundär» stellen.

### 4.2 VKU-Suchkampagne neu aufsetzen
- [ ] **Suchbegriffe** der letzten Monate prüfen und eine Liste mit Ausschluss-Begriffen anlegen.
- [ ] **Passende Suchbegriffe** (Wortgruppe und genau passend): «VKU Winterthur», «Verkehrskunde Winterthur», «VKU Kurs», «VKU Effretikon», «VKU Frauenfeld», «Verkehrskundeunterricht».
- [ ] **Gebiet:** Region Winterthur, Effretikon, Bassersdorf, Frauenfeld. Partner-Websites von Google ausschalten.
- [ ] **Werbetexte** mit Preis, Kleingruppe und wöchentlichem Kursstart, dazu Zusatzlinks («Kursdaten», «Fahrstunden», «WhatsApp»).
- [ ] **Zielseite** immer `/vku`.
- [ ] **Gebotsstrategie:** «möglichst viele Klicks», bis genug Conversions da sind. Danach «Conversions maximieren».
- [ ] **Budget:** Betrag nach Freigabe der Fahrschule. Startvorschlag CHF 5–10/Tag (Beispielwert, nicht berechnet).

### 4.3 Test in Performance Max
- [ ] In der funktionierenden PMax-Kampagne eine eigene **VKU-Gruppe** mit Zielseite `/vku` und VKU-Texten anlegen.

## 5. Google-Profil und eigene Schüler
- [ ] VKU als **Angebot mit Preis** im Google-Profil eintragen.
- [ ] Jede Woche einen **Beitrag** posten: «Nächster VKU ab …, noch X Plätze frei».
- [ ] **QR-Code für Bewertungen** am Ende jedes Kurses.
- [ ] Fahrschule: **eigene Fahrschüler** bei der ersten Fahrstunde auf den VKU hinweisen und den Link per WhatsApp schicken.
- [ ] Nach dem VKU: Teilnehmende ohne Fahrschule auf die **gratis Probelektion** hinweisen.

## 6. Ablauf

| Woche | Was |
|---|---|
| 1 | Startwert aus dem asa-System festhalten (Anmeldungen letzter Monat). Messung und neue VKU-Seite auf dem Branch bauen, testen, mit OK live schalten. |
| 2 | VKU-Kampagne neu aufsetzen, VKU-Gruppe in PMax starten. Google-Profil: VKU eintragen, erster Beitrag. |
| 3–4 | Jede Woche Suchbegriffe prüfen. Jeden Montag die Kurse in einer Woche prüfen und leere gezielt bewerben. |
| Ende Monat 1 | Erster Bericht: Klicks auf «Buchen» im Vergleich zu den asa-Anmeldungen. |
| Monat 2–3 | Auf «Conversions maximieren» umstellen, Budget anpassen. Nach 3 Monaten gemeinsam entscheiden. |

## 7. Was wir messen

| Kennzahl | Quelle |
|---|---|
| Klicks auf «VKU buchen» | Google Ads |
| Klicks ins Buchungsfenster | Google Ads (Zusatz) |
| Tatsächliche Anmeldungen | asa-System (Fahrschule zählt) |
| Kosten pro Anmeldung | Werbekosten ÷ Anmeldungen |
| VKU → Fahrstunden | Fahrschule |

## 8. Wer macht was

- **Lazar:** Website, Messung, Google Ads, Google-Profil, Monatsbericht.
- **Fahrschule:** Anmeldezahlen aus dem asa-System, eigene Schüler auf den VKU hinweisen, QR-Code für Bewertungen zeigen, Budget freigeben.

## 9. Regeln

- Keine festen Versprechen (z. B. «X Teilnehmende pro Monat»). Zuerst messen, dann entscheiden.
- Budget nur mit Freigabe der Fahrschule ändern.
- Änderungen an der Live-Seite nur über den Branch, mit Vorschau-Test und OK.

## 10. Fahrschul-Kampagne (Performance Max) weiter verbessern

Läuft gut (105 Conversions, CHF 46.50 pro Stück), ist aber durch das Budget begrenzt. Teil der monatlichen Betreuung.

- [ ] **Abgelehnte Zusatzlinks reparieren.** Google meldet «Fix your disapproved sitelinks».
- [ ] **Budget prüfen.** Google meldet «Limited by budget» und schätzt +10,3 % Conversions mit mehr Budget (Google-Schätzung, nicht geprüft). Erhöhung nur mit Freigabe der Fahrschule.
- [ ] **Conversion-Qualität.** Ein WhatsApp-Klick ist noch kein Schüler. Mit der Fahrschule abmachen, dass sie monatlich die echten Buchungen meldet, und den Anteil «Anfrage → Schüler» berechnen.
- [ ] **Zählweise prüfen:** «eine Conversion pro Klick» statt «jede», damit Doppel-Klicks nicht doppelt zählen.
- [ ] **Telefon-Klicks** (`tel:`) als eigene Conversion messen.
- [ ] **Bilder und Texte der Asset-Gruppe** auffrischen: echte Fotos (Autos, Fahrlehrer, VKU-Raum), Texte mit gratis Probelektion und Preisen. Optional ein kurzes Video aus eigenen Clips.
- [ ] **Zielgruppen-Signale:** Suchthemen wie «Fahrschule Winterthur», «Fahrstunden Winterthur», «Lernfahrausweis».
- [ ] **Gebiet prüfen:** nur die Region, in der wirklich Fahrstunden angeboten werden.
- [ ] **Ausschluss-Begriffe** auf Kontoebene (z. B. Jobs, «Fahrlehrer werden», Motorrad, falls nicht angeboten).
- [ ] **Bericht «Suchbegriff-Statistiken»** monatlich prüfen.
- [ ] **Neue Startseite** als Zielseite, sobald live.
- [ ] **Google-Profil** mit dem Ads-Konto verknüpfen (Standort-Erweiterung).

## 11. Notiz: Kann man fertige VKU-Anmeldungen im asa-Fenster messen?

Geprüft am 21.10.2026 im Code des asa-Buchungssystems (`vku-pgs.asa.ch`, Software von KYBERNA / ky2help, Version v7.4.32, Datei `/js/public.js`, Funktion `kyJS.addToCourse`).

**Ergebnis: Nein, nicht mit dem heutigen System.**
- Nach einer erfolgreichen Anmeldung zeigt asa nur eine Meldung im eigenen Fenster an (`data[0] == 'OK'`).
- Es gibt **keine Weiterleitung** auf eine eigene Danke-Seite.
- Es gibt **keine Nachricht** an die Seite, die das Fenster einbettet (kein `postMessage`).
- Es gibt **keinen eigenen Tracking-Code** (Google Ads oder Analytics) im asa-System.
- Der Browser verbietet aus Sicherheitsgründen, in das fremde Fenster hineinzuschauen.

**Was wir stattdessen messen:**
1. Klick auf «Jetzt VKU-Platz buchen» (öffnet asa im neuen Tab) → Hauptziel in Google Ads.
2. Klick ins eingebettete Fenster (Fokus-Erkennung) → Zusatz-Signal «VKU-Interesse».
3. Jeden Monat die tatsächlichen Anmeldungen aus dem asa-System mit den Klicks vergleichen.

**Für die Fahrschule, bei asa / KYBERNA nachfragen:**
- Kann nach der Anmeldung auf eine eigene Seite weitergeleitet werden (z. B. `spends-fahrschule.ch/vku/danke`)?
- Kann das System ein Google-Ads- oder Analytics-Tag einbinden?
- Gibt es eine monatliche Liste der Anmeldungen (Export), am besten mit der Angabe, wie die Person auf die Fahrschule gekommen ist?

Wenn asa eine Weiterleitung anbietet, zählen wir echte, fertige Anmeldungen als Conversion.
