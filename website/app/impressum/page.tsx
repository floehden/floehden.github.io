export default function Impressum() {
  return (
    <div className="max-w-2xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Impressum</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 DDG</h2>
        <p>Florian Löhden</p>
        <p>Heimstättenweg 89</p>
        <p>64295 Darmstadt</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p>E-Mail: <a href="mailto:florian.loehden@gmail.com" className="text-blue-400">florian.loehden@gmail.com</a></p>
      </section>

      <section className="text-sm text-slate-500 mt-8 border-t border-slate-800 pt-4">
        <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Florian Löhden (Anschrift wie oben)</p>
      </section>
    </div>
  );
}