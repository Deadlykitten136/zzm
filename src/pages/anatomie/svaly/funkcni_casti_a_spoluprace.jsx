import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgAgonist from "../../../assets/anatomie/agonista.jpg";

export default function FunkcniCastiASpoluprace() {
  const pool = useMemo(
    () => [
      { q: "nejmohutnější část svalu se nazývá (1 slovo)", a: ["brisko", "bříško"] },
      { q: "úpon svalu je typicky část více nebo méně pohyblivá (1 slovo)", a: ["pohybliva", "pohyblivá", "více", "vice"] },
      { q: "začátek svalu je typicky část více nebo méně pohyblivá (1 slovo)", a: ["mene", "méně"] },
      { q: "sval vykonávající hlavní pohyb se nazývá (1 slovo)", a: ["agonista"] },
      { q: "sval s opačným účinkem se nazývá (1 slovo)", a: ["antagonista"] },
      { q: "sval pomáhající agonistovi se nazývá (1 slovo)", a: ["synergista"] },
      { q: "sval uzavírající otvor (např. kolem úst) je typicky (1 slovo)", a: ["kruhovy", "kruhový", "sverac", "svěrač"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");

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
      title="Funkční části svalu a spolupráce svalů"
      lead="Sval popisujeme podle částí (začátek, bříško, úpon) a podle role v pohybu (agonista, antagonista, synergista). Tyto pojmy ti výrazně ulehčí orientaci u konkrétních svalů."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgAgonist} alt="Agonista a antagonista – spolupráce svalů při pohybu" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Funkční části svalu</h2>
          <div className="pageBlock">
            Kosterní sval popisujeme podle částí, které se liší tvarem i funkcí. V praxi je užitečné chápat,
            že „začátek“ bývá stabilnější a „úpon“ se často více pohybuje – ale není to absolutní pravidlo,
            vždy záleží na konkrétním pohybu.
          </div>

          <ul className="pageList">
            <li>
              <strong>Začátek</strong> – typicky méně pohyblivá část, často blíže trupu.
            </li>
            <li>
              <strong>Bříško</strong> – nejmohutnější část svalu, kde je nejvíce svalové tkáně.
            </li>
            <li>
              <strong>Úpon</strong> – typicky více pohyblivá část, často dále od trupu.
            </li>
          </ul>

          <div className="pageSummary">
            Prakticky: při palpaci často cítíš bříško jako „maso“, zatímco začátek/úpon bývají víc „pevné“ díky vazivu a šlachám.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Role svalů v pohybu</h2>
          <div className="pageBlock">
            Většina pohybů nevzniká prací jednoho svalu. Svaly spolupracují ve skupinách: jeden pohyb vede,
            další pomáhají, jiné ho brzdí a stabilizují.
          </div>

          <ul className="pageList">
            <li>
              <strong>Agonista</strong> – hlavní sval vykonávající pohyb.
            </li>
            <li>
              <strong>Antagonista</strong> – sval s opačným účinkem, pohyb brzdí nebo provádí opačný směr.
            </li>
            <li>
              <strong>Synergista</strong> – sval pomáhá agonistovi (zvyšuje sílu nebo zlepšuje průběh pohybu).
            </li>
          </ul>

          <div className="pageSummary">
            Antagonista není „nepřítel“ – často je potřeba pro přesnost pohybu a stabilitu (brzdí pohyb, aby nebyl „utržený“).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Tvary svalů (orientačně)</h2>
          <div className="pageBlock">
            Tvary kosterních svalů často napovídají jejich funkci. Základní tvary je dobré znát, protože se objevují v popisech.
          </div>

          <ul className="pageList">
            <li><strong>Vřetenovitý</strong> – silné bříško, úpony na obou koncích.</li>
            <li><strong>Plochý</strong> – široká svalová plocha, často s aponeurózou.</li>
            <li><strong>Kruhový / svěrač</strong> – obemyká otvor a uzavírá ho (např. kolem úst).</li>
          </ul>

          <div className="pageSummary">
            U svěračů je typická funkce „zavřít/otevřít“. U plochých svalů bývá důležitá stabilita a rozložení tahu.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Sval má začátek, bříško a úpon.</li>
            <li>Začátek bývá stabilnější, úpon často pohyblivější (záleží na pohybu).</li>
            <li>Agonista = hlavní sval, antagonista = opačný účinek, synergista = pomocník.</li>
            <li>Svaly často pracují ve skupinách, ne „po jednom“.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: funkční části a role svalů</h2>
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
      </div>
    </PageLayout>
  );
}
