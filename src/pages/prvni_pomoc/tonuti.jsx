import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function Tonuti() {
  return (
    <PageLayout
      title="Tonutí"
      lead="Tonutí = bezdeší po aspiraci tekutiny. Nejdřív bezpečí, volání pomoci a pokud je bezdeší/abnormální dech: 5 úvodních vdechů a pak KPR."
      checklist={[
        "Myslet na bezpečí zachránce (nepřeceňovat síly)",
        "Záchrana: nejdřív plovací předměty (kruh, lano, klacek)",
        "Po vytažení: vyčistit dutinu ústní → kontrola dýchání 10 s → 5 úvodních vdechů → KPR"
      ]}
      summary={
        <div className="pageSummary">
          Po vytažení z vody: otočit na bok, <strong>vyčistit dutinu ústní</strong>, zkontrolovat dýchání ~<strong>10 s</strong>.
          Nedýchá / dýchá abnormálně → <strong>5 úvodních vdechů</strong> → pokračovat dle KPR.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Bezpečí a záchrana</h2>
      <ul className="pageList">
        <li>Vždy mysli na své zdraví, nepřeceňuj síly.</li>
        <li>Nejprve volej pomoc a zvaž rizika (rozvodněný jez apod.).</li>
        <li>Preferuj záchranu na dálku: <strong>kruh, kláda, lano, dlouhý klacek</strong>.</li>
        <li>Skok do vody jen když je to bezpečné (ideálně jištění, vesta).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Po vytažení z vody (bezvědomí + bezdeší)</h2>
      <ol className="pageList">
        <li>Otoč postiženého na bok a <strong>vyčisti dutinu ústní</strong>.</li>
        <li>Zkontroluj dýchání (záklon hlavy, poslech, sledování hrudníku) cca <strong>10 sekund</strong>.</li>
        <li>Stále nedýchá nebo dýchá abnormálně → <strong>5 úvodních vdechů</strong>.</li>
        <li>Pokračuj dle <strong>kardiopulmonální resuscitace</strong>.</li>
      </ol>
    </PageLayout>
  );
}
