import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function KprCompressions() {
  return (
    <PageLayout
      title="KPR: komprese hrudníku"
      lead="Komprese jsou jádro KPR. Technika > síla. Pravidelně, dostatečně hluboko, s minimem přerušení."
      checklist={[
        "Umět popsat polohu rukou a postavení zachránce",
        "Vědět, že komprese mají mít rytmus a co nejméně přerušení",
        "Umět říct, co je nejčastější chyba (mělké/nerovnoměrné/časté pauzy)"
      ]}
      summary={
        <ul className="pageList">
          <li>Ruce na střed hrudníku, paže natažené, tlak kolmo dolů.</li>
          <li>Rytmus pravidelný, pauzy minimální.</li>
          <li>Střídej se, pokud je s kým (kvalita kompresí klesá únavou).</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Technika</h2>
      <ul className="pageList">
        <li>Poloha: postižený na tvrdé podložce.</li>
        <li>Paty dlaní na <strong>střed hrudníku</strong>, druhá ruka na první.</li>
        <li>Paže natažené, ramena nad rukama → tlak jde z váhy těla.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co hlídat</h2>
      <ul className="pageList">
        <li>Pravidelný rytmus, stejná hloubka, návrat hrudníku.</li>
        <li>Minimalizovat přerušení (pauzy zhoršují průtok).</li>
        <li>Pokud se unavíš → střídat (když je s kým).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Nejčastější chyby</h2>
      <ul className="pageList">
        <li>Mělké komprese, špatné místo, ohnuté lokty.</li>
        <li>Příliš dlouhé pauzy (hledání pulzu, zmatek).</li>
        <li>Nerovnoměrné tempo (rychlé a pak pauza).</li>
      </ul>

      <div className="muted small" style={{ marginTop: 10 }}>
        Čísla (frekvence/hloubka/poměr s vdechy) doplníme přesně podle vašich skript – zatím držíme principy.
      </div>
    </PageLayout>
  );
}
