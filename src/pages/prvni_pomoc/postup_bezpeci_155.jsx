import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function PostupBezpeci155() {
  return (
    <PageLayout
      title="Bezpečí a volání 155"
      lead="Nejdřív bezpečí zachránce, potom pomoc. Když si nejsi jistá, volej 155 hned."
      checklist={[
        "Zajistit bezpečí: pro sebe, okolí, postiženého",
        "Umět rychle rozhodnout: volat 155 hned vs. po základním zhodnocení",
        "Vědět, co říct operátorovi (stručně a použitelně)"
      ]}
      summary={
        <ul className="pageList">
          <li>Bezpečí má absolutní prioritu.</li>
          <li>Nečekej na „dokonalou“ diagnózu — volej, když si nejsi jistá.</li>
          <li>Operátor 155 je součást první pomoci (navede tě).</li>
        </ul>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">1) Bezpečí</h2>
      <ul className="pageList">
        <li>Rozhlédni se: doprava, elektřina, plyn, oheň, agresor, padající předměty.</li>
        <li>Pokud je místo nebezpečné, prioritou je <strong>odstranit riziko</strong> nebo <strong>nezasahovat</strong> a volat pomoc.</li>
        <li>Ochranné pomůcky, pokud jsou (rukavice ap.).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>2) Kdy volat 155</h2>
      <ul className="pageList">
        <li>Když je ohrožený život / rychle se horší stav / jsi sama a nejde to zvládnout.</li>
        <li>Když je bezvědomí, dušnost, bolest na hrudi, známky CMP, masivní krvácení.</li>
        <li>Když máš pochybnost — <strong>radši dřív než pozdě</strong>.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>3) Co říct na tísňovou linku</h2>
      <ul className="pageList">
        <li><strong>Kde</strong> jsi (adresa, orientační body).</li>
        <li><strong>Co</strong> se stalo (nehoda / náhlý kolaps / dušení…).</li>
        <li><strong>Kolik</strong> postižených.</li>
        <li><strong>Jaký</strong> je stav (vědomí, dýchání, krvácení).</li>
        <li><strong>Tvůj kontakt</strong> + řiď se instrukcemi operátora.</li>
      </ul>
    </PageLayout>
  );
}
