import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function DusnostAspirace() {
  return (
    <PageLayout
      title="Dušnost: aspirace cizího tělesa (dušení)"
      lead="Rozliš: účinný kašel vs. neúčinný. Při neúčinném kašli jede algoritmus 5 + 5 a opakuješ cyklus."
      checklist={[
        "Umět rozlišit účinný vs. neúčinný kašel",
        "Znát postup: 5 úderů mezi lopatky → 5 stlačení nadbřišku → opakovat",
        "Vědět: bezvědomí / zhoršení → KPR"
      ]}
      summary={
        <div className="pageSummary">
          <strong>Účinný kašel:</strong> povzbuzuj ke kašli.{" "}
          <strong>Neúčinný kašel:</strong> 5 úderů mezi lopatky → 5 stlačení nadbřišku → opakovat.{" "}
          <strong>Upadá do bezvědomí:</strong> KPR.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">1) Účinný kašel</h2>
      <ul className="pageList">
        <li>Postižený dýchá, kašle, mluví → <strong>povzbuzuj ke kašli</strong>, sleduj.</li>
        <li>Buď připraven, že se stav může zhoršit.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>2) Neúčinný kašel (těžké dušení)</h2>
      <ol className="pageList">
        <li>
          <strong>5 rázných úderů mezi lopatky</strong>: předkloň postiženého a patkou dlaně dej 5 razantních úderů.
        </li>
        <li>
          Pokud bez efektu: <strong>5 stlačení nadbřišku</strong>: postav se zezadu, obejmi, pěst mezi pupek a dolní okraj hrudního koše,
          druhou rukou uchop a stlačuj <strong>k sobě a nahoru</strong> (5×).
        </li>
        <li>
          Pokud stále bez efektu: <strong>opakuj cyklus</strong> (5 úderů + 5 stlačení), dokud se neuvolní dýchací cesty.
        </li>
        <li>
          Pokud postižený po opakování <strong>upadá do bezvědomí</strong> → <strong>KPR</strong>.
        </li>
      </ol>

      <div className="muted small" style={{ marginTop: 10 }}>
        Tip pro zkoušku: klíčová slova jsou <strong>5 + 5</strong>, “opakovat cyklus” a “bezvědomí = KPR”.
      </div>
    </PageLayout>
  );
}
