import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function UrazyPohybovyAparat() {
  return (
    <PageLayout
      title="Úrazy pohybového aparátu (kosti, klouby, svaly)"
      lead="Cíl: nezhoršit. Znehybnit, chladit, zvednout (když jde), řešit bolest a kontrolovat prokrvení."
      checklist={[
        "Poznat typické známky zlomeniny / vykloubení / podvrtnutí",
        "Umět základ: znehybnění v poloze nálezu + kontrola prokrvení",
        "Vědět, kdy volat 155 (deformita, otevřená zlomenina, silná bolest, porucha prokrvení)"
      ]}
      summary={
        <ul className="pageList">
          <li>Znehybni v poloze, v jaké jsi našla (netahat „zpět“).</li>
          <li>Kontroluj prokrvení a citlivost distálně (prsty, barva, teplo).</li>
          <li>Silná deformita / otevřená zlomenina / porucha prokrvení → 155.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Jak poznáš, že je to „vážnější“</h2>
      <ul className="pageList">
        <li>Deformita, nepřirozené postavení.</li>
        <li>Silná bolest, neschopnost došlápnout / pohnout.</li>
        <li>Otok, hematom, krepitace (nemusíš provokovat).</li>
        <li>Otevřená rána se viditelnou kostí = otevřená zlomenina.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc: “ZCH + kontrola”</h2>
      <ul className="pageList">
        <li><strong>Z</strong>nehybnit – ideálně zafixovat i sousední klouby.</li>
        <li><strong>C</strong>hladit – přes textil, po dávkách.</li>
        <li><strong>H</strong>lídat – prsty: barva, teplo, citlivost, pohyb.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co nedělat</h2>
      <ul className="pageList">
        <li>Nenarovnávat násilím.</li>
        <li>Nepodceňovat poruchu prokrvení (studené/modré prsty, necitlivost).</li>
        <li>Nenechat dlouho bez dozoru, když se stav horší.</li>
      </ul>
    </PageLayout>
  );
}
