import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function CMPFast() {
  return (
    <PageLayout
      title="CMP a FAST"
      lead="CMP je závod s časem. V první pomoci: poznat, volat 155, hlídat polykání a dýchání."
      checklist={[
        "Znát FAST test",
        "Vědět: volat 155 okamžitě, nečekat",
        "Vědět: nedávat jídlo/pití, dohled a bezpečná poloha"
      ]}
      summary={
        <div className="pageSummary">
          <strong>FAST:</strong> Face (pokles koutku), Arm (slabost paže), Speech (řeč), Time (volat 155).
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">FAST</h2>
      <ul className="pageList">
        <li><strong>F</strong>ace: úsměv – pokles koutku?</li>
        <li><strong>A</strong>rm: zvednout obě ruce – padá jedna?</li>
        <li><strong>S</strong>peech: jednoduchá věta – je řeč divná?</li>
        <li><strong>T</strong>ime: čas = 155 hned (a řekni čas začátku příznaků).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc</h2>
      <ol className="pageList">
        <li>Volat 155, popsat příznaky a kdy začaly.</li>
        <li>Klid, pohodlná poloha (často polosed).</li>
        <li>Nedávat jídlo/pití (riziko aspirace).</li>
        <li>Sledovat vědomí a dýchání.</li>
      </ol>
    </PageLayout>
  );
}
