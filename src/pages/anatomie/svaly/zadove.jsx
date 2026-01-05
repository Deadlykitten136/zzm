import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgBack from "../../../assets/anatomie/zada.jpg";
import imgErector from "../../../assets/anatomie/erector_spinae.webp";

export default function ZadoveSvaly() {
  const pool = useMemo(
    () => [
      { q: "hlavní vzpřimovač páteře se nazývá (2 slova)", a: ["erector spinae"] },
      { q: "jednostranná aktivita zádových svalů způsobuje (1 slovo)", a: ["rotaci", "uklon", "úklon"] },
      { q: "oboustranná aktivita zádových svalů vede ke (1 slovo)", a: ["extenzi", "vzpřímení"] },
      { q: "hluboké krátké svaly hřbetní leží mezi jednotlivými (1 slovo)", a: ["obratli"] },
      { q: "hluboké svaly šíjové se podílejí hlavně na poloze (1 slovo)", a: ["hlavy"] },
      { q: "zádové svaly patří mezi svaly povrchové nebo hluboké (1 slovo)", a: ["hluboké"] },
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
    const ok = accepted.includes(ans);

    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(() => next(), 600);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Zádové svaly (hluboké)"
      lead="Hluboké zádové svaly zajišťují stabilitu páteře, jemnou regulaci pohybu a vzpřímené držení těla. Bez nich by nebyl možný přesný ani dlouhodobý pohyb."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek – přehled zad</h2>
          <div className="pageBlock">
            <img src={imgBack} alt="Hluboké zádové svaly – přehled" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Hluboké zádové svaly</h2>
          <div className="pageBlock">
            Hluboké zádové svaly leží těsně u páteře a spojují jednotlivé obratle mezi sebou.
            Nejsou primárně určeny k vytváření velké síly, ale k <strong>stabilizaci</strong>,
            <strong>jemnému řízení pohybu</strong> a udržení osy těla.
          </div>

          <ul className="pageList">
            <li>Krátké svaly hřbetní – mezi jednotlivými obratli.</li>
            <li>Hluboké svaly šíjové – mezi C1, C2 a týlní kostí.</li>
            <li>Zajišťují přesné nastavení polohy páteře a hlavy.</li>
          </ul>

          <div className="pageSummary">
            Tyto svaly pracují často reflexně a dlouhodobě – jejich porucha se projeví spíš bolestí a nestabilitou než slabostí.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Vzpřimovač páteře – m. erector spinae</h2>
          <div className="pageBlock">
            <strong>m. erector spinae</strong> je hlavní svalový komplex probíhající po obou stranách páteře
            od pánve až ke krku. Je klíčový pro vzpřímené držení těla a kontrolu pohybů trupu.
          </div>

          <ul className="pageList">
            <li>Probíhá podél celé páteře.</li>
            <li>Patří mezi hluboké stabilizační svaly.</li>
            <li>Spolupracuje s krátkými svaly hřbetními.</li>
          </ul>

          <div className="pageBlock">
            <img src={imgErector} alt="Erector spinae – průběh podél páteře" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Funkce zádových svalů</h2>
          <div className="pageBlock">
            Funkce zádových svalů se liší podle toho, zda pracují jednostranně nebo oboustranně.
          </div>

          <ul className="pageList">
            <li>
              <strong>Jednostranná aktivita</strong> – úklon trupu a rotace.
            </li>
            <li>
              <strong>Oboustranná aktivita</strong> – záklon (extenze), vzpřímení trupu.
            </li>
            <li>
              <strong>Statická práce</strong> – udržení postoje a stability páteře.
            </li>
          </ul>

          <div className="pageSummary">
            V praxi: bolest zad často souvisí s přetížením statické práce těchto svalů, ne s jejich „slabostí“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Hluboké zádové svaly stabilizují páteř.</li>
            <li>Krátké svaly spojují jednotlivé obratle.</li>
            <li>m. erector spinae je hlavní vzpřimovač páteře.</li>
            <li>Jednostranně: rotace a úklon, oboustranně: extenze.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: zádové svaly</h2>
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
