import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgRameno from "../../../assets/anatomie/rameno.png";
import imgManzeta from "../../../assets/anatomie/manzeta_rameno.png";

export default function SvalyRamene() {
  const pool = useMemo(
    () => [
      { q: "sval deltový se latinsky řekne (1 slovo)", a: ["deltoideus"] },
      { q: "rotátorová manžeta slouží hlavně ke stabilizaci (1 slovo)", a: ["ramene", "ramenniho", "kloubu"] },
      { q: "sval, který zahajuje abdukci v rameni, je (1 slovo)", a: ["supraspinatus"] },
      { q: "zevní rotaci z manžety dělá hlavně (1 slovo)", a: ["infraspinatus"] },
      { q: "vnitřní rotaci z manžety dělá hlavně (1 slovo)", a: ["subscapularis"] },
      { q: "rotátorová manžeta udržuje hlavici humeru (1 slovo)", a: ["centrovanou", "centrovaná", "v jamce", "centrovanou v jamce"] },
      { q: "deltoid zvedá paži hlavně do (1 slovo)", a: ["abdukce"] },
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
      title="Svaly ramene"
      lead="Rameno je velmi pohyblivé, ale právě proto potřebuje dobrou stabilizaci. Klíčová je rotátorová manžeta, která centruje hlavici humeru v jamce a chrání kloub při pohybu."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgRameno} alt="Svaly ramene – přehled" className="img" />
            <img src={imgManzeta} alt="Rotátorová manžeta – svaly a směry pohybu" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Proč je rameno tak „citlivé“</h2>
          <div className="pageBlock">
            Ramenní kloub má velký rozsah pohybu, protože hlavice humeru je velká a jamka lopatky relativně mělká.
            To je výhoda pro pohyblivost, ale nevýhoda pro stabilitu. Stabilitu proto zajišťují hlavně svaly
            a šlachy – nejdůležitější skupinou je <strong>rotátorová manžeta</strong>.
          </div>

          <ul className="pageList">
            <li>Velký rozsah pohybu = větší nároky na stabilizaci.</li>
            <li>Klíčová stabilizace je svalová (ne „kostní“).</li>
            <li>Bez stabilizace se kloub snadno přetěžuje.</li>
          </ul>

          <div className="pageSummary">
            Častý princip bolesti ramene: problém není v síle, ale v tom, že hlavice „necestuje“ správně v jamce.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. deltoideus (sval deltový)</h2>
          <div className="pageBlock">
            <strong>m. deltoideus</strong> se podílí na hlavních pohybech v rameni. Je to silný „motor“ zvedání paže,
            ale sám o sobě by kloub přetěžoval, pokud by ho nehlídala rotátorová manžeta.
          </div>

          <ul className="pageList">
            <li>Hlavní pohyb: <strong>abdukce</strong> (zvedání paže do strany).</li>
            <li>Podílí se i na předpažení / zapažení podle části svalu.</li>
            <li>Bez manžety může deltoid vytahovat hlavici humeru nevhodným směrem.</li>
          </ul>

          <div className="pageSummary">
            Deltoid zvedá paži, rotátorová manžeta udržuje kloub „bezpečně centrovaný“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Rotátorová manžeta – co dělá jako celek</h2>
          <div className="pageBlock">
            <strong>Rotátorová manžeta</strong> je skupina svalů, jejichž šlachy obepínají ramenní kloub.
            Jejich nejdůležitější společná úloha je <strong>centrace hlavice humeru v jamce lopatky</strong>.
            Díky tomu je pohyb plynulý, hlavice nevjíždí „nahoru“ a kloub se nepřetěžuje.
          </div>

          <ul className="pageList">
            <li>Centruje hlavici humeru v jamce (stabilizace).</li>
            <li>Hlídá pohyb při zvedání paže (prevence přetížení).</li>
            <li>Umožňuje jemné rotace a kontrolu směru pohybu.</li>
          </ul>

          <div className="pageSummary">
            Když manžeta nestíhá, deltoid často vytahuje hlavici nahoru → dráždění struktur pod nadpažkem (impingement).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Rotátorová manžeta – jednotlivé svaly a pohyby</h2>
          <div className="pageBlock">
            Pro praxi je nejdůležitější vědět, který sval dělá jaký klíčový pohyb a jak pomáhá stabilizaci.
          </div>

          <ul className="pageList">
            <li><strong>m. supraspinatus</strong> – zahajuje <strong>abdukci</strong> (start zvednutí paže).</li>
            <li><strong>m. infraspinatus</strong> – <strong>zevní rotace</strong>.</li>
            <li><strong>m. teres minor</strong> – <strong>zevní rotace</strong> (pomocník infraspinatu).</li>
            <li><strong>m. subscapularis</strong> – <strong>vnitřní rotace</strong>.</li>
            <li><strong>m. teres major</strong> – <strong>vnitřní rotace</strong> (často uváděn spolu s manžetou podle skript).</li>
          </ul>

          <div className="pageSummary">
            Zapamatuj si princip: manžeta = stabilita + rotace. Deltoid = síla zvednutí paže.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Rameno je velmi pohyblivé a potřebuje svalovou stabilizaci.</li>
            <li>Deltoid je hlavní „motor“ abdukce.</li>
            <li>Rotátorová manžeta centruje hlavici humeru v jamce a chrání kloub.</li>
            <li>Supraspinatus zahajuje abdukci, infraspinatus + teres minor dělají zevní rotaci, subscapularis vnitřní rotaci.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly ramene</h2>
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
