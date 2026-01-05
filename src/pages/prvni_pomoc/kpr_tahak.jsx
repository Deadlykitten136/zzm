import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function KprTahak() {
  return (
    <PageLayout
      title="KPR: tahák na 1 stránku"
      lead="Rychlá rekapitulace celého postupu, když chceš opakovat bez přemýšlení."
      checklist={[
        "Umět říct celý postup v jedné minutě",
        "Vědět: volání 155 + KPR + AED (pokud je dostupné)",
        "Umět přepnout: když začne dýchat normálně → zotavovací poloha"
      ]}
      summary={
        <div className="pageSummary">
          <ol className="pageList">
            <li>Bezpečí.</li>
            <li>Zkontroluj reakci.</li>
            <li>Zprůchodni DC a rychle zhodnoť dýchání.</li>
            <li>Nedýchá normálně → volej 155 / nech zavolat.</li>
            <li>Komprese hrudníku, minimum přerušení.</li>
            <li>AED, pokud je dostupné (řídit se pokyny).</li>
            <li>Při změně stavu přehodnoť (dýchá normálně? reaguje?).</li>
          </ol>
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Mini-flow (zapamatuj si větu)</h2>
      <div className="pageSummary">
        <strong>Bezpečí → reakce → dýchání → 155 → komprese → AED → kontrola změny.</strong>
      </div>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Kde se lidi nejčastěji zaseknou</h2>
      <ul className="pageList">
        <li>Čekají na „jistotu“, místo aby volali a jednali.</li>
        <li>Přerušují komprese moc často.</li>
        <li>Nehlídají přechod: když začne normálně dýchat → zotavovací poloha a dohled.</li>
      </ul>
    </PageLayout>
  );
}
