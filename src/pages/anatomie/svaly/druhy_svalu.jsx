import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgTypes from "../../../assets/anatomie/druhy_svalu_dle_funkce.jpg";

export default function DruhySvalu() {
  const pool = useMemo(
    () => [
      { q: "kolik základních typů svaloviny rozlišujeme (číslo)", a: ["3", "tri", "tři"] },
      { q: "který typ svaloviny ovládá vůle (1 slovo)", a: ["kosterni", "kosterní", "pricnepruhovana", "příčněpruhovaná"] },
      { q: "který typ svaloviny je v orgánech (1 slovo)", a: ["hladka", "hladká"] },
      { q: "který typ svaloviny tvoří myokard (1 slovo)", a: ["srdecni", "srdeční"] },
      { q: "hladká svalovina je řízena (1 slovo)", a: ["autonomne", "autonomně", "nevedome", "nevědomě"] },
      { q: "příčně pruhovaná svalovina má řízení (1 slovo)", a: ["somaticke", "somatické", "vedome", "vědomé"] },
      { q: "která svalovina je typicky nejvíce odolná únavě (1 slovo)", a: ["hladka", "hladká"] },
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
      title="Druhy svaloviny"
      lead="V těle rozlišujeme tři základní typy svaloviny: hladkou, srdeční a příčně pruhovanou (kosterní). Liší se řízením, funkcí i stavbou."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgTypes} alt="Druhy svaloviny – přehled" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Hladká svalovina</h2>
          <div className="pageBlock">
            Hladká svalovina se nachází především ve stěnách vnitřních orgánů a cév. Pracuje většinou pomalu,
            dlouhodobě a je řízena autonomně (nevědomě). Je klíčová pro posun obsahu trávicí trubice,
            regulaci průsvitu cév a další životně důležité děje.
          </div>

          <ul className="pageList">
            <li>Výskyt: orgány, cévy, duté systémy.</li>
            <li>Řízení: autonomní (nevědomé).</li>
            <li>Kontrakce: pomalejší, dlouhodobá, často rytmická.</li>
            <li>Odolnost: typicky vysoká (neunaví se tak snadno).</li>
          </ul>

          <div className="pageSummary">
            Prakticky: hladká svalovina „jede sama“ – udržuje funkce orgánů i bez vědomé kontroly.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Srdeční svalovina</h2>
          <div className="pageBlock">
            Srdeční svalovina tvoří myokard (svalovinu srdce). Je specializovaná pro pravidelnou, rytmickou
            a celoživotní činnost. I když má některé znaky příčně pruhované svaloviny, její řízení je autonomní
            a je přizpůsobené nepřetržité práci.
          </div>

          <ul className="pageList">
            <li>Výskyt: pouze srdce (myokard).</li>
            <li>Řízení: autonomní (nevědomé), rytmická aktivita.</li>
            <li>Funkce: pumpování krve.</li>
            <li>Specifikum: musí fungovat bez přestávky.</li>
          </ul>

          <div className="pageSummary">
            Srdeční svalovina = „příčně pruhovaná, ale neovládaná vůlí“. Funguje automaticky a rytmicky.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Příčně pruhovaná (kosterní) svalovina</h2>
          <div className="pageBlock">
            Příčně pruhovaná svalovina tvoří většinu svalů pohybového aparátu. Je ovládána vůlí (somatickým
            nervovým systémem) a umožňuje rychlé, přesné pohyby i udržení polohy těla.
          </div>

          <ul className="pageList">
            <li>Výskyt: kosterní svaly, mimické svaly, svaly končetin a trupu.</li>
            <li>Řízení: somatické (vědomé).</li>
            <li>Kontrakce: rychlá, přesná, ale může se unavit.</li>
            <li>Funkce: pohyb, stabilizace, držení těla.</li>
          </ul>

          <div className="pageSummary">
            Kosterní svaly umí rychle zabrat, ale na rozdíl od hladké svaloviny se snadněji unaví.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Rychlé porovnání (co si odnést)</h2>
          <ul className="pageList">
            <li><strong>Hladká</strong>: orgány, autonomní řízení, pomalejší, odolná.</li>
            <li><strong>Srdeční</strong>: srdce, autonomní řízení, rytmická, celoživotní práce.</li>
            <li><strong>Kosterní</strong>: pohybový aparát, řízení vůlí, rychlá a přesná.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Rozlišujeme 3 typy svaloviny: hladkou, srdeční a příčně pruhovanou.</li>
            <li>Hladká a srdeční jsou řízeny autonomně, kosterní vůlí.</li>
            <li>Hladká je typicky pomalejší a odolná, kosterní rychlá a přesná.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: druhy svaloviny</h2>
          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď (1 slovo nebo číslo)"
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
