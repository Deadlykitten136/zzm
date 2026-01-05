import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgBuild from "../../../assets/anatomie/stavba_kosterniho_svalu.png";

export default function OrganizaceSvalu() {
  const pool = useMemo(
    () => [
      { q: "základní stavební jednotka kosterního svalu (2 slova)", a: ["svalovevlakno", "svalovévlákno", "svalove vlakno", "svalové vlákno"] },
      { q: "svalové vlákno je vlastně jedna (1 slovo)", a: ["bunka", "buňka"] },
      { q: "obal svalu a svalových skupin (1 slovo)", a: ["fascie"] },
      { q: "svazek vláken ve svalu (1 slovo)", a: ["snopec", "snopec"] },
      { q: "kde běží cévy a nervy ke svalu (1 slovo)", a: ["vazivem", "vazivo", "vazivu", "vazivových"] },
      { q: "kosterní sval je tvořen mnoha svalovými (1 slovo)", a: ["vlakny", "vlákny"] },
      { q: "svalové vlákno obsahuje typicky více (1 slovo)", a: ["jader", "jádra"] },
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
      title="Organizace kosterního svalu"
      lead="Kosterní sval je „svazkovaná“ struktura: z jednotlivých svalových vláken vznikají snopce a celý sval. Vazivové obaly zajišťují tvar, ochranu i přenos síly."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgBuild} alt="Stavba kosterního svalu – vlákno, snopec, sval" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Základ: svalové vlákno</h2>
          <div className="pageBlock">
            Základní „pracovní“ jednotkou kosterního svalu je <strong>svalové vlákno</strong>.
            Důležité je pochopit, že svalové vlákno je ve skutečnosti <strong>jedna buňka</strong>,
            která je velmi dlouhá a obsahuje typicky <strong>více jader</strong>.
          </div>

          <ul className="pageList">
            <li>Svalové vlákno = jedna dlouhá svalová buňka.</li>
            <li>Obsahuje více jader.</li>
            <li>Velké množství vláken spolu vytváří celý sval.</li>
          </ul>

          <div className="pageSummary">
            Pro pochopení: sval není „jedna věc“, ale obrovské množství vláken uspořádaných do svazků.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Vlákna → snopce → sval</h2>
          <div className="pageBlock">
            Svalová vlákna jsou uspořádána do svazků (snopců). Více snopců pak tvoří celý sval.
            Toto uspořádání zvyšuje mechanickou odolnost a umožňuje rozdělit sílu do více směrů podle tvaru svalu.
          </div>

          <ul className="pageList">
            <li><strong>Svalové vlákno</strong> – jednotlivá svalová buňka.</li>
            <li><strong>Snopec</strong> – svazek svalových vláken.</li>
            <li><strong>Sval</strong> – tvořen mnoha snopci.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Vazivo a fascie (obaly)</h2>
          <div className="pageBlock">
            Sval je „obalen“ vazivem, které drží tvar, chrání struktury uvnitř svalu a zároveň
            pomáhá přenášet sílu ke šlaše. Součástí tohoto systému jsou také <strong>fascie</strong>
            (povázky), které obalují svaly a svalové skupiny.
          </div>

          <ul className="pageList">
            <li>Vazivo drží sval pohromadě a chrání ho.</li>
            <li>Vazivové obaly se podílejí na přenosu síly.</li>
            <li><strong>Fascie</strong> = obal svalu / svalových skupin, mechanická ochrana i klouzání.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: fascie je často „tichý viník“ bolesti a ztuhlosti – sval může být v pořádku, ale fascie neklouže.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Cévy a nervy</h2>
          <div className="pageBlock">
            Ke svalu musí přicházet krev (kyslík, živiny) a nervové řízení. Cévy i nervy běží typicky
            <strong>vazivovými obaly</strong> mezi snopci a do svalu vstupují v určitém místě.
          </div>

          <ul className="pageList">
            <li>Sval je bohatě prokrvený – energie je pro kontrakci klíčová.</li>
            <li>Nerv přivádí signál ke stažení a zároveň nese informace zpět (cit, napětí).</li>
            <li>Vazivo tvoří „cesty“, kudy vedou cévy a nervy.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Svalové vlákno je jedna dlouhá buňka s více jádry.</li>
            <li>Vlákna se sdružují do snopců, snopce tvoří sval.</li>
            <li>Vazivové obaly a fascie chrání sval a pomáhají přenášet sílu.</li>
            <li>Cévy a nervy běží do svalu typicky vazivem mezi snopci.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: organizace svalu</h2>
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
