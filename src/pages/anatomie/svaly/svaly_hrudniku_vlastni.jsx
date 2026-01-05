import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgBranice from "../../../assets/anatomie/branice.webp";
import imgMezizeberni from "../../../assets/anatomie/mezizeberni.jpg";

export default function SvalyHrudnikuVlastni() {
  const pool = useMemo(
    () => [
      { q: "bránice se latinsky řekne (1 slovo)", a: ["diaphragma"] },
      { q: "bránice je hlavní sval (1 slovo)", a: ["dýchací", "dychaci"] },
      { q: "při nádechu bránice (1 slovo)", a: ["klesá", "klesa"] },
      { q: "při nádechu bránice tlačí dolů na (2 slova)", a: ["panevni dno", "pánevní dno"] },
      { q: "otvor pro jícen v bránici se týká struktury (1 slovo)", a: ["jícen", "jicen"] },
      { q: "otvor pro dolní dutou žílu se týká struktury (2 slova)", a: ["duta zila", "dutá žíla", "dolni duta", "dolní dutá"] },
      { q: "otvor pro aortu se týká struktury (1 slovo)", a: ["aorta"] },
      { q: "mezižeberní svaly souvisí hlavně s (1 slovo)", a: ["dechem", "dýcháním", "dychanim"] },
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
      title="Svaly hrudníku – vlastní"
      lead="Vlastní svaly hrudníku souvisejí hlavně s dýcháním a stabilitou hrudního koše. Klíčovým svalem je bránice, která je zároveň významný posturální sval."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgBranice} alt="Bránice – poloha a vztahy" className="img" />
            <img src={imgMezizeberni} alt="Mezižeberní svaly – vztah k žebrům" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Vlastní svaly hrudníku</h2>
          <div className="pageBlock">
            Vlastní svaly hrudníku jsou svaly, které se nacházejí přímo na hrudním koši a podílejí se na
            pohybech žeber při dýchání. Zajišťují také <strong>stabilitu</strong> hrudní stěny.
          </div>

          <ul className="pageList">
            <li>Souvisí s dýcháním (pohyby žeber).</li>
            <li>Stabilizují hrudní koš při pohybu trupu a paží.</li>
            <li>Nejdůležitější: bránice.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Mezižeberní svaly</h2>
          <div className="pageBlock">
            Mezižeberní svaly vyplňují prostory mezi žebry a pomáhají koordinovat pohyb hrudníku při dechu.
            Základní smysl je jednoduchý: stabilizují žebra a podílejí se na jejich zvedání nebo sklápění.
          </div>

          <ul className="pageList">
            <li>Leží mezi žebry a stabilizují hrudník.</li>
            <li>Podílí se na nádechu i výdechu (podle konkrétní vrstvy a situace).</li>
            <li>Při omezení hrudníku se mohou přetěžovat a bolet.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: při „horním dýchání“ bývají mezižeberní svaly často ztuhlé a citlivé na palpaci.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Bránice (diaphragma) – hlavní dýchací sval</h2>
          <div className="pageBlock">
            <strong>Bránice</strong> (lat. <strong>diaphragma</strong>) je hlavní sval nádechu.
            Odděluje dutinu hrudní od dutiny břišní. Při nádechu se stahuje a <strong>klesá</strong>,
            čímž zvětšuje objem hrudníku a umožňuje nasátí vzduchu do plic.
          </div>

          <ul className="pageList">
            <li>Hlavní sval nádechu.</li>
            <li>Při nádechu se stahuje a klesá.</li>
            <li>Je úzce spojená s žebry (mechanika hrudníku).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Bránice jako posturální sval</h2>
          <div className="pageBlock">
            Bránice není jen „dýchací sval“. Je také důležitý <strong>posturální sval</strong>:
            podílí se na stabilizaci trupu a tlaku v dutině břišní. Při nádechu bránice klesá a
            <strong>tlačí směrem dolů na pánevní dno</strong>. Proto je dýchání propojené se stabilitou
            (core) a s funkcí pánevního dna.
          </div>

          <ul className="pageList">
            <li>Podílí se na stabilitě trupu (postura).</li>
            <li>Pomáhá vytvářet nitrobřišní tlak.</li>
            <li>Při nádechu tlačí do pánevního dna.</li>
          </ul>

          <div className="pageSummary">
            Jednoduše: bránice, břišní stěna a pánevní dno spolupracují jako „tlakový systém“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Otvor v bránici: aorta, jícen, dolní dutá žíla</h2>
          <div className="pageBlock">
            Bránice není „plná přepážka“ – procházejí jí důležité struktury. Pro praxi stačí vědět,
            že přes bránici musí projít velká céva, trávicí trubice a velká žíla.
          </div>

          <ul className="pageList">
            <li><strong>Aorta</strong> – prochází z hrudníku do břicha.</li>
            <li><strong>Jícen</strong> – prochází do žaludku.</li>
            <li><strong>Dolní dutá žíla</strong> – vrací krev z dolní poloviny těla k srdci.</li>
          </ul>

          <div className="pageSummary">
            Zapamatuj si trojici: aorta – jícen – dolní dutá žíla. To je hlavní „trio“ otvorů v bránici.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Vlastní svaly hrudníku souvisejí hlavně s dýcháním a stabilitou hrudníku.</li>
            <li>Mezižeberní svaly stabilizují žebra a podílejí se na dechu.</li>
            <li>Bránice (diaphragma) je hlavní sval nádechu.</li>
            <li>Bránice je také posturální sval: při nádechu klesá a tlačí do pánevního dna.</li>
            <li>Bránicí prochází aorta, jícen a dolní dutá žíla.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: vlastní svaly hrudníku</h2>
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
