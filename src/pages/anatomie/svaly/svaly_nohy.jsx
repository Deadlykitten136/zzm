import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/svaly_chodidlo.webp";

export default function SvalyNohy() {
  const pool = useMemo(
    () => [
      { q: "svaly nohy dělíme na hřbetní a (1 slovo)", a: ["plosné", "plosni", "plantární", "plantarni"] },
      { q: "vazivová „blána“ na plosce se nazývá (2 slova)", a: ["plantární aponeuróza", "plantarni aponeuroza"] },
      { q: "mezikostní svaly nohy se latinsky řeknou (1 slovo)", a: ["interossei"] },
      { q: "červovité svaly nohy se latinsky řeknou (1 slovo)", a: ["lumbricales"] },
      { q: "kratší extenzory na hřbetu nohy pomáhají s (1 slovo)", a: ["prsty", "palcem"] },
      { q: "stabilita klenby je kombinace vazů a (1 slovo)", a: ["svalů", "svalu"] },
      { q: "podélná klenba je udržována i svalem (2 slova)", a: ["tibialis posterior"] },
      { q: "plantární svaly jsou důležité pro (1 slovo)", a: ["stoj", "chůzi", "chuzi"] },
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
    if (pos + 1 >= deck.length) reshuffle();
    else setPos((p) => p + 1);
  };

  const check = () => {
    const ok = (current.a || []).map(normalize).includes(normalize(input));
    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(next, 650);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly nohy"
      lead="Vlastní svaly nohy stabilizují klenbu, řídí jemné pohyby prstů a pomáhají při stoji i odrazu. Funkčně je důležité rozlišení svalů na hřbetu a na plosce."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly chodidla – přehled (hřbet a ploska)" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Co znamená „vlastní svaly nohy“</h2>
          <div className="pageBlock">
            Vlastní (intrinsické) svaly nohy jsou svaly, které začínají i končí v oblasti nohy.
            Nejsou to dlouhé šlachy z bérce. Jejich úloha je hlavně <strong>stabilizace</strong> a
            <strong>jemné řízení prstů</strong> při stoji a chůzi.
          </div>

          <ul className="pageList">
            <li>Stabilizace nohy při došlapu.</li>
            <li>Podpora klenby.</li>
            <li>Jemné nastavení prstů při odrazu.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: když „nedrží“ noha, tělo kompenzuje výš – koleno, kyčel, bedra.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Rozdělení svalů nohy</h2>
          <div className="pageBlock">
            Funkčně si je rozděl na dvě hlavní skupiny: <strong>hřbetní</strong> a <strong>plosné (plantární)</strong>.
            Plosné svaly jsou početnější a mají zásadní význam pro klenbu a odraz.
          </div>

          <ul className="pageList">
            <li><strong>Hřbetní svaly</strong> – krátké extenzory prstů a palce.</li>
            <li><strong>Plosné (plantární) svaly</strong> – podpora klenby + jemné řízení prstů.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Hřbet nohy</h2>
          <div className="pageBlock">
            Na hřbetu nohy jsou hlavně krátké svaly, které pomáhají s extenzí prstů a palce.
            Jsou důležité pro jemné nastavení při došlapu a při „uvolnění“ prstů v průběhu kroku.
          </div>

          <ul className="pageList">
            <li>Krátké extenzory prstů.</li>
            <li>Krátký extenzor palce.</li>
            <li>Pomocná stabilizace při došlapu.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Ploska nohy: svalové skupiny</h2>
          <div className="pageBlock">
            Plosné svaly jsou uspořádané do skupin podobně jako u ruky: svaly palce, svaly malíku a střední skupina.
            Nejdůležitější pro pochopení je, že tyto svaly pomáhají držet <strong>klenbu</strong> a zajišťují stabilní odraz.
          </div>

          <ul className="pageList">
            <li><strong>Svaly palce</strong> – stabilita palce a odraz.</li>
            <li><strong>Svaly malíku</strong> – stabilita zevní hrany nohy.</li>
            <li><strong>Střední skupina</strong> – lumbricales, interossei a další svaly pro prsty.</li>
          </ul>

          <div className="pageSummary">
            Palec je pro odraz zásadní: když nefunguje stabilně, tělo často „utíká“ do zevní hrany nohy.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Klenba nožní: proč ji drží i svaly</h2>
          <div className="pageBlock">
            Klenba nohy není jen „kost a vazy“. Je to dynamická konstrukce:
            část drží tvar pasivně (kosti, vazy), ale část musí držet aktivně <strong>svaly</strong>.
            To je důvod, proč se klenba může měnit podle únavy, přetížení nebo techniky chůze.
          </div>

          <ul className="pageList">
            <li>Klenbu drží kombinace: kosti + vazy + svaly.</li>
            <li>Dynamická stabilita je klíčová pro chůzi a odraz.</li>
            <li>Důležitý sval pro podélnou klenbu: <strong>tibialis posterior</strong> (z bérce).</li>
          </ul>

          <div className="pageSummary">
            Prakticky: klenba se často „propadá“, když svaly přestanou držet – a to se může stát i bez strukturální vady.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Plantární aponeuróza</h2>
          <div className="pageBlock">
            <strong>Plantární aponeuróza</strong> je pevná vazivová struktura na plosce nohy.
            Funguje jako výztuha – pomáhá držet tvar klenby a přenášet síly při chůzi.
          </div>

          <ul className="pageList">
            <li>Pevná vazivová „výztuha“ plosky.</li>
            <li>Podpora klenby a přenos sil při odrazu.</li>
            <li>V praxi může být bolestivá při přetížení (např. plantární fascie).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Svaly nohy dělíme na hřbetní a plosné (plantární).</li>
            <li>Vlastní svaly nohy stabilizují klenbu a řídí jemné pohyby prstů.</li>
            <li>Klenbu drží kosti, vazy i svaly – je to dynamická struktura.</li>
            <li>Plantární aponeuróza je vazivová výztuha plosky.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly nohy</h2>
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
