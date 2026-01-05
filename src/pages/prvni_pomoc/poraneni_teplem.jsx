import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function PoraneniTeplem() {
  return (
    <PageLayout
      title="Poranění teplem (popáleniny, opařeniny, chemie, elektřina, úpal/úžeh)"
      lead="Základ: zastavit působení tepla, sundat nepřilnavý oděv a šperky, sterilně krýt, chladit vodou ~10 °C (nikdy ledem). U rozsáhlých opatrně – riziko podchlazení/šoku."
      checklist={[
        "Sundat nepřilnavý oděv a šperky; přiškvařený oděv nestrhávat",
        "Puchýře nepropichovat; sterilně krýt",
        "Chladit vodou cca 10 °C, nikdy ledem; u rozsáhlých opatrně",
        "Nepodávat tekutiny u rozsáhlých poranění (anestezie/aspirace)",
        "Chemie: pozor na vodu, když si nejsem jistá → 155; elektřina: nejdřív odpojit proud"
      ]}
      summary={
        <div className="pageSummary">
          Popáleniny: zastavit teplo → nepřilnavý oděv+šperky dolů → puchýře ne → sterilní krytí → voda ~10 °C, ne led.
          Rozsáhlé: nechladit plošně. <strong>Tekutiny nepodávat</strong>. Chemie: raději suché odstranění, když si nejsem jistá → 155.
          Elektřina: nejdřív vypnout/odpojit.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Termické popáleniny – postup</h2>
      <ol className="pageList">
        <li>Zabránit dalšímu působení tepla (hasicí přístroj, kabát, voda – dle situace).</li>
        <li>Sundat <strong>nepřilnavý oděv</strong> a <strong>šperky</strong> (otok může zhoršit prokrvení).</li>
        <li><strong>Puchýře nepropichovat</strong>. <strong>Přiškvařený oděv</strong> neodstraňovat silou.</li>
        <li>Krytí <strong>sterilním</strong> materiálem.</li>
        <li>Chladit vodou, <strong>nikdy ledem</strong>. Voda kolem <strong>10 °C</strong>.</li>
        <li>U rozsáhlých popálenin chladit obezřetně (spíš lokálně – ruce/krk) jen dokud to ulevuje.</li>
        <li>
          <strong>Nepodávat tekutiny</strong> (další péče může probíhat v celkové anestezii → riziko aspirace).
        </li>
      </ol>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Chemické popálení</h2>
      <ul className="pageList">
        <li>Pozor na kontakt s vodou – u některých látek může účinek posílit.</li>
        <li>Pokud je to možné, vol <strong>suché manuální odstranění</strong>.</li>
        <li>Když si nejsi jistá → <strong>kontaktuj 155</strong>.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Elektrický proud</h2>
      <ul className="pageList">
        <li>Buď obezřetná – zdroj může být stále pod proudem.</li>
        <li>Vypnout: vytáhnout ze zásuvky / vypnout hlavní spínač.</li>
        <li>Když nejde: odstrčit postiženého <strong>nevodivým předmětem</strong>.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Úpal / úžeh</h2>
      <ul className="pageList">
        <li>Úpal: přehřátí + nedostatečné pocení. Úžeh: přehřátí mozkové tkáně při slunci na hlavu.</li>
        <li>Příznaky: bolest hlavy, nevolnost, zmatenost.</li>
        <li>První pomoc: přesun do stínu, chlazení, <strong>dostatek tekutin</strong>, prevence (pokrývka hlavy).</li>
      </ul>
    </PageLayout>
  );
}
