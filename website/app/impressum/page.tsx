import Link from "next/link";

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto py-12 space-y-8 text-slate-300">
      <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 DDG</h2>
        <p>Florian Löhden</p>
        <p>Heimstättenweg 89</p>
        <p>64295 Darmstadt</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Kontakt</h2>
        <p>Telefon: <a href="tel:+4915172062105" className="hover:text-blue-400 transition">+49 1517 2062105</a></p>
        <p>E-Mail: <a href="mailto:florian.loehden@gmail.com" className="hover:text-blue-400 transition">florian.loehden@gmail.com</a></p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Redaktionell verantwortlich</h2>
        <p>Florian Löhden</p>
        <p>Heimstättenweg 89</p>
        <p>64295 Darmstadt</p>
      </section>

      <section className="space-y-2 border-t border-slate-800 pt-6">
        <h2 className="text-xl font-semibold text-white">EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ec.europa.eu/consumers/odr/</a>.</p>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </section>

      <section className="space-y-4 text-sm text-slate-400 border-t border-slate-800 pt-6">
        <h3 className="text-lg font-semibold text-white">Haftung für Inhalte</h3>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

        <h3 className="text-lg font-semibold text-white">Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

        <h3 className="text-lg font-semibold text-white">Urheberrecht</h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
      </section>
    </div>
  );
}