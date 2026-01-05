import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/stehno_svaly.png";

export default function SvalyStehna() {
  const pool = useMemo(
    () => [
      { q: "čtyřhlavý sval stehenní se latinsky řekne (2 slova)", a: ["quadriceps femoris"] },
      { q: "hlavní funkce quadriceps femoris v koleni je (1 slovo)", a: ["extenze"] },
      { q: "v úponové šlaše quadricepsu je kost (1 slovo)", a: ["čéška", "ceska", "patella"] },
      { q: "šlacha pod čéškou se nazývá (2 slova)", a: ["lig. patellae", "lig patellae", "patelární vaz", "patelarni vaz"] },
      { q: "drsnatina na tibii pro úpon patelárního vazu je (2 slova)", a: ["tuberositas tibiae"] },
      { q: "sval krejčovský se latinsky řekne (1 slovo)", a: ["sartorius"] },
      { q: "adduktory stehna patří do skupiny (1 slovo)", a: ["mediální", "medialni"] },
      { q: "štíhlý sval stehenní se latinsky řekne (1 slovo)", a: ["gracilis"] },
      { q: "hamstringy jsou hlavně na straně (1 slovo)", a: ["zadní", "zadni"] },
      { q: "dvojhlavý sval stehenní se latinsky řekne (2 slova)", a: ["biceps femoris"] },
      { q: "semitendinosus se česky řekne sval (1 slovo)", a: ["pološlašitý", "poloslasity"] },
      { q: "semimembranosus se česky řekne sval (1 slovo)", a: ["poloblanitý", "poloblanity"] },
      { q: "pes anserinus česky znamená (2 slova)", a: ["husí noha", "husi noha"] },
      { q: "hamstringy dělají flexi kolene a pomáhají (1 slovo) v kyčli", a: ["extenzi"] },
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
    setTimeout(next, 650);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    check();
  };

  return (
    <PageLayout
      title="Svaly stehna"
      lead="Stehno má tři hlavní funkční skupiny: přední extenzory kolene (quadriceps), mediální adduktory a zadní flexory kolene (hamstringy). Důležitý je vztah kyčel–koleno a dvoukloubové svaly."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly stehna – přehled skupin" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Funkční rozdělení stehna</h2>
          <div className="pageBlock">
            Stehno je „motor“ pro chůzi, vstávání a stabilitu kolene i pánve. Aby ses v tom neutopila,
            ber ho jako tři logické bloky: vpředu natahuju koleno, uvnitř přitahuju nohu k ose,
            vzadu ohýbám koleno a pomáhám extenzi v kyčli.
          </div>

          <ul className="pageList">
            <li><strong>Ventrální (přední) skupina</strong> – extenzory kolene.</li>
            <li><strong>Mediální skupina</strong> – adduktory stehna.</li>
            <li><strong>Dorzální (zadní) skupina</strong> – flexory kolene + pomocná extenze v kyčli.</li>
          </ul>

          <div className="pageSummary">
            Dvoukloubové svaly (přes kyčel i koleno) jsou nejčastější zdroj přetížení: když „nestíhá“ jeden kloub,
            sval to odskáče.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Ventrální skupina: m. quadriceps femoris</h2>
          <div className="pageBlock">
            <strong>m. quadriceps femoris</strong> je nejmohutnější sval stehna a hlavní extenzor kolenního kloubu.
            Jeho šlacha obsahuje <strong>čéšku (patella)</strong>, což zlepšuje mechanickou výhodu při natažení kolene.
          </div>

          <ul className="pageList">
            <li><strong>Funkce:</strong> extenze v koleni; částečně pomocná flexe v kyčli (přímá hlava).</li>
            <li><strong>Úpon:</strong> přes čéšku a <strong>lig. patellae</strong> na <strong>tuberositas tibiae</strong>.</li>
            <li>V praxi: klíčový pro vstávání, chůzi do schodů, stabilitu kolene.</li>
          </ul>

          <div className="pageSummary">
            Pro pochopení: bez quadricepsu se koleno „propadá“ – je to hlavní aktivní stabilizátor při zatížení.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. sartorius (sval krejčovský) a pes anserinus</h2>
          <div className="pageBlock">
            <strong>m. sartorius</strong> je dlouhý povrchový sval, který se účastní pohybů v kyčli i koleni.
            Důležitý je hlavně jeho úpon v oblasti <strong>pes anserinus</strong> („husí noha“),
            kde se setkává s dalšími šlachami na vnitřní straně kolene.
          </div>

          <ul className="pageList">
            <li><strong>Funkce:</strong> flexe v kyčli i koleni, zevní rotace dolní končetiny.</li>
            <li><strong>Pes anserinus</strong> = společný úpon více svalů na mediální straně bérce.</li>
            <li>Prakticky: časté přetížení vnitřní strany kolene u „přetáčivých“ vzorců chůze.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Mediální skupina: adduktory stehna</h2>
          <div className="pageBlock">
            Mediální skupina přitahuje stehno k ose těla (<strong>addukce</strong>) a pomáhá stabilizovat pánev i kyčel.
            Při chůzi stabilizuje končetinu ve fázi došlapu, při sportu hlídá „rozjetí“ nohy do stran.
          </div>

          <ul className="pageList">
            <li><strong>m. pectineus</strong> – hřebenový sval.</li>
            <li><strong>m. gracilis</strong> – štíhlý sval (často součást pes anserinus).</li>
            <li><strong>mm. adductores</strong> – brevis, longus, magnus (krátký, dlouhý, velký přitahovač).</li>
            <li><strong>m. obturatorius externus</strong> – zevní obturátor (často se řadí k mediální skupině).</li>
          </ul>

          <div className="pageSummary">
            Adduktory nejsou „jen na přitahování“ – jsou důležité pro stabilitu kyčle a kontrolu pohybu ve frontální rovině.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Dorzální skupina: hamstringy</h2>
          <div className="pageBlock">
            Hamstringy jsou hlavní flexory kolene a současně pomáhají extenzi v kyčli (protože některé přecházejí přes oba klouby).
            Jsou typicky přetěžované při rychlých změnách tempa, běhu a při slabších hýžďových svalech.
          </div>

          <ul className="pageList">
            <li><strong>m. biceps femoris</strong> – dvojhlavý sval stehenní.</li>
            <li><strong>m. semitendinosus</strong> – sval pološlašitý.</li>
            <li><strong>m. semimembranosus</strong> – sval poloblanitý.</li>
            <li><strong>Funkce:</strong> flexe kolene + pomocná extenze v kyčli (u dvoukloubových částí).</li>
          </ul>

          <div className="pageSummary">
            Když jsou hamstringy chronicky zkrácené, často to není „jejich vina“ – často jen kompenzují slabý gluteus maximus.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Přední skupina: <strong>quadriceps</strong> = extenze kolene (přes čéšku).</li>
            <li>Mediální skupina: <strong>adduktory</strong> = přitažení stehna k ose + stabilita.</li>
            <li>Zadní skupina: <strong>hamstringy</strong> = flexe kolene + pomocná extenze v kyčli.</li>
            <li>Pes anserinus („husí noha“) je důležitý úpon na vnitřní straně kolene.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly stehna</h2>
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
