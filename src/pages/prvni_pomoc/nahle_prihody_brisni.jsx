import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function NahlePrihodyBrisni() {
  return (
    <PageLayout
      title="Náhlé příhody břišní"
      lead="V první pomoci hlavně poznat, že to může být vážné, nekrmit, hlídat šok a volat 155 při varovných známkách."
      checklist={[
        "Znát varovné příznaky (silná bolest, zhoršování, šok, zvracení krve, krvácení)",
        "Vědět: nedávat jídlo, klid, teplo, dohled",
        "Umět říct, kdy volat 155"
      ]}
      summary={
        <div className="pageSummary">
          Varovné: <strong>silná bolest</strong>, tvrdé břicho, zhoršování, omdlévání/šok, krvácení, porucha vědomí → <strong>155</strong>.  
          Nedávat jídlo, klid, teplo, dohled.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Kdy je to “red flag”</h2>
      <ul className="pageList">
        <li>Velmi silná bolest, která nepolevuje nebo se zhoršuje.</li>
        <li>Zvracení (hlavně opakované), krev ve zvratcích/stolici.</li>
        <li>Známky šoku: bledost, studený pot, slabost, kolaps.</li>
        <li>Tvrdé “prkno” břicho, výrazná citlivost.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc</h2>
      <ol className="pageList">
        <li>Klid, pohodlná poloha (často s pokrčenými koleny).</li>
        <li>Nedávat jídlo (pití opatrně dle stavu a vědomí).</li>
        <li>Teplo, dohled, sledovat zhoršování.</li>
        <li>155 při varovných příznacích.</li>
      </ol>
    </PageLayout>
  );
}
