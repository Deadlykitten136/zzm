import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgTrapez from "../../../assets/anatomie/trapez.jpg";

export default function ZadoveSvalyPovrchove() {
  const pool = useMemo(
    () => [
      { q: "sval trapézový se latinsky řekne (2 slova)", a: ["m. trapezius", "trapezius"] },
      { q: "široký sval zádový se latinsky řekne (2 slova)", a: ["m. latissimus dorsi", "latissimus dorsi"] },
      { q: "svaly rhombické táhnou lopatku k (1 slovo)", a: ["páteři", "pateri", "páteř"] },
      { q: "zdvihač lopatky se latinsky řekne (2 slova)", a: ["m. levator scapulae", "levator scapulae"] },
      { q: "horní pilovitý zadní sval pomáhá při (1 slovo)", a: ["nádechu", "nadechu"] },
      { q: "dolní pilovitý zadní sval pomáhá při (1 slovo)", a: ["výdechu", "vydechu"] },
      { q: "široký sval zádový provádí v rameni hlavně (1 slovo)", a: ["přitazeni", "přitažení", "addukci", "addukce"] },
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
      title="Svaly zad – povrchové a mezivrstvy"
      lead="Povrchové a mezivrstvy zádových svalů propojují páteř s lopatkou a horní končetinou. Ovlivňují držení ramen, stabilitu lopatky i pomocné dýchání."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={imgTrapez} alt="Svaly zad – povrchová vrstva (trapézový sval)" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Základní myšlenka: lopatka je klíč</h2>
          <div className="pageBlock">
            U svalů zad je praktické myslet hlavně na <strong>lopatku</strong>. Mnoho z těchto svalů lopatku buď
            přitahuje k páteři, zvedá ji, stahuje dolů nebo ji stabilizuje při pohybu paže. Pokud lopatka „nedrží“,
            rameno nefunguje efektivně.
          </div>

          <ul className="pageList">
            <li>Část svalů stabilizuje lopatku a „ramenní pletenec“.</li>
            <li>Část svalů přímo pohybuje paží (přes lopatku a humerus).</li>
            <li>Některé svaly se podílejí na dýchání (pomocné dýchací svaly).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Sval trapézový – m. trapezius</h2>
          <div className="pageBlock">
            <strong>m. trapezius</strong> stabilizuje lopatku a podílí se na pohybech ramenního pletence.
            Jednotlivé části svalu mají mírně odlišné účinky – proto se často popisuje „horní“ a „dolní“ část.
          </div>

          <ul className="pageList">
            <li>Fixuje lopatku na místě (stabilizace).</li>
            <li>Pomáhá zvedat paži (nepřímo přes lopatku).</li>
            <li>Horní část zvedá rameno, dolní část táhne lopatku dolů.</li>
            <li>Přitahuje lopatky k sobě (ramena dozadu).</li>
            <li>Může pomáhat i pohybům hlavy (např. záklon při fixaci).</li>
          </ul>

          <div className="pageSummary">
            Prakticky: přetížený trapéz často „sedí“ na krku a rameni jako kámen (typicky horní část).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Široký sval zádový – m. latissimus dorsi</h2>
          <div className="pageBlock">
            <strong>m. latissimus dorsi</strong> patří mezi největší svaly zad. Ovlivňuje pohyb v rameni a při fixovaných
            horních končetinách umí pomoci přitahovat trup (např. šplh, přítahy).
          </div>

          <ul className="pageList">
            <li>V rameni: zapažení, přitažení (addukce) a vnitřní rotace paže.</li>
            <li>Při visu: přitahuje trup k horní končetině.</li>
            <li>Může fungovat jako pomocný dýchací sval.</li>
          </ul>

          <div className="pageSummary">
            Pokud je latissimus zkrácený/přetížený, může „tahat ramena dopředu“ a omezovat rozsah paže nad hlavou.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Svaly rhombické – mm. rhomboidei</h2>
          <div className="pageBlock">
            <strong>mm. rhomboidei</strong> (malý a velký) táhnou lopatku směrem k páteři a vzhůru. Jsou důležité pro
            „ramena dozadu“ a stabilitu lopatky při práci rukou.
          </div>

          <ul className="pageList">
            <li>Přitahují lopatku k páteři (retrakce).</li>
            <li>Pomáhají ji zvedat.</li>
            <li>Stabilizují lopatku při pohybech paže.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Zdvihač lopatky – m. levator scapulae</h2>
          <div className="pageBlock">
            <strong>m. levator scapulae</strong> zvedá lopatku a podílí se i na pohybech krční páteře, pokud je lopatka fixovaná.
            Často bývá přetížený při stresu a „zvednutých ramenou“.
          </div>

          <ul className="pageList">
            <li>Zvedá lopatku.</li>
            <li>Při fixované lopatce může přispívat k úklonu krční páteře.</li>
            <li>Stabilizuje oblast mezi krkem a lopatkou.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Pilovité zadní svaly – mm. serrati posteriores</h2>
          <div className="pageBlock">
            Tyto svaly souvisejí s hrudníkem a dechem. Jsou „mezivrstvou“ mezi hlubšími a povrchovými svaly zad.
          </div>

          <ul className="pageList">
            <li>
              <strong>m. serratus posterior superior</strong> – zvedá žebra, pomáhá při nádechu.
            </li>
            <li>
              <strong>m. serratus posterior inferior</strong> – sklání žebra, pomáhá při výdechu.
            </li>
          </ul>

          <div className="pageSummary">
            Pro praxi: při ztuhlém hrudníku se často přetěžují pomocné dýchací svaly (včetně těchto).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Klíčová je lopatka – stabilita lopatky = lepší funkce ramene.</li>
            <li>m. trapezius stabilizuje lopatku a řídí polohu ramen.</li>
            <li>m. latissimus dorsi: addukce, vnitřní rotace a extenze v rameni.</li>
            <li>mm. rhomboidei přitahují lopatku k páteři.</li>
            <li>m. levator scapulae zvedá lopatku, často se přetěžuje.</li>
            <li>Pilovité zadní svaly pomáhají při dechu (nádech/výdech).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly zad</h2>
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
