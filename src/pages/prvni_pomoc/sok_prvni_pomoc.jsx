import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function SokPrvniPomoc() {
  return (
    <PageLayout
      title="Šok: první pomoc"
      lead="Cíl: nezhoršit stav, řešit příčinu, udržet teplo a rychle zavolat pomoc."
      checklist={[
        "Umět říct základní kroky první pomoci při šoku",
        "Vědět, že klid a teplo jsou zásadní",
        "Vědět, co nedělat (jídlo/pití u rizika operace, zbytečný pohyb, podcenění)"
      ]}
      summary={
        <div className="pageSummary">
          <ol className="pageList">
            <li>Řeš příčinu (krvácení, alergie, dušnost…).</li>
            <li>Volej 155.</li>
            <li>Ulož vhodně, udrž teplo, zklidni.</li>
            <li>Sleduj vědomí a dýchání, buď připravená na KPR.</li>
          </ol>
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Základní postup</h2>
      <ul className="pageList">
        <li><strong>Volat 155</strong> (šok je potenciálně život ohrožující).</li>
        <li><strong>Zastavit krvácení</strong> / řešit spouštěč (pokud jde).</li>
        <li><strong>Teplo</strong>: izolace od země, deka, ochrana před chladem.</li>
        <li><strong>Klid</strong>: minimalizovat pohyb, komunikovat klidně.</li>
        <li><strong>Dohled</strong>: kontrola vědomí a dýchání.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Poloha</h2>
      <ul className="pageList">
        <li>Podle stavu a zranění: cílem je komfort a nezhoršení.</li>
        <li>U dušnosti často lépe vsedě/polosed.</li>
        <li>U bezvědomí s normálním dýcháním → zotavovací poloha.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co nedělat</h2>
      <ul className="pageList">
        <li>Nedávat jídlo (a pití opatrně – podle situace a vědomí).</li>
        <li>Nenechávat samotného, nebagatelizovat.</li>
        <li>Nepřehánět přesuny, když to není nutné.</li>
      </ul>

      <div className="muted small" style={{ marginTop: 10 }}>
        Až budeme dělat anafylaxi, doplníme i konkrétní krok s EpiPenem do akutních stavů.
      </div>
    </PageLayout>
  );
}
