import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/predlokti.jpg";

export default function SvalyPredlokti() {
  const pool = useMemo(
    () => [
      { q: "ohýbače zápěstí a prstů jsou hlavně na straně (1 slovo)", a: ["dlanove", "dlaňové", "přední", "predni"] },
      { q: "natahovače zápěstí a prstů jsou hlavně na straně (1 slovo)", a: ["hřbetní", "hrbetni", "zadní", "zadni"] },
      { q: "pronace znamená otočení dlaně (1 slovo)", a: ["dolů", "dolu"] },
      { q: "supinace znamená otočení dlaně (1 slovo)", a: ["nahoru"] },
      { q: "tenisový loket souvisí spíš s přetížením (1 slovo)", a: ["extenzorů", "extenzoru"] },
      { q: "golfový loket souvisí spíš s přetížením (1 slovo)", a: ["flexorů", "flexoru"] },
      { q: "společný úpon flexorů předloktí je u epikondylu (1 slovo)", a: ["mediálního", "medialniho"] },
      { q: "společný úpon extenzorů předloktí je u epikondylu (1 slovo)", a: ["laterálního", "lateralniho"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ");

  const [deck, setDeck] = useState(() => {
    const idx = pool.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  });

  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const current = pool[deck[pos]];

  const reshuffle = () => {
    const idx = pool.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    setDeck(idx);
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
    const ok = (current.a || []).map(normalize).includes(normalize(input));
    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(next, 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly předloktí"
      lead="Svaly předloktí ovládají zápěstí, prsty a rotace předloktí (pronaci a supinaci). Prakticky je nejdůležitější orientace: flexory bývají vpředu/dlanově, extenzory vzadu/hřbetně."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly předloktí – orientační přehled" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Funkční orientace (bez zbytečného memorování)</h2>
          <div className="pageBlock">
            Předloktí je praktické chápat funkčně: část svalů ohýbá (flexe), část natahuje (extenze) a část rotuje
            předloktí (pronace/supinace). Jednotlivých svalů je hodně, ale pro studium i praxi stačí nejdřív pochopit
            základní rozdělení podle <strong>strany</strong> a <strong>funkce</strong>.
          </div>

          <ul className="pageList">
            <li><strong>Přední (dlaňová) strana</strong> – převážně flexory zápěstí a prstů + pronátory.</li>
            <li><strong>Zadní (hřbetní) strana</strong> – převážně extenzory zápěstí a prstů.</li>
            <li><strong>Boční strana</strong> – svaly spojené s palcem a stabilizací.</li>
          </ul>

          <div className="pageSummary">
            Praktická pomůcka: flexory „zavírají dlaň“, extenzory „otevírají“ ruku a prsty.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Pronace a supinace</h2>
          <div className="pageBlock">
            Rotace předloktí je klíčová pro funkci ruky. Probíhá díky tomu, že se <strong>radius otáčí kolem ulny</strong>.
            (Ano – radius se točí kolem ulny, protože muž se točí kolem ženy.)
          </div>

          <ul className="pageList">
            <li><strong>Pronace</strong> – otočení dlaně dolů.</li>
            <li><strong>Supinace</strong> – otočení dlaně nahoru.</li>
            <li>Mechanicky: radius rotuje kolem ulny.</li>
          </ul>

          <div className="pageSummary">
            Pro praxi: mnoho přetížení (loket, zápěstí) vzniká při opakované rotaci + práci prstů (např. myš, manuální práce).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Epikondyly a přetížení (tenisový a golfový loket)</h2>
          <div className="pageBlock">
            Mnoho svalů předloktí má společné úpony na pažní kosti v oblasti <strong>epikondylů</strong>.
            Proto se přetížení často projeví bolestí právě v oblasti lokte.
          </div>

          <ul className="pageList">
            <li>
              <strong>Laterální epikondyl</strong> – typicky úpon extenzorů → přetížení = „tenisový loket“.
            </li>
            <li>
              <strong>Mediální epikondyl</strong> – typicky úpon flexorů → přetížení = „golfový loket“.
            </li>
            <li>Epikondyl = kostní hrbolek pro úpony svalů/šlach.</li>
          </ul>

          <div className="pageSummary">
            Zjednodušeně: extenzory bolí laterálně, flexory bolí mediálně.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Co svaly předloktí ovládají</h2>
          <div className="pageBlock">
            Předloktí je „motor“ ruky. Svaly předloktí ovládají zápěstí a prsty přes šlachy, které přecházejí do ruky.
            Proto bolest předloktí často souvisí s přetížením ruky a naopak.
          </div>

          <ul className="pageList">
            <li>Pohyby v zápěstí (flexe, extenze, vychýlení do stran).</li>
            <li>Pohyby prstů a palce (flexe/extenze a jemná motorika).</li>
            <li>Rotace předloktí (pronace/supinace).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Flexory jsou převážně na přední/dlaňové straně, extenzory na zadní/hřbetní.</li>
            <li>Pronace = dlaň dolů, supinace = dlaň nahoru.</li>
            <li>Radius se otáčí kolem ulny.</li>
            <li>Tenisový loket: laterální epikondyl (extenzory), golfový loket: mediální epikondyl (flexory).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly předloktí</h2>
          <div className="pageBlock">
            <strong>Otázka:</strong> {current.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď"
              autoComplete="off"
            />
            <button type="submit">Odeslat</button>
          </form>

          {feedback && <div className="pageSummary">{feedback}</div>}
        </div>

      </div>
    </PageLayout>
  );
}
