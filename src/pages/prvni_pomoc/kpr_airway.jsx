import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function KprAirway() {
  return (
    <PageLayout
      title="KPR: zprůchodnění dýchacích cest (A)"
      lead="Nejdřív rychle zprůchodnit dýchací cesty a zkontrolovat dýchání. Pak komprese."
      checklist={[
        "Umět popsat základní zprůchodnění DC",
        "Vědět, co dělat při podezření na poranění krční páteře",
        "Umět krátce zkontrolovat dýchání"
      ]}
      summary={
        <ul className="pageList">
          <li>Standard: <strong>záklon hlavy + zvednutí brady</strong>.</li>
          <li>Podezření na C páteř: minimalizovat záklon, spíš <strong>předsunutí dolní čelisti</strong>.</li>
          <li>Dýchání hodnotíš rychle – ne minutu.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Zprůchodnění dýchacích cest</h2>
      <ul className="pageList">
        <li>U bezvědomí často dochází k zapadnutí jazyka → uzávěr DC.</li>
        <li>Standardní postup: <strong>záklon hlavy</strong> a <strong>zvednutí brady</strong>.</li>
        <li>Podívej se do úst jen pokud je viditelná překážka (ne „hrabat“ hluboko).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Podezření na poranění krční páteře</h2>
      <ul className="pageList">
        <li>Nehoda, pád z výšky, sportovní úraz → mysli na C páteř.</li>
        <li>Záklon minimalizuj, preferuj manévr <strong>předsunutí dolní čelisti</strong> (jaw thrust).</li>
        <li>Priorita ale pořád zůstává: <strong>dýchání</strong>.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Rychlá kontrola dýchání</h2>
      <ul className="pageList">
        <li>Dívám se na hrudník (pohyby), poslouchám, vnímám proud vzduchu.</li>
        <li>Hodnotím: <strong>normální vs. nenormální</strong> (gasping).</li>
      </ul>

      <div className="muted small" style={{ marginTop: 10 }}>
        Obrázky (záklon / jaw thrust) doplníme později do assets.
      </div>
    </PageLayout>
  );
}
