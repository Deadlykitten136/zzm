import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function ABCDE() {
  return (
    <PageLayout
      title="ABCDE: co kontroluju a proč"
      lead="ABCDE je rámec, který tě vede od největšího průšvihu k méně akutním věcem."
      checklist={[
        "Umět vyjmenovat A–E a co zhruba znamenají",
        "Vědět, že nejdřív řešíš život ohrožující problém a až potom další",
        "Mít v hlavě pár typických příkladů u každého písmene"
      ]}
      summary={
        <div className="pageSummary">
          <ul className="pageList">
            <li><strong>A</strong> airway – dýchací cesty</li>
            <li><strong>B</strong> breathing – dýchání</li>
            <li><strong>C</strong> circulation – oběh + krvácení</li>
            <li><strong>D</strong> disability – neurologie (vědomí, zornice, glykemie…)</li>
            <li><strong>E</strong> exposure – celkové vyšetření, teplo/chlad, poranění</li>
          </ul>
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">A – Airway</h2>
      <ul className="pageList">
        <li>Je průchodná dýchací cesta?</li>
        <li>Chrápání/stridor, cizí těleso, zapadlý jazyk.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>B – Breathing</h2>
      <ul className="pageList">
        <li>Dýchá? Jak rychle? Jak kvalitně?</li>
        <li>Dušnost, cyanóza, jednostranné dýchání.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>C – Circulation</h2>
      <ul className="pageList">
        <li>Masivní krvácení? Studená bledá kůže? Slabost?</li>
        <li>Priorita: zastavit krvácení a řešit šok.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>D – Disability</h2>
      <ul className="pageList">
        <li>Vědomí (AVPU), řeč, hybnost, křeče.</li>
        <li>Hypoglykemie může napodobit neurologii.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>E – Exposure</h2>
      <ul className="pageList">
        <li>Prohlédnout celé tělo (krvácení, deformity, vyrážka).</li>
        <li>Chránit před prochlazením / přehřátím.</li>
      </ul>
    </PageLayout>
  );
}
