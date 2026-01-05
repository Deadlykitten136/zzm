import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function DusnostLaryngitidaEpiglotitida() {
  return (
    <PageLayout
      title="Dušnost: epiglotitida a laryngitida"
      lead="Obě mohou rychle zhoršit dýchání. Klíč: polosed, klid, rychlý transport/155. Laryngitida má typický ‘štěkavý’ kašel a pomáhá chladný vzduch."
      checklist={[
        "Znát příznaky epiglotitidy (bolest v krku, polykání, změna hlasu, teplota)",
        "Vědět: brání se horizontále (zhoršení dušnosti) → polosed",
        "Znát typický ‘štěkavý’ kašel u laryngitidy + chladný vzduch"
      ]}
      summary={
        <div className="pageSummary">
          <strong>Epiglotitida:</strong> dušnost, bolest v krku, potíže s polykáním, změna hlasu, často teplota,{" "}
          <strong>nesnáší lež</strong>. <strong>Laryngitida:</strong> podobné + <strong>štěkavý suchý kašel</strong> → pomáhá{" "}
          <strong>inhalace chladného vzduchu</strong>. V obou: <strong>polosed + rychlý transport/155</strong>.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Epiglotitida</h2>
      <ul className="pageList">
        <li>Zánět epiglottis → otok → zúžení dýchacích cest.</li>
        <li>Příznaky: <strong>dušnost</strong>, <strong>bolest v krku</strong>, <strong>problémy s polykáním</strong>, <strong>změna hlasu</strong>.</li>
        <li>Může být i <strong>zvýšená teplota</strong>.</li>
        <li>Nemocný se často <strong>brání položení do horizontální polohy</strong> (dušnost se zhoršuje).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Laryngitida</h2>
      <ul className="pageList">
        <li>Častěji děti předškolního věku, typicky podzim–jaro.</li>
        <li>Zúžení dýchacích cest otokem a hleny.</li>
        <li>Příznaky podobné jako epiglotitida + typický <strong>dráždivý suchý “štěkavý” kašel</strong>.</li>
        <li>V první pomoci pomůže <strong>inhalace chladného vzduchu</strong> (okno, lednice) → zklidnění kašle.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc (u obou)</h2>
      <ol className="pageList">
        <li><strong>Polosed</strong> (komfortnější při zhoršeném dýchání).</li>
        <li>Klid, dohled, rychlý transport do nemocnice / <strong>155</strong> dle stavu.</li>
      </ol>
    </PageLayout>
  );
}
