import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function PohybyVKloubech() {

    const pool = useMemo(
    () => [
      { q: "ohýbání", a: ["flexe", "flexio"] },
      { q: "natažení", a: ["extenze", "extensio"] },

      { q: "odtažení od střední roviny", a: ["abdukce", "abductio"] },
      { q: "přitažení ke střední rovině", a: ["addukce", "adductio"] },

      { q: "úklon do strany", a: ["lateroflexe"] },

      { q: "otáčení kolem podélné osy dovnitř", a: ["vnitřní", "vnitrni"] },
      { q: "otáčení kolem podélné osy zevně", a: ["zevní", "zevni"] },

      { q: "otočení dlaně dozadu/dolů", a: ["pronace"] },
      { q: "otočení dlaně dopředu/nahoru", a: ["supinace"] },

      { q: "ohnutí v zápěstí směrem do dlaně", a: ["palmární", "palmarni"] },
      { q: "přitažení nártu k bérci", a: ["dorzální", "dorzalni"] },
      { q: "prošlápnutí špičky dolů", a: ["plantární", "plantarni"] },

      { q: "kombinace flexe + extenze + abdukce + addukce", a: ["cirkumdukce"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

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

  const currentIndex = deck[pos];
  const current = pool[currentIndex];

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
      setFeedback({ ok: true, text: "Správně ✅" });
    } else {
      setFeedback({ ok: false, text: `Ne ❌ Správně: ${current.a[0]}` });
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
      title="Pohyby v kloubech"
      lead="Pohyby v kloubech popisujeme podle os a rovin těla a podle směru pohybu. Správná terminologie je základ pro anatomii i klinický popis nálezu."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní princip</h2>
          <div className="pageBlock">
            Pohyb v kloubu je změna vzájemné polohy kostí. V anatomii se popisuje ustálenými pojmy,
            které jsou stejné bez ohledu na polohu těla v prostoru (vždy se vztahují k základní
            anatomické poloze).
          </div>

          <ul className="pageList">
            <li>Pohyby se typicky odehrávají v určité rovině kolem určité osy.</li>
            <li>Rozsah pohybu se hodnotí jako úhel (např. flexe 0–130° v koleni).</li>
            <li>U některých kloubů se kombinuje více pohybů (např. cirkumdukce v rameni).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Flexe a extenze</h2>
          <div className="pageBlock">
            Flexe a extenze jsou nejčastější pohyby. Obecně platí, že flexe „ohýbá“ a extenze
            „natahuje“, ale přesný význam je vždy vztažen k anatomické poloze a ke konkrétnímu
            segmentu.
          </div>

          <ul className="pageList">
            <li>
              <strong>Flexe (flexio)</strong> – ohnutí, typicky zmenšení úhlu mezi částmi končetiny
              (např. v lokti).
            </li>
            <li>
              <strong>Extenze (extensio)</strong> – natažení, typicky zvětšení úhlu (návrat z flexe).
            </li>
            <li>
              <strong>Dorzální flexe (dorsiflexe)</strong> nohy – přitažení nártu směrem k bérci.
            </li>
            <li>
              <strong>Plantární flexe (plantární flexe)</strong> nohy – „prošlápnutí“ špičky dolů
              (od bérce).
            </li>
            <li>
              <strong>Palmární flexe</strong> ruky – ohnutí v zápěstí směrem do dlaně.
            </li>
          </ul>

          <div className="pageSummary">
            Pozor na slovíčka: u nohy se používá dorzální/plantární flexe, u ruky se běžně setkáte s
            palmární flexí (směrem do dlaně).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Abdukce a addukce</h2>
          <div className="pageBlock">
            Abdukce a addukce popisují pohyby směrem od střední roviny těla nebo k ní. U prstů se
            vztahují ke střednímu (referenčnímu) prstu/radě prstů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Abdukce (abductio)</strong> – odtažení od střední roviny;{" "}
              <strong>zvětšuje úhel</strong> mezi končetinou a osou těla.
            </li>
            <li>
              <strong>Addukce (adductio)</strong> – přitažení ke střední rovině; může jít i{" "}
              <strong>přes střední rovinu</strong> (např. překřížení).
            </li>
            <li>
              <strong>Prsty ruky</strong> – abdukce/addukce se vztahuje ke 3. prstu (prostředníku).
            </li>
            <li>
              <strong>Prsty nohy</strong> – abdukce/addukce se vztahuje ke 2. prstu.
            </li>
          </ul>

          <div className="pageSummary">
            Prakticky: „ab-“ = pryč od středu, „ad-“ = k centru (a klidně i přes něj).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Rotace</h2>
          <div className="pageBlock">
            Rotace je otáčení kolem podélné osy segmentu. V rameni a kyčli rozlišujeme rotaci vnitřní
            a zevní; na předloktí se používají pojmy pronace a supinace.
          </div>

          <ul className="pageList">
            <li>
              <strong>Vnitřní rotace</strong> – otočení přední plochy segmentu dovnitř.
            </li>
            <li>
              <strong>Zevní rotace</strong> – otočení přední plochy segmentu zevně.
            </li>
            <li>
              <strong>Pronace</strong> předloktí – otočení dlaně dozadu/dolů (v anatomické poloze
              z přední polohy do zadní).
            </li>
            <li>
              <strong>Supinace</strong> předloktí – otočení dlaně dopředu/nahoru (návrat do
              anatomické polohy).
            </li>
            <li>
              Při pronaci/supinaci se <strong>radius otáčí kolem ulny</strong>.
            </li>
            <li>Radius se točí kolem ulny, protože muž se točí kolem ženy.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cirkumdukce</h2>
          <div className="pageBlock">
            Cirkumdukce je kombinovaný pohyb, při kterém distální část končetiny opisuje kužel.
            Vzniká kombinací flexe, extenze, abdukce a addukce.
          </div>

          <ul className="pageList">
            <li>Typicky v ramenním a kyčelním kloubu.</li>
            <li>Nejde o „čistý“ pohyb kolem jedné osy, ale o plynulé střídání více pohybů.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Lateroflexe</h2>
          <div className="pageBlock">
            Lateroflexe je úklon do strany. Nejčastěji se používá při popisu pohybů páteře a hlavy.
          </div>

          <ul className="pageList">
            <li>
              <strong>Lateroflexe doprava</strong> – úklon hlavy/trupu k pravé straně.
            </li>
            <li>
              <strong>Lateroflexe doleva</strong> – úklon hlavy/trupu k levé straně.
            </li>
            <li>V krční a bederní oblasti bývá rozsah lateroflexe větší než v hrudní.</li>
          </ul>
        </div>

                <div className="card">
          <h2 className="pageH2">Cvičení: základní pohyby</h2>
          <div className="pageBlock">
            Já napíšu popis pohybu, vy napíšete termín (1 slovo). Po odeslání dostanete výsledek a hned další otázku.
          </div>

          <div className="pageBlock">
            <strong>Otázka:</strong> {current?.q}
          </div>

          <form onSubmit={onSubmit}>
            <input
  className="answerInput"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Napište odpověď (1 slovo)"
  autoComplete="off"
/>

            <button type="submit">Odeslat</button>
          </form>

          {feedback && <div className="pageSummary">{feedback.text}</div>}
        </div>


        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Co je flexe a co je extenze? Uveďte příklad v lokti.</li>
            <li>Co znamená palmární flexe a jakým směrem se provádí?</li>
            <li>Jaký je rozdíl mezi dorzální a plantární flexí nohy?</li>
            <li>Co je abdukce a proč „zvětšuje úhel“?</li>
            <li>Co je addukce a kdy může být „přes střed“?</li>
            <li>Ke kterému prstu se vztahuje abdukce/addukce na ruce a na noze?</li>
            <li>Jaký je rozdíl mezi vnitřní a zevní rotací v rameni/kyčli?</li>
            <li>Co je pronace a supinace a která kost se při nich otáčí kolem které?</li>
            <li>Co je cirkumdukce a z jakých pohybů se skládá?</li>
            <li>Co je lateroflexe a kde ji nejčastěji popisujeme?</li>
          </ul>

          <div className="pageSummary">
            Doporučení: U každého pojmu si vždy představte základní anatomickou polohu a směr pohybu
            vůči střední rovině těla.
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
