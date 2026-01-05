import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function OrientacniVysetreniAVPU() {
  return (
    <PageLayout
      title="Vědomí (AVPU) a rychlé zhodnocení"
      lead="Rychlá orientace: je při vědomí? dýchá? krvácí? Je potřeba jednat hned."
      checklist={[
        "Znát AVPU škálu",
        "Umět rychle zkontrolovat dýchání a základní ohrožení života",
        "Vědět, kdy přejít na KPR / zotavovací polohu / volání 155"
      ]}
      summary={
        <ul className="pageList">
          <li>AVPU = rychlá škála vědomí.</li>
          <li>Největší průšvih: nedýchá / masivně krvácí / bezvědomí bez dohledu.</li>
          <li>Když nedýchá normálně → KPR.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">AVPU</h2>
      <ul className="pageList">
        <li><strong>A</strong> (Alert): při vědomí, reaguje přiměřeně.</li>
        <li><strong>V</strong> (Voice): reaguje na oslovení.</li>
        <li><strong>P</strong> (Pain): reaguje až na bolestivý podnět.</li>
        <li><strong>U</strong> (Unresponsive): nereaguje.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Rychlé zhodnocení (vteřiny)</h2>
      <ul className="pageList">
        <li>Oslov, zatřes rameny (bez agresivity).</li>
        <li>Podívej se na hrudník: <strong>dýchá?</strong> (normálně vs. lapavé/gasping).</li>
        <li>Mrkni na <strong>krvácení</strong> (masivní vnější krvácení).</li>
        <li>Podle výsledku: 155 / KPR / zotavovací poloha / ABCDE.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Rozhodovací mini-tahák</h2>
      <div className="pageSummary">
        <ul className="pageList">
          <li><strong>Nereaguje + nedýchá normálně</strong> → KPR + 155.</li>
          <li><strong>Nereaguje + dýchá normálně</strong> → zotavovací poloha + 155.</li>
          <li><strong>Reaguje</strong> → pokračuj ABCDE, řeš krvácení/bolest/dušnost.</li>
        </ul>
      </div>
    </PageLayout>
  );
}
