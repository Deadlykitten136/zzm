import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function DusnostAstma() {
  return (
    <PageLayout
      title="Dušnost: astma (inhalátor)"
      lead="Astma: dušnost, neklid, strach z udušení, prodloužený výdech s pískoty. Uklidnit, sed, inhalátor – přesně dle postupu."
      checklist={[
        "Znát příznaky astmatu (prodloužený výdech, pískoty)",
        "Preferovat sed a uklidnění",
        "Umět postup inhalátoru + kdy volat 155"
      ]}
      summary={
        <div className="pageSummary">
          Astma: <strong>sed</strong>, uklidnit. Inhalátor: sundat uzávěr → vložit do úst <strong>za zuby</strong> → při{" "}
          <strong>hlubokém nádechu</strong> aplikovat aerosol → <strong>zadržet dech 10 s</strong> → vydechnout nosem.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Příznaky</h2>
      <ul className="pageList">
        <li>Dušnost, neklid, strach z udušení.</li>
        <li><strong>Prodloužený výdech</strong> s písklavými fenomény.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc</h2>
      <ol className="pageList">
        <li>Uklidnit, <strong>preferujeme sed</strong>, uvolnit oděv, komfort.</li>
        <li>Pokud má inhalátor, <strong>aplikujeme</strong> (postup níže).</li>
        <li>Při zhoršení stavu <strong>kontaktujeme 155</strong>.</li>
      </ol>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Inhalátor – postup</h2>
      <ol className="pageList">
        <li>Odstraň uzávěr.</li>
        <li>Vlož náustek do dutiny ústní <strong>za zuby</strong>.</li>
        <li>V průběhu <strong>hlubokého nádechu</strong> aplikuj aerosol.</li>
        <li>Po aplikaci aerosolu <strong>zadrž dech na 10 sekund</strong>.</li>
        <li>Vydechni <strong>nosem</strong>.</li>
      </ol>
    </PageLayout>
  );
}
