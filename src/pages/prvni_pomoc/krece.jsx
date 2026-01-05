import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function Krece() {
  return (
    <PageLayout
      title="Křeče"
      lead="Při křečích chráníš před poraněním, nemáš co cpát do pusy a po křečích hlídáš dýchání."
      checklist={[
        "Vědět: nebránit křečím silou, nic do pusy",
        "Umět zajistit bezpečí okolí",
        "Vědět: po křečích zhodnotit dýchání a vědomí, 155 v rizikových situacích"
      ]}
      summary={
        <div className="pageSummary">
          Chraň hlavu, odstraň nebezpečné předměty, neměř sílu. Po křečích: dýchání → zotavovací poloha / KPR.  
          <strong>155</strong> při první křeči, dlouhém trvání, opakování, poranění, těhotenství, diabetu, dítěti, poruše vědomí.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Během křečí</h2>
      <ul className="pageList">
        <li>Bezpečí: odstranit ostré věci, něco měkkého pod hlavu.</li>
        <li>Nedržet násilím, nesnažit se “otevřít” pusu.</li>
        <li>Nedávat nic do úst.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Po křečích</h2>
      <ul className="pageList">
        <li>Zhodnotit dýchání a vědomí.</li>
        <li>Dýchá normálně a nereaguje → zotavovací poloha.</li>
        <li>Nedýchá normálně → KPR.</li>
        <li>Dohled, teplo, klid.</li>
      </ul>
    </PageLayout>
  );
}
