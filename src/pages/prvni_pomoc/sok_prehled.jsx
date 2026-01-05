import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function SokPrehled() {
  return (
    <PageLayout
      title="Šok: přehled a příznaky"
      lead="Šok = nedostatečné prokrvení tkání. V první pomoci hlavně poznat a nezhoršit."
      checklist={[
        "Vědět, že šok je stav ohrožující život",
        "Znát typické příznaky šoku",
        "Umět vyjmenovat hlavní příčiny (v první pomoci prakticky)"
      ]}
      summary={
        <ul className="pageList">
          <li>Šok poznáš často podle: bledost, studený pot, slabost, úzkost, zrychlené dýchání/puls.</li>
          <li>Nejčastější spouštěče v praxi: krvácení, těžká alergie, velká bolest/úraz, dehydratace.</li>
          <li>Vždy řešíš příčinu (když jde) + teplo + klid + 155.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Jak šok vypadá</h2>
      <ul className="pageList">
        <li>Bledost, studený pot, chladné končetiny.</li>
        <li>Slabost, motání hlavy, pocit na omdlení.</li>
        <li>Úzkost, neklid, později zmatenost.</li>
        <li>Zrychlený puls, zrychlené dýchání.</li>
        <li>Postupné zhoršování stavu.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Časté příčiny v první pomoci</h2>
      <ul className="pageList">
        <li><strong>Hypovolemický</strong> (ztráta tekutin/krve): krvácení, popáleniny, dehydratace.</li>
        <li><strong>Anafylaktický</strong>: těžká alergická reakce.</li>
        <li><strong>Kardiogenní</strong>: srdeční selhávání / infarkt (podezření).</li>
        <li><strong>Neurogenní</strong>: některé úrazy páteře (méně časté, ale myslet).</li>
      </ul>

      <div className="muted small" style={{ marginTop: 10 }}>
        V první pomoci ti většinou stačí: poznat šok, volat 155 a udělat podpůrné kroky bez zhoršení.
      </div>
    </PageLayout>
  );
}
