import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function PoraneniChladem() {
  return (
    <PageLayout
      title="Poranění chladem (omrzliny, podchlazení)"
      lead="Omrzliny: šetrně zahřívat, puchýře nepropichovat, sterilně krýt. Podchlazení: pomalé zahřívání, žádný alkohol a minimální manipulace."
      checklist={[
        "Omrzliny: šetrné zahřátí, mírně teplá voda, puchýře nepropichovat",
        "Podchlazení: pomalé zahřívání, alkohol kontraindikován",
        "Manipulovat co nejméně (studená krev z periferie může zhoršit stav)",
        "Při zhoršení: ABCDE + 155"
      ]}
      summary={
        <div className="pageSummary">
          Omrzliny: prsty/uši/nos – bledé akrální části, puchýře, bolest; vážně modrá/černá.
          Šetrně ohřát (mírně teplá voda), puchýře ne. Podchlazení: pomalu zahřívat,{" "}
          <strong>žádný alkohol</strong>, <strong>minimální manipulace</strong>. Zhoršení → 155.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Omrzliny</h2>
      <ul className="pageList">
        <li>Nejčastěji: prsty, uši, nos.</li>
        <li>Příznaky: bledé nedokrvené akrální části, puchýře, bolest; ve vážnějších stadiích modrá/černá.</li>
        <li>První pomoc: zamezit dalšímu chladu, <strong>šetrně ohřát</strong>.</li>
        <li>Akrální části: zabalit a dát pod <strong>mírně teplou vodu</strong>.</li>
        <li><strong>Vyhýbat se razantnímu ohřevu</strong>.</li>
        <li><strong>Puchýře nepropichovat</strong>, krýt sterilně.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Celkové podchlazení</h2>
      <ul className="pageList">
        <li>Příznaky: porucha vědomí, třes, snížení pulzu.</li>
        <li><strong>Pomalé zahřívání</strong>.</li>
        <li><strong>Alkoholické nápoje jsou kontraindikovány</strong>.</li>
        <li>
          S raněným <strong>manipulovat co nejméně</strong> – studená krev z periferie se může přesunout do centrálního řečiště a zhoršit stav.
        </li>
        <li>Při zhoršení: postup dle <strong>ABCDE</strong> a <strong>155</strong>.</li>
      </ul>
    </PageLayout>
  );
}
