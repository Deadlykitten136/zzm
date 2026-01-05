import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgActinMyosin from "../../../assets/anatomie/aktion_myosin.jpg";
import imgMechanika from "../../../assets/anatomie/mechanika.jpg";

export default function VlastnostiAKontrakce() {
  const pool = useMemo(
    () => [
      { q: "schopnost svalu se stáhnout (1 slovo)", a: ["kontraktilita"] },
      { q: "schopnost svalu reagovat na podnět (1 slovo)", a: ["drazdivost", "dráždivost"] },
      { q: "schopnost svalu se vrátit do původní délky (1 slovo)", a: ["elasticita"] },
      { q: "schopnost svalu se protáhnout (1 slovo)", a: ["protazitelnost", "protažitelnost"] },
      { q: "klidové napětí svalu (1 slovo)", a: ["tonus"] },
      { q: "základní bílkoviny posuvného modelu (2 slova bez čárek)", a: ["aktinmyosin", "actinmyosin"] },
      { q: "jaký typ pohybu mezi aktinem a myosinem probíhá (1 slovo)", a: ["zasouvani", "zasouvání", "posun"] },
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
      title="Vlastnosti svalů a kontrakce"
      lead="Sval není jen „motor“. Má typické vlastnosti a při kontrakci zkracuje svou délku díky posuvu aktinu a myosinu."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Vlastnosti svalové tkáně</h2>
          <div className="pageBlock">
            Svalová tkáň má několik klíčových vlastností, které společně umožňují pohyb, stabilitu a adaptaci
            na zatížení. Tyto pojmy se pak používají i v klinice (např. poruchy tonu, únava, křeče).
          </div>

          <ul className="pageList">
            <li>
              <strong>Kontraktilita</strong> – schopnost svalu se stáhnout (zkrátit).
            </li>
            <li>
              <strong>Dráždivost</strong> – schopnost reagovat na podnět (nervový, mechanický, chemický).
            </li>
            <li>
              <strong>Elasticita</strong> – schopnost vrátit se do původního tvaru/délky.
            </li>
            <li>
              <strong>Protažitelnost</strong> – schopnost se prodloužit bez poškození (v určitém rozsahu).
            </li>
            <li>
              <strong>Tonus</strong> – klidové napětí svalu (sval není „nulový“, i v klidu drží základní napětí).
            </li>
          </ul>

          <div className="pageSummary">
            Tonus je praktický pojem: nízký tonus = „měkkost a slabá stabilita“, vysoký tonus = „tuhost a přetížení“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgMechanika} alt="Mechanika kontrakce a změna délky svalu" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Co je kontrakce</h2>
          <div className="pageBlock">
            Kontrakce je aktivní děj, při kterém sval vytváří napětí a často se zkracuje. Ne vždy ale musí být
            viditelné zkrácení – někdy sval napětí jen drží (např. ve stoji).
          </div>

          <ul className="pageList">
            <li>
              Kontrakce = vytvoření napětí, často i zkrácení svalu.
            </li>
            <li>
              Sval může pracovat i bez pohybu v kloubu (udržení polohy).
            </li>
            <li>
              Relaxace = uvolnění napětí a návrat k původní délce (pokud tomu nebrání zátěž).
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Posuvný model: aktin a myosin</h2>
          <div className="pageBlock">
            Základní princip kontrakce v příčně pruhované svalovině lze zjednodušit jako „zasouvání“:
            bílkovinná vlákna aktinu a myosinu se vůči sobě posouvají, čímž se zkrátí funkční jednotka
            a výsledkem je zkrácení svalu.
          </div>

          <ul className="pageList">
            <li>
              Klíčové bílkoviny: <strong>aktin</strong> a <strong>myosin</strong>.
            </li>
            <li>
              Děj probíhá jako <strong>posuv</strong> (zasouvání) vláken vůči sobě.
            </li>
            <li>
              Výsledkem je zkrácení svalového segmentu a vytvoření síly.
            </li>
          </ul>

          <div className="pageSummary">
            Nemusíš znát molekulární detaily. Důležité je chápat princip: „vlákna se nekrátí sama, ale kloužou po sobě“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgActinMyosin} alt="Aktin a myosin – princip posuvu" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Kontraktilita, dráždivost, elasticita, protažitelnost a tonus jsou základní vlastnosti svalů.</li>
            <li>Kontrakce = vytvoření napětí (často i zkrácení svalu).</li>
            <li>Posuvný model: aktin a myosin se vůči sobě posouvají („zasouvají“).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: vlastnosti a kontrakce</h2>
          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
              className="answerInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napište odpověď (1–2 slova)"
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
