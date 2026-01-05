import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function DruhyVlaken() {
  const pool = useMemo(
    () => [
      { q: "který typ vláken je nejrychlejší, ale nejrychleji se unaví (2 písmena)", a: ["fg"] },
      { q: "který typ vláken je pomalý a vysoce odolný únavě (2 písmena)", a: ["so"] },
      { q: "který typ vláken je přechodný mezi fg a so (3 písmena)", a: ["fog"] },
      { q: "červená vlákna jsou typicky spíš (1 slovo)", a: ["odolna", "odolná"] },
      { q: "bílá vlákna jsou typicky spíš (1 slovo)", a: ["rychla", "rychlá"] },
      { q: "typ vláken vhodný pro vytrvalostní práci (2 písmena)", a: ["so"] },
      { q: "typ vláken vhodný pro krátký výbušný výkon (2 písmena)", a: ["fg"] },
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
      title="Typy svalových vláken"
      lead="Kosterní svaly nejsou všechny stejné: liší se zastoupením vláken, která jsou rychlá nebo vytrvalá. V praxi se to projeví jako rychlost stahu a únava."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Proč typy vláken řešit</h2>
          <div className="pageBlock">
            Různé typy svalových vláken se liší tím, jak rychle se umí stáhnout a jak dlouho vydrží pracovat bez únavy.
            Jeden sval mívá směs typů vláken, ale určité svaly a činnosti typicky „tíhnou“ k určitému profilu.
          </div>

          <ul className="pageList">
            <li>Rychlost stahu a únava nejsou náhoda – souvisí s typem vláken.</li>
            <li>V praxi: výbušná síla × vytrvalost.</li>
            <li>Typy vláken se označují zkratkami FG, SO a FOG.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Základní typy vláken (FG, SO, FOG)</h2>
          <div className="pageBlock">
            Ve skriptech se obvykle uvádí tři základní skupiny. Ber je jako praktické zjednodušení: typické vlastnosti,
            které se v reálu mohou prolínat.
          </div>

          <ul className="pageList">
            <li>
              <strong>FG (fast glycolytic)</strong> – rychlá „bílá“ vlákna, rychle zabírají, rychle se unaví.
            </li>
            <li>
              <strong>SO (slow oxidative)</strong> – pomalá „červená“ vlákna, odolná únavě, vhodná pro vytrvalost.
            </li>
            <li>
              <strong>FOG (fast oxidative glycolytic)</strong> – přechodná, relativně rychlá, únavu snáší lépe než FG.
            </li>
          </ul>

          <div className="pageSummary">
            Zjednodušeně: FG = rychlost, SO = výdrž, FOG = kompromis.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Srovnávací tabulka</h2>
          <div className="pageBlock">
            Tahle tabulka je vytvořená jako učební pomůcka: stačí pochopit směr (rychlost ↔ výdrž).
          </div>

          <ul className="pageList">
            <li><strong>FG</strong>: nejrychlejší, nejvyšší únava.</li>
            <li><strong>FOG</strong>: rychlé, únava střední.</li>
            <li><strong>SO</strong>: pomalé, nejvyšší odolnost.</li>
          </ul>

          <div className="pageSummary">
            <strong>FG vs SO</strong> je nejdůležitější kontrast. FOG si drž jako „mezistupeň“.
          </div>

          <div className="pageBlock">
            <table>
              <thead>
                <tr>
                  <th>Typ vláken</th>
                  <th>Rychlost stahu</th>
                  <th>Odolnost únavě</th>
                  <th>Typická „barva“</th>
                  <th>Typické využití</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>FG</strong></td>
                  <td>vysoká</td>
                  <td>nízká</td>
                  <td>bílá</td>
                  <td>krátký výbušný výkon</td>
                </tr>
                <tr>
                  <td><strong>FOG</strong></td>
                  <td>střední až vyšší</td>
                  <td>střední</td>
                  <td>spíše červenější</td>
                  <td>opakované zatížení, „rychle a déle“</td>
                </tr>
                <tr>
                  <td><strong>SO</strong></td>
                  <td>nižší</td>
                  <td>vysoká</td>
                  <td>červená</td>
                  <td>vytrvalost, stabilita, dlouhá práce</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Rozlišujeme FG, SO a FOG.</li>
            <li>FG: rychlá, ale rychle se unaví.</li>
            <li>SO: pomalá, vysoce odolná únavě.</li>
            <li>FOG: přechodný typ (kompromis).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: typy vláken</h2>
          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď (FG / SO / FOG)"
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
