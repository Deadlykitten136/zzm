import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";


export default function UvodPrvniPomoc() {
  return (
    <PageLayout
      title="První pomoc – úvod"
      lead="Základní rámec, aby ses v krizové situaci nezasekla a šla krok po kroku."
      checklist={[
        "Rozlišit technickou / laickou / odbornou první pomoc",
        "Vědět, proč je důležitá bezpečnost zachránce",
        "Umět popsat svůj základní postup"
      ]}
      summary={
        <ul className="pageList">
          <li>Nejdřív bezpečí – pak teprve pomoc.</li>
          <li>Postup řešíš v jednoduchém algoritmu, ne emocemi.</li>
          <li>Když nevíš: volej 155 a řiď se operátorem.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Co je první pomoc</h2>
      <ul className="pageList">
        <li><strong>Technická</strong>: vyproštění, zajištění místa nehody.</li>
        <li><strong>Laická</strong>: pomoc do příjezdu ZZS.</li>
        <li><strong>Odborná</strong>: péče zdravotníkem.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Zlaté pravidlo</h2>
      <div className="pageSummary">
        Nejlepší první pomoc je taková, při které nepřibude další zraněný.
      </div>

    </PageLayout>
  );
}
