import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function Infarkt() {
  return (
    <PageLayout
      title="Infarkt myokardu"
      lead="Cíl: rychle poznat, volat 155, nezatěžovat pacienta a hlídat zhoršení."
      checklist={[
        "Znát typické příznaky infarktu + atypické projevy",
        "Umět říct: volat 155, klid, poloha, dohled",
        "Vědět, že se to může zhoršit do zástavy → připravit se na KPR"
      ]}
      summary={
        <ul className="pageList">
          <li>Tlak/svírání na hrudi, vyzařování, dušnost, studený pot, nevolnost.</li>
          <li>Okamžitě 155, klid, polosed, dohled.</li>
          <li>Při zhoršení vědomí/dýchání → KPR.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Typické příznaky</h2>
      <ul className="pageList">
        <li>Tlak, svírání, pálení na hrudi (minuty a déle).</li>
        <li>Vyzařování do levé paže, krku, čelisti, zad.</li>
        <li>Dušnost, slabost, studený pot, nevolnost.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Atypické příznaky</h2>
      <ul className="pageList">
        <li>U žen/seniorů/diabetiků může být méně “učebnicové”.</li>
        <li>Může dominovat dušnost, únava, nevolnost, “divný pocit”.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc</h2>
      <ol className="pageList">
        <li>Volat 155, popsat příznaky a čas začátku.</li>
        <li>Klid, polosed (pokud dušný), uvolnit oděv.</li>
        <li>Nenechat samotného, sledovat dýchání/vědomí.</li>
        <li>Při zástavě → KPR.</li>
      </ol>
    </PageLayout>
  );
}
