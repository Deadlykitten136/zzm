import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/hrudnik.jpg";

export default function Hrudnik() {
  const pool = useMemo(
    () => [
      { q: "kolik je pravých žeber", a: ["7", "sedm"] },
      { q: "pravá žebra mají čísla", a: ["1-7"] },
      { q: "kolik je nepravých žeber", a: ["3", "tri", "tři"] },
      { q: "nepravá žebra mají čísla", a: ["8-10"] },
      { q: "kolik je volných žeber", a: ["2", "dve", "dvě"] },
      { q: "volná žebra mají čísla", a: ["11-12"] },
      { q: "jak se latinsky řeknou žebra", a: ["costae"] },
      { q: "kolik cunů je od konce sterna k pupíku", a: ["8", "osm"] },
      { q: "které žebro je volné a snadno hmatné podle lokte", a: ["11", "jedenacte", "jedenácté"] },
      { q: "kost hrudní se jmenuje", a: ["sternum"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const [deck, setDeck] = useState(() => {
    const indices = pool.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const current = pool[deck[pos]];

  const reshuffle = () => {
    const indices = pool.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    setDeck(indices);
    setPos(0);
  };

  const next = () => {
    setFeedback(null);
    setInput("");
    if (pos + 1 >= deck.length) {
      reshuffle();
    } else {
      setPos((p) => p + 1);
    }
  };

  const check = () => {
    const ans = normalize(input);
    const accepted = (current?.a || []).map(normalize);
    const isOk = accepted.includes(ans);

    if (isOk) {
      setFeedback("Správně ✅");
    } else {
      setFeedback(`Ne ❌ Správně: ${current.a[0]}`);
    }

    setTimeout(() => next(), 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Hrudník"
      lead="Kostěný hrudník tvoří hrudní kost, žebra a hrudní páteř. Chrání orgány hrudníku a zároveň umožňuje dýchací pohyby."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Kostěný hrudník: co sem patří</h2>
          <div className="pageBlock">
            Hrudník je prostorově pružný „koš“, který chrání srdce, plíce a velké cévy. Současně se
            při dýchání rozšiřuje a zmenšuje díky pohybu žeber a pružnosti chrupavek.
          </div>

          <ul className="pageList">
            <li>Vpředu: hrudní kost (sternum).</li>
            <li>Po stranách: žebra (costae) a jejich chrupavky.</li>
            <li>Vzadu: hrudní obratle (hrudní páteř).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Hrudní kost</h2>
          <div className="pageBlock">
            Hrudní kost (sternum) je plochá kost ve střední čáře vpředu. Je místem úponu žeberních
            chrupavek a důležitým orientačním bodem v klinice.
          </div>

          <ul className="pageList">
            <li>
              <strong>Rukojeť (manubrium)</strong> – horní část sterna.
            </li>
            <li>
              <strong>Incisura jugularis</strong> – zářez na horním okraji rukojeti v místě „jamky“
              mezi klíčními kostmi (dobře hmatný orientační bod).
            </li>
            <li>
              <strong>Tělo (corpus sterni)</strong> – největší střední část sterna.
            </li>
            <li>
              <strong>Výběžek mečovitý (processus xiphoideus, mečík)</strong> – dolní část sterna,
              variabilního tvaru; v praxi důležitý orientační bod pro „konec sterna“.
            </li>
          </ul>

          <div className="pageSummary">
            Prakticky: incisura jugularis je spolehlivý hmatný bod nahoře, mečík je důležitý bod
            dole (např. pro orientaci v epigastriu).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Žebra a jejich dělení</h2>
          <div className="pageBlock">
            Žebra (costae) jsou párové kosti hrudníku. Zepředu se napojují na hrudní kost prostřednictvím
            žeberních chrupavek, které dávají hrudníku pružnost.
          </div>

          <ul className="pageList">
            <li>
              <strong>Pravá žebra</strong> (1–7, celkem 7) – jejich chrupavky se připojují{" "}
              <strong>přímo</strong> na sternum.
            </li>
            <li>
              <strong>Nepravá žebra</strong> (8–10, celkem 3) – jejich chrupavky se nepřipojují přímo na
              sternum, ale{" "}
              <strong>napojují se na chrupavku žebra výše</strong> a spoluvytvářejí žeberní oblouk.
            </li>
            <li>
              <strong>Volná žebra</strong> (11–12, celkem 2) –{" "}
              <strong>vpředu se na nic nepřipojují</strong>, končí volně v břišní stěně.
            </li>
          </ul>

          <div className="pageSummary">
            Pro pochopení: chrupavka = pružná „spojka“ mezi kostí a sternem/obloukem. Díky ní se
            hrudník při dýchání může rozšiřovat.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Poznámky z čínské medicíny</h2>
          <div className="pageBlock">
            Některé orientační body se v praxi TČM používají k rychlé lokalizaci oblastí na trupu.
            Číslování cunů je proporční (relativní k tělu konkrétního člověka).
          </div>

          <ul className="pageList">
            <li>
              Od <strong>konce sterna</strong> (oblast mečíku) k <strong>pupíku</strong> je{" "}
              <strong>8 cunů</strong>.
            </li>
            <li>
              <strong>11. žebro</strong> je volné a často se dá snadno nahmatat jako orientační bod.
            </li>
            <li>
              Praktické hledání 11. žebra: když si klient dá <strong>ruku do flexe vedle těla</strong>,
              orientačně odpovídá oblast 11. žebra místu, kde je <strong>loket</strong>.
            </li>
          </ul>

          <div className="pageSummary">
            Upozornění: „loket = 11. žebro“ je orientační pomůcka pro rychlé navedení, vždy ověřujte palpací.
          </div>
        </div>

        <div className="card">
          <img src={img} alt="Hrudník – sternum a žebra" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Hrudník tvoří sternum, žebra (costae) a hrudní páteř.</li>
            <li>Sternum: manubrium, incisura jugularis, corpus sterni, mečík (processus xiphoideus).</li>
            <li>Pravá žebra: 1–7 (přímo na sternum), nepravá: 8–10 (přes chrupavku žebra výše), volná: 11–12.</li>
            <li>V TČM: od konce sterna k pupíku je 8 cunů; 11. žebro je volné a dobře orientační.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: hrudník</h2>
          <div className="pageBlock">
            Já napíšu otázku, vy napíšete odpověď jedním slovem (nebo číslem).
          </div>

          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď (1 slovo)"
              autoComplete="off"
            />
            <button type="submit">Odeslat</button>
          </form>

          {feedback && <div className="pageSummary">{feedback}</div>}
        </div>

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Jaké tři hlavní části tvoří kostěný hrudník?</li>
            <li>Jaké části má sternum a k čemu slouží incisura jugularis jako orientační bod?</li>
            <li>Kolik je pravých žeber a jak se připojují vpředu?</li>
            <li>Kolik je nepravých žeber a jak se připojují vpředu?</li>
            <li>Kolik je volných žeber a čím jsou typická?</li>
            <li>Kolik cunů je od konce sterna k pupíku podle TČM?</li>
            <li>Jaké žebro je volné a jaké je praktické pravidlo pro jeho orientační nalezení?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
