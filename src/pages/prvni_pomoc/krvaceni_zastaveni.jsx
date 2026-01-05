import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function KrvaceniZastaveni() {
  return (
    <PageLayout
      title="Krvácení: jak zastavit + fixace předmětu"
      lead="Tlak je král. Nepřemýšlíš moc dlouho – děláš jednoduché kroky v pořadí."
      checklist={[
        "Umět popsat: přímý tlak → tlakový obvaz → dohled",
        "Vědět, že cizí předmět se z rány nevytahuje",
        "Vědět, kdy volat 155 a jak hlídat šok"
      ]}
      summary={
        <ul className="pageList">
          <li>1) Přímý tlak na ránu. 2) Tlakový obvaz. 3) Kontrola a teplo.</li>
          <li>Cizí předmět v ráně: <strong>nevyndávat</strong>, jen stabilizovat.</li>
          <li>Současně mysli na šok: teplo, poloha, klid, 155.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Zastavení krvácení – základní postup</h2>
      <ol className="pageList">
        <li><strong>Přímý tlak</strong> (ideálně přes čistý materiál).</li>
        <li><strong>Elevace</strong> končetiny (když dává smysl a nebolí to výrazně).</li>
        <li><strong>Tlakový obvaz</strong> (nebo improvizace).</li>
        <li>Kontrola: neprosakuje? nezhoršuje se stav?</li>
      </ol>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Když je v ráně cizí předmět</h2>
      <ul className="pageList">
        <li><strong>Nevytahovat</strong> (může „ucpávat“ cévu a zhorší krvácení).</li>
        <li>Stabilizuj ho: oblož kolem (např. rolky obvazu) a zafixuj.</li>
        <li>Řeš tlak okolo rány, ne na předmět.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co dělat souběžně</h2>
      <ul className="pageList">
        <li>Volej 155, pokud je masivní krvácení nebo se horší stav.</li>
        <li>Udrž teplo, zklidni, nenechávej samotného.</li>
        <li>Sleduj vědomí a dýchání.</li>
      </ul>

      <div className="muted small" style={{ marginTop: 10 }}>
        Pokud budete mít ve skriptech turniket / specifika, doplníme to přesně podle výuky.
      </div>
    </PageLayout>
  );
}
