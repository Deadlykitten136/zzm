import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgZdvihac from "../../../assets/anatomie/zdvihac.png";
import imgPlatysma from "../../../assets/anatomie/platysma.jpg";

export default function SvalyKrku() {
  const pool = useMemo(
    () => [
      { q: "nejznámější sval krku probíhající od sterna a klíční kosti k lebce je (1 slovo)", a: ["sternocleidomastoideus"] },
      { q: "m. sternocleidomastoideus při jednostranné aktivitě hlavu otáčí na (1 slovo)", a: ["opačnou", "opacnou"] },
      { q: "m. sternocleidomastoideus při oboustranné aktivitě přispívá k (1 slovo)", a: ["predklonu", "předklonu"] },
      { q: "platysma je sval povrchový nebo hluboký (1 slovo)", a: ["povrchovy", "povrchový"] },
      { q: "platysma patří mezi svaly (1 slovo)", a: ["mimicke", "mimické"] },
      { q: "mm. scaleni mohou pomáhat při (1 slovo)", a: ["nádechu", "nadechu"] },
      { q: "svaly nadjazylkové a podjazylkové souvisí hlavně s (1 slovo)", a: ["polykáním", "polykani"] },
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
      title="Svaly krku"
      lead="Svaly krku stabilizují hlavu, umožňují její pohyby a podílejí se i na dýchání a polykání. Prakticky jsou důležité i jako místo častého přetížení a napětí."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgZdvihac} alt="Krční svaly – zdvihač lopatky a vztahy v oblasti krku" className="img" />
            <img src={imgPlatysma} alt="Platysma – povrchový sval krku" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Funkce svalů krku</h2>
          <div className="pageBlock">
            Krční svaly mají dvě hlavní „role“: <strong>stabilizace</strong> (držet hlavu nad trupem) a <strong>pohyb</strong>.
            Zároveň některé svaly pomáhají při nádechu a jiné souvisí s polykáním a pohybem hrtanu.
          </div>

          <ul className="pageList">
            <li>Pohyby hlavy: předklon, záklon, úklon, rotace.</li>
            <li>Stabilizace krční páteře a šíje.</li>
            <li>Pomocné dýchací svaly (např. scaleni).</li>
            <li>Svaly kolem jazylky souvisí s polykáním a řečí.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">m. sternocleidomastoideus (SCM)</h2>
          <div className="pageBlock">
            <strong>m. sternocleidomastoideus</strong> je výrazný sval na předoboční straně krku. Je praktický orientační bod
            a zároveň častý zdroj napětí. Název napovídá jeho úpony: sternum, clavicula a processus mastoideus.
          </div>

          <ul className="pageList">
            <li><strong>Jednostranně</strong>: rotace hlavy na opačnou stranu + úklon.</li>
            <li><strong>Oboustranně</strong>: předklon krční páteře (při fixaci hlavy může pomáhat i zdvihu hrudníku).</li>
            <li>Stabilizace hlavy při práci rukou a při držení těla.</li>
          </ul>

          <div className="pageSummary">
            Jednoduchá pomůcka: SCM jednostranně „otočí obličej pryč“ (na opačnou stranu).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">mm. scaleni</h2>
          <div className="pageBlock">
            <strong>mm. scaleni</strong> leží hlouběji na boční straně krku. Podílejí se na stabilizaci krční páteře,
            úklonech a mohou fungovat jako <strong>pomocné nádechové svaly</strong> (při fixaci krku).
          </div>

          <ul className="pageList">
            <li>Stabilizace krku a jemné řízení polohy.</li>
            <li>Jednostranně: úklon.</li>
            <li>Pomoc při nádechu (při zvýšené dechové práci).</li>
          </ul>

          <div className="pageSummary">
            Při stresovém „horním dýchání“ se scaleni často přetěžují – krk je pak tvrdý a citlivý.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Platysma</h2>
          <div className="pageBlock">
            <strong>Platysma</strong> je <strong>povrchový</strong> sval krku, který patří mezi mimické svaly.
            Napíná kůži krku a podílí se na výrazu obličeje (např. při napětí, strachu, odporu).
          </div>

          <ul className="pageList">
            <li>Povrchový sval krku, upíná se do kůže.</li>
            <li>Patří mezi mimické svaly.</li>
            <li>Funkčně napíná kůži krku a ovlivňuje výraz.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Svaly nadjazylkové a podjazylkové</h2>
          <div className="pageBlock">
            Tato skupina svalů souvisí s polykáním, pohybem jazylky a hrtanu a stabilizací oblasti krku.
            V rámci základní orientace je důležité vědět, že pracují hlavně při <strong>polykání</strong> a
            při jemném nastavení hrtanu (hlas).
          </div>

          <ul className="pageList">
            <li>Hlavní oblast: jazylka, hrtan, kořen jazyka.</li>
            <li>Funkce: polykání, řeč, stabilizace.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Svaly krku stabilizují hlavu a umožňují její pohyb.</li>
            <li>SCM: jednostranně rotuje hlavu na opačnou stranu, oboustranně přispívá k předklonu.</li>
            <li>Scaleni mohou pomáhat při nádechu (pomocné dýchací svaly).</li>
            <li>Platysma je povrchový mimický sval krku.</li>
            <li>Svaly kolem jazylky souvisí s polykáním.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly krku</h2>
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
