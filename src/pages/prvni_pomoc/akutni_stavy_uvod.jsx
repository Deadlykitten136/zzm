import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function AkutniStavyUvod() {
  return (
    <PageLayout
      title="Akutní stavy: úvod (kdy vždy volat 155)"
      lead="Akutní stavy jsou zkoušková klasika: poznat varovné příznaky, volat včas, nezhoršit."
      checklist={[
        "Umět vyjmenovat “red flags”, kdy volat 155 bez váhání",
        "Vědět, že první pomoc je hlavně rychlé rozhodnutí + dohled",
        "Držet se ABCDE a nebát se operátora 155"
      ]}
      summary={
        <div className="pageSummary">
          <strong>Volám 155 bez váhání</strong>, když je: bezvědomí / nenormální dýchání / dušnost / bolest na hrudi / známky CMP / křeče / těžká alergie / masivní krvácení / rychlé zhoršování.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Red flags (rychlý seznam)</h2>
      <ul className="pageList">
        <li>Nereaguje nebo se “mění” vědomí.</li>
        <li>Nedýchá normálně / výrazná dušnost / modrání.</li>
        <li>Bolest na hrudi, tlak, svírání, vyzařování.</li>
        <li>Známky CMP (FAST), náhlá slabost, porucha řeči.</li>
        <li>Anafylaxe: otok, kopřivka + dušnost/kolaps.</li>
        <li>Křeče, opakované křeče, první křeče v životě.</li>
        <li>Známky šoku (bledost, studený pot, zhoršování).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co děláš skoro vždy</h2>
      <ul className="pageList">
        <li>Bezpečí, zhodnocení vědomí a dýchání.</li>
        <li>ABCDE (aspoň rychle).</li>
        <li>Klid, teplo, dohled, připravenost na zhoršení (KPR).</li>
      </ul>
    </PageLayout>
  );
}
