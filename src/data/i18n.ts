export type Lang = 'en' | 'da' | 'de'

export interface I18nDict {
  nav_homes: string
  nav_about: string
  nav_contact: string
  hero_eyebrow: string
  hero_title_a: string
  hero_sub_a: string
  hero_cta_primary: string
  homes_section_eyebrow: string
  homes_section_title: string
  homes_section_body: string
  home_1_name: string
  home_1_meta: string
  home_1_price: string
  home_2_name: string
  home_2_meta: string
  home_2_price: string
  about_eyebrow: string
  about_title: string
  about_body: string
  contact_title: string
  contact_body: string
  contact_phone: string
  contact_email: string
  contact_address: string
  booking_title: string
  booking_arrive: string
  booking_depart: string
  booking_guests: string
  booking_check: string
  booking_note: string
  footer_small: string
  footer_built: string
  detail_back: string
  detail_story: string
  detail_amenities: string
  detail_rates: string
  detail_book: string
  detail_location: string
}

export const i18n: Record<Lang, I18nDict> = {
  en: {
    nav_homes: 'Summer homes', nav_about: 'The family', nav_contact: 'Contact',
    hero_eyebrow: 'Pilegaard · Two summer houses',
    hero_title_a: 'Two houses.\nTwo islands.',
    hero_sub_a: 'Rented directly by the Pilegaard family. One on Bornholm by the Baltic, one in Kregme by the fjord. No agency, no commission.',
    hero_cta_primary: 'See the homes',
    homes_section_eyebrow: 'Summer homes',
    homes_section_title: 'Two houses,\nchosen carefully.',
    homes_section_body: 'We rent out our own two houses directly — no agency, no commission. One is on Bornholm by the Baltic Sea, the other in Kregme by Isefjord. Both sleep six.',
    home_1_name: 'Arnager, Bornholm', home_1_meta: 'Sleeps 6 · 250 m to the beach · Wood stove', home_1_price: 'from 4.800 kr / week',
    home_2_name: 'Kregme', home_2_meta: 'Sleeps 6 · 400 m to the fjord · Wood stove', home_2_price: 'from 4.200 kr / week',
    about_eyebrow: 'The family',
    about_title: 'Jens & Lone,\nand three boys now in Copenhagen.',
    about_body: 'Jens grew up on a family farm on Bornholm — cattle, wide skies, and the particular light of the island. He ran the farm for twenty years before moving on, and today works with agricultural machinery and its upkeep. Lone is a schoolteacher from Himmerland in northern Jutland, where she grew up on her father\'s cow farm outside Aars. Two farming families, two different corners of Denmark. They found each other, had three boys, and eventually found Pilegaard — a former potato and pig farm that now keeps a few cows and some hens. The houses came naturally. A place to share.',
    contact_title: 'Get in touch',
    contact_body: 'We usually reply the same day. Danish, English and German are all fine.',
    contact_phone: '+45 30 58 90 02', contact_email: 'jens@pilegaard.dk',
    contact_address: 'Pilegaard · Varpeløkken 4 · 3700 Rønne',
    booking_title: 'Book directly', booking_arrive: 'Arrive', booking_depart: 'Depart', booking_guests: 'Guests',
    booking_check: 'Check availability',
    booking_note: 'No booking fee. Pay 30% now, the rest 30 days before arrival.',
    footer_small: 'Pilegaard Udlejning ApS · CVR 12 34 56 78',
    footer_built: 'Made with care on Bornholm',
    detail_back: 'Back to all homes',
    detail_story: 'About the house',
    detail_amenities: "What's here",
    detail_rates: 'Rates',
    detail_book: 'Request these dates',
    detail_location: 'Location',
  },
  da: {
    nav_homes: 'Sommerhuse', nav_about: 'Familien', nav_contact: 'Kontakt',
    hero_eyebrow: 'Pilegaard · To sommerhuse',
    hero_title_a: 'To huse.\nTo øer.',
    hero_sub_a: 'Udlejes direkte af familien Pilegaard. Et på Bornholm ved Østersøen, et i Kregme ved fjorden. Ingen bureau, ingen provision.',
    hero_cta_primary: 'Se husene',
    homes_section_eyebrow: 'Sommerhuse',
    homes_section_title: 'To huse,\nvalgt med omhu.',
    homes_section_body: 'Vi lejer vores egne to huse direkte ud — ingen bureau, intet gebyr. Det ene ligger på Bornholm ved Østersøen, det andet i Kregme ved Isefjord. Begge har plads til seks.',
    home_1_name: 'Arnager, Bornholm', home_1_meta: 'Plads til 6 · 250 m til stranden · Brændeovn', home_1_price: 'fra 4.800 kr / uge',
    home_2_name: 'Kregme', home_2_meta: 'Plads til 6 · 400 m til fjorden · Brændeovn', home_2_price: 'fra 4.200 kr / uge',
    about_eyebrow: 'Familien',
    about_title: 'Jens & Lone,\nog tre drenge i København.',
    about_body: 'Jens voksede op på en kvæggård på Bornholm og drev den i tyve år, inden han lagde om. I dag arbejder han med landbrugsmaskiner og vedligeholdelse af dem. Lone er skolelærer og kommer fra Himmerland i det nordjyske, hvor hun voksede op på sin fars kvæggård uden for Aars. To landbrugsfamilier fra hver sin ende af landet. De fandt hinanden, fik tre drenge og til sidst Pilegaard — en gammel kartoffel- og svinefarm, der nu holder et par køer og nogle høns. Husene kom naturligt. Et sted at dele med andre.',
    contact_title: 'Kom i kontakt',
    contact_body: 'Vi svarer som regel samme dag. Dansk, engelsk og tysk er alle velkomne.',
    contact_phone: '+45 30 58 90 02', contact_email: 'jens@pilegaard.dk',
    contact_address: 'Pilegaard · Varpeløkken 4 · 3700 Rønne',
    booking_title: 'Book direkte', booking_arrive: 'Ankomst', booking_depart: 'Afrejse', booking_guests: 'Gæster',
    booking_check: 'Se ledighed',
    booking_note: 'Ingen gebyr. Betal 30% nu, resten 30 dage før ankomst.',
    footer_small: 'Pilegaard Udlejning ApS · CVR 12 34 56 78',
    footer_built: 'Lavet med omhu på Bornholm',
    detail_back: 'Tilbage til husene',
    detail_story: 'Om huset',
    detail_amenities: 'Hvad der er',
    detail_rates: 'Priser',
    detail_book: 'Anmod om disse dage',
    detail_location: 'Beliggenhed',
  },
  de: {
    nav_homes: 'Ferienhäuser', nav_about: 'Die Familie', nav_contact: 'Kontakt',
    hero_eyebrow: 'Pilegaard · Zwei Ferienhäuser',
    hero_title_a: 'Zwei Häuser.\nZwei Inseln.',
    hero_sub_a: 'Direkt vermietet von Familie Pilegaard. Eines auf Bornholm an der Ostsee, eines in Kregme am Fjord. Kein Makler, keine Provision.',
    hero_cta_primary: 'Häuser ansehen',
    homes_section_eyebrow: 'Ferienhäuser',
    homes_section_title: 'Zwei Häuser,\nmit Bedacht gewählt.',
    homes_section_body: 'Wir vermieten unsere eigenen zwei Häuser direkt — kein Makler, keine Provision. Eines liegt auf Bornholm an der Ostsee, das andere in Kregme am Isefjord. Beide für sechs Personen.',
    home_1_name: 'Arnager, Bornholm', home_1_meta: '6 Personen · 250 m zum Strand · Kaminofen', home_1_price: 'ab 640 € / Woche',
    home_2_name: 'Kregme', home_2_meta: '6 Personen · 400 m zum Fjord · Kaminofen', home_2_price: 'ab 560 € / Woche',
    about_eyebrow: 'Die Familie',
    about_title: 'Jens & Lone,\nund drei Söhne in Kopenhagen.',
    about_body: 'Jens wuchs auf einem Rinderhof auf Bornholm auf und bewirtschaftete ihn zwanzig Jahre lang, bevor er den Betrieb aufgab. Heute arbeitet er mit Landmaschinen und deren Wartung. Lone ist Lehrerin und stammt aus Himmerland in Nordjütland, wo sie auf dem Rinderhof ihres Vaters bei Aars aufwuchs. Zwei Bauernfamilien aus verschiedenen Ecken Dänemarks. Sie fanden sich, bekamen drei Söhne und schließlich Pilegaard — einen alten Kartoffel- und Schweinehof, auf dem heute ein paar Kühe und einige Hühner leben. Die Häuser kamen ganz natürlich. Ein Ort zum Teilen.',
    contact_title: 'Kontakt aufnehmen',
    contact_body: 'Wir antworten meist am selben Tag. Dänisch, Deutsch und Englisch sind alle willkommen.',
    contact_phone: '+45 30 58 90 02', contact_email: 'jens@pilegaard.dk',
    contact_address: 'Pilegaard · Varpeløkken 4 · 3700 Rønne',
    booking_title: 'Direkt buchen', booking_arrive: 'Ankunft', booking_depart: 'Abreise', booking_guests: 'Personen',
    booking_check: 'Verfügbarkeit prüfen',
    booking_note: 'Keine Buchungsgebühr. 30% jetzt, Rest 30 Tage vor Ankunft.',
    footer_small: 'Pilegaard Udlejning ApS · CVR 12 34 56 78',
    footer_built: 'Mit Sorgfalt auf Bornholm',
    detail_back: 'Zurück zu allen Häusern',
    detail_story: 'Über das Haus',
    detail_amenities: 'Was da ist',
    detail_rates: 'Preise',
    detail_book: 'Termin anfragen',
    detail_location: 'Lage',
  },
}
