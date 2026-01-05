import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function KrvaceniTypy() {
  return (
    <PageLayout
      title="Krvácení: typy a příznaky"
      lead="Krvácení řešíš rychle – prioritou je masivní krvácení a známky šoku."
      checklist={[
        "Rozlišit vnější vs. vnitřní krvácení",
        "Poznat, kdy jde o masivní krvácení",
        "Znát typické příznaky ztráty krve / rozvíjejícího se šoku"
      ]}
      summary={
        <ul className="pageList">
          <li>Masivní krvácení = okamžitá akce (tlak, obvaz, volat 155).</li>
          <li>Vnitřní krvácení může být skryté → sleduj příznaky.</li>
          <li>Šok = bledost, studený pot, slabost, zrychlený puls, zhoršování.</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Typy krvácení</h2>
      <ul className="pageList">
        <li><strong>Vnější</strong>: krev je vidět, řešíš okamžitě tlakem/obvazem.</li>
        <li><strong>Vnitřní</strong>: krev není vidět, projeví se příznaky (a stav se horší).</li>
        <li><strong>Kapilární</strong>: spíš „prosakování“.</li>
        <li><strong>Žilní</strong>: tmavší, plynule vytéká.</li>
        <li><strong>Tepenné</strong>: jasně červená, může „stříkat“ v pulzech.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Kdy myslet na masivní krvácení</h2>
      <ul className="pageList">
        <li>Krev teče rychle, prosakuje přes obvazy, tvoří louži.</li>
        <li>Krvácení z velké rány / amputace / hlubokého poranění.</li>
        <li>Postižený bledne, je slabý, motá se mu hlava, „odpadává“.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Příznaky ztráty krve / šoku</h2>
      <ul className="pageList">
        <li>Bledost, studený pot, třes, žízeň.</li>
        <li>Slabost, úzkost, zmatenost, ospalost.</li>
        <li>Zrychlený puls, zrychlené dýchání.</li>
        <li>Stav se postupně zhoršuje.</li>
      </ul>
    </PageLayout>
  );
}
