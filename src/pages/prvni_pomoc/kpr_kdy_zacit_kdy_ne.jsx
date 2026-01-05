import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function KprKdyZacitKdyNe() {
  return (
    <PageLayout
      title="KPR: kdy začít a kdy ne"
      lead="Rozhodnutí vteřiny. Nečekáš na jistotu – stačí, že nedýchá normálně."
      checklist={[
        "Umět rozhodnout: KPR ano / ne",
        "Znát rozdíl: normální dýchání vs. lapavé (gasping)",
        "Vědět, že při nejistotě je lepší začít a volat 155"
      ]}
      summary={
        <ul className="pageList">
          <li><strong>Nereaguje + nedýchá normálně</strong> → KPR.</li>
          <li>Lapavé dýchání (gasping) se bere jako <strong>nenormální</strong>.</li>
          <li>Když se stav změní → přehodnotíš (kontrola dýchání, případně přerušení).</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Kdy zahájit KPR</h2>
      <ul className="pageList">
        <li>Člověk <strong>nereaguje</strong> (AVPU = U) a <strong>nedýchá normálně</strong>.</li>
        <li>Typické: nehybný, žádná reakce, dýchání žádné nebo jen lapavé.</li>
        <li>Když si nejsi jistá → zahájit, volat 155, řídit se operátorem.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co je „nenormální dýchání“</h2>
      <ul className="pageList">
        <li><strong>Gasping</strong> = lapavé, nepravidelné, „rybí“ nádechy → nepočítá se jako normální.</li>
        <li>Občasné chrčení bez pravidelného dechového vzoru → spíš ne.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Kdy KPR nezahajovat / kdy přerušit</h2>
      <ul className="pageList">
        <li>Když je zjevné, že je pozdě (zjevné známky smrti) – podle výuky/souvislostí.</li>
        <li>Když postižený začne <strong>reagovat</strong> nebo <strong>dýchat normálně</strong>.</li>
        <li>Pokud je zachránce v ohrožení (bezpečnost má prioritu).</li>
      </ul>

      <div className="muted small" style={{ marginTop: 10 }}>
        Pozn.: Přesné hranice „kdy ne“ se řídí tím, co máte ve skriptech/výuce – tady držíme bezpečný základ.
      </div>
    </PageLayout>
  );
}
