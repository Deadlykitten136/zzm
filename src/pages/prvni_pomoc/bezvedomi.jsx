import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function Bezvedomi() {
  return (
    <PageLayout
      title="Bezvědomí"
      lead="Bezvědomí je nebezpečné hlavně kvůli dýchacím cestám. Klíč je dýchání a dohled."
      checklist={[
        "Umět vyhodnotit: reaguje? dýchá normálně?",
        "Vědět, kdy použít zotavovací polohu",
        "Vědět, kdy přejít na KPR"
      ]}
      summary={
        <ul className="pageList">
          <li>Bezvědomí = riziko zapadnutí jazyka a aspirace.</li>
          <li>Dýchá normálně → zotavovací poloha + 155 + dohled.</li>
          <li>Nedýchá normálně → KPR.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Postup</h2>
      <ol className="pageList">
        <li>Bezpečí.</li>
        <li>Zkontroluj reakci (oslovení, jemné zatřesení rameny).</li>
        <li>Zprůchodni dýchací cesty.</li>
        <li>Zhodnoť dýchání (normální vs. nenormální).</li>
      </ol>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co dělat podle dýchání</h2>
      <div className="pageSummary">
        <ul className="pageList">
          <li><strong>Dýchá normálně</strong> → zotavovací poloha, kontrola, teplo, 155.</li>
          <li><strong>Nedýchá normálně</strong> (nebo vůbec) → KPR + 155.</li>
        </ul>
      </div>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Na co si dát pozor</h2>
      <ul className="pageList">
        <li>Nenechávat samotného.</li>
        <li>Pravidelně kontrolovat dýchání.</li>
        <li>Chráníš před prochlazením (izolace od země, deka).</li>
      </ul>
    </PageLayout>
  );
}
