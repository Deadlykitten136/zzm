import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function ZotavovaciPoloha() {
  return (
    <PageLayout
      title="Zotavovací poloha"
      lead="Pro člověka v bezvědomí, který dýchá normálně. Cíl: zabránit zapadnutí jazyka a vdechnutí zvratků."
      checklist={[
        "Vědět: kdy ano / kdy ne",
        "Znát cíl (zajištění dýchacích cest + prevence aspirace)",
        "Umět popsat základní postup a dohled"
      ]}
      summary={
        <ul className="pageList">
          <li>Bezvědomí + normální dýchání → zotavovací poloha + 155.</li>
          <li>Po uložení kontroluj dýchání průběžně.</li>
          <li>Pokud dýchání přestane být normální → KPR.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Kdy ano</h2>
      <ul className="pageList">
        <li>Člověk je v bezvědomí (nereaguje), ale <strong>dýchá normálně</strong>.</li>
        <li>Nejsou známky situace, kdy by poloha mohla zhoršit stav (viz níž).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Kdy spíš ne / opatrně</h2>
      <ul className="pageList">
        <li>Podezření na poranění páteře (nehoda, pád z výšky) → minimalizuj pohyb, ale zároveň řeš dýchací cesty.</li>
        <li>Masivní zranění, které vyžaduje jinou polohu (podle situace).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co hlídat potom</h2>
      <div className="pageSummary">
        <ul className="pageList">
          <li>Pravidelně kontroluj dýchání.</li>
          <li>Udrž teplo (deka, izolace od země).</li>
          <li>Komunikuj s 155, pokud jsi volala.</li>
        </ul>
      </div>

      <div className="muted small" style={{ marginTop: 10 }}>
        Obrázek postupu sem doplníme později (do assets) – místo už máme připravené.
      </div>
    </PageLayout>
  );
}
