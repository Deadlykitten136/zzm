import PageLayout from "../../components/PageLayout.jsx";
import Quiz from "../../components/Quiz.jsx";
import pool from "../../data/questions/prvni_pomoc_pool.json";

export default function TestPrvniPomoc() {
  return (
    <PageLayout
      title="Test – První pomoc (nekonečný trenažér)"
      lead="Jedna otázka → hned vyhodnocení → ukáže se správná odpověď + vysvětlení → Další. Otázky se losují náhodně, po vyčerpání se znovu promíchají."
    >
      <div className="pageCard">
        <div className="pageSummary">
          <strong>Jak to funguje:</strong>
          <ul className="pageList">
            <li>Vybereš A/B/C/D.</li>
            <li>Hned vidíš správně/špatně + vysvětlení.</li>
            <li>Klikneš „Další otázka“ a jedeš dál.</li>
            <li>Po vyčerpání všech otázek se sada znovu promíchá (nekonečno).</li>
          </ul>
        </div>

        <Quiz items={pool} storageKey="zzm:test:prvni_pomoc" />

        <div className="muted small">
          Tip: když narazíš na otázku, kterou pleteš, napiš si k ní jednu větu „proč je správně
          právě tohle“ – a z testu se stane učící nástroj, ne jen zkoušení.
        </div>
      </div>
    </PageLayout>
  );
}
