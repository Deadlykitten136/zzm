import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function Intoxikace() {
  return (
    <PageLayout
      title="Intoxikace (otravy)"
      lead="Cíl první pomoci: zamezit dalšímu vstřebávání, identifikovat látku a volat 155. Některé skriptové formulace o vyvolávání zvracení jsou problematické – tady je bezpečnější verze."
      checklist={[
        "Zajistit bezpečí + ABCDE u bezvědomí",
        "Zamezit vstřebávání (vynést z plynů, větrat, odstranit zdroj)",
        "Identifikovat látku a množství + zajistit zvratky pro ZZS",
        "Aktivní uhlí a další kroky jen po konzultaci s dispečerem 155"
      ]}
      summary={
        <div className="pageSummary">
          <strong>155</strong>. Identifikuj látku + množství, zajisti obaly/zbytky. U plynů: vynést / větrat.
          <strong>Aktivní uhlí</strong> a další kroky jen po konzultaci s dispečerem.
          <br />
          <strong>NE:</strong> neprovokuj zvracení (zejména u kyselin/louhů/saponátů nikdy).
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Co intoxikuje nejčastěji</h2>
      <ul className="pageList">
        <li>Léky, alkohol, kombinace; dále houby, potraviny, chemikálie.</li>
        <li>Cesty: polknutím, vdechnutím, kůží, vpichem.</li>
        <li>Příznaky jsou různé podle látky → nejde dobře zobecnit.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>První pomoc – základ</h2>
      <ol className="pageList">
        <li>Pokud je bezvědomí / zhoršení: postup dle <strong>ABCDE</strong>.</li>
        <li>
          Plyny/chemikálie v prostoru: <strong>zamez vstřebávání</strong> – vynést z místnosti, nebo aspoň vyvětrat.
        </li>
        <li>
          <strong>Identifikuj látku a množství</strong> (obaly, tablety, zbytky) → předáš ZZS.
        </li>
        <li>
          Pokud jsou v okolí <strong>zvratky</strong>, zajisti je a předej zdravotníkům.
        </li>
        <li>
          <strong>Aktivní uhlí</strong> lze zvažovat, ale <strong>konzultuj s dispečerem 155</strong>.
        </li>
        <li>
          Antidota nejsou běžná součást první pomoci → jen po konzultaci s dispečerem.
        </li>
      </ol>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Důležitá poznámka k vyvolávání zvracení</h2>
      <div className="pageSummary">
        Ve skriptech se objevuje doporučení vyvolat zvracení u některých otrav – to sem <strong>nepřebírám</strong>.
        U <strong>kyselin, louhů a saponátů</strong> je ve skriptech správně uvedeno, že se zvracení <strong>nikdy nevyvolává</strong>
        (opakované poleptání). Obecně je bezpečnější držet se: <strong>155 + konzultace</strong>.
      </div>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Bodnutí / kousnutí jedovatým živočichem</h2>
      <ul className="pageList">
        <li>Místo <strong>dezinfikuj</strong>, sniž aktivitu (ať se jed nevstřebává rychle).</li>
        <li><strong>Nikdy jed nevysávej</strong> z rány.</li>
      </ul>
    </PageLayout>
  );
}
