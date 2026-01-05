import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function DusnostAnafylaxeEpipen() {
  return (
    <PageLayout
      title="Dušnost: anafylaktický šok a EpiPen"
      lead="Anafylaxe = rychlé zhoršení, otoky + dušnost/porucha vědomí. Vždy 155. Pokud má EpiPen, pomůžeš s aplikací."
      checklist={[
        "Poznat anafylaxi: otoky + dýchání/oběh/vědomí",
        "Vždy volat 155",
        "Znát přesný postup EpiPenu (stehno, kolmo, 5 sekund)"
      ]}
      summary={
        <div className="pageSummary">
          <strong>155 vždy.</strong> EpiPen: pevně uchopit → odstranit ochranný závit → kolmo do svalu (nejčastěji stehno) →{" "}
          <strong>nechat cca 5 s</strong> → vytáhnout.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Typické situace a příznaky</h2>
      <ul className="pageList">
        <li>Spouštěč: často <strong>včelí bodnutí</strong> nebo dietní chyba (např. korýši, ořechy…).</li>
        <li>Otok v místě vpichu / otok v dutině ústní, zhoršené dýchání.</li>
        <li>Pokles tlaku, porucha vědomí (rychlé zhoršování).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc</h2>
      <ol className="pageList">
        <li><strong>Volat 155</strong>.</li>
        <li>Uklidnit, komfortní poloha, dohled. Při zhoršení postup dle ABCDE.</li>
        <li>Místo (např. po bodnutí) můžeš <strong>chladit</strong>.</li>
      </ol>

      <h2 className="pageH2" style={{ marginTop: 12 }}>EpiPen (adrenalinové pero) – přesný postup</h2>
      <ol className="pageList">
        <li>Pevně uchop EpiPen.</li>
        <li><strong>Odstraň ochranný závit</strong>.</li>
        <li><strong>Kolmo aplikuj do svalu</strong> (nejčastěji <strong>stehno</strong>).</li>
        <li><strong>Nevytahuj hned</strong> – vyčkej přibližně <strong>5 sekund</strong>, až poté pero vytáhni.</li>
        <li>Jehla se po vytažení zasune zpět do pera → nižší riziko poranění.</li>
      </ol>
    </PageLayout>
  );
}
