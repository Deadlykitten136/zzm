import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgScapula from "../../../assets/anatomie/Lopatka.png";
import imgHumerus from "../../../assets/anatomie/humerus.png";
import imgElbow from "../../../assets/anatomie/loket.jpg";
import imgRU from "../../../assets/anatomie/radius_a_ulna.jpg";
import imgHand from "../../../assets/anatomie/ruka.png";

export default function HorniKoncetina() {
  const pool = useMemo(
    () => [
      { q: "lopatka (latinsky)", a: ["scapula"] },
      { q: "klíční kost (latinsky)", a: ["clavicula"] },
      { q: "nadpažek lopatky (česky/latinsky)", a: ["akromion", "acromion"] },
      { q: "hmatný výběžek lokte (česky/latinsky)", a: ["okovec", "olecranon"] },
      { q: "která kost se při pronaci/supinaci točí kolem druhé", a: ["radius"] },
      { q: "kolik je kostí zápěstních", a: ["8", "osm"] },
      { q: "kolik je kostí záprstních", a: ["5", "pet", "pět"] },
      { q: "kolik článků má palec", a: ["2", "dva", "dvě"] },
      { q: "kolik článků mají ostatní prsty", a: ["3", "tri", "tři"] },
      { q: "kde je karpální tunel (1 slovo)", a: ["zapesti", "zápěstí"] },
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
      title="Horní končetina"
      lead="Horní končetina je uzpůsobena pro jemnou motoriku a manipulaci. Dělí se na pletenec (lopatka a klíční kost) a volnou končetinu (paže, předloktí a ruka)."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Členění horní končetiny</h2>
          <div className="pageBlock">
            Skelet horní končetiny tvoří kosti pletence, které ji připojují k trupu, a kosti volné
            končetiny. Funkčně jde o systém, který umožňuje velký rozsah pohybů v rameni a současně
            vysokou přesnost v ruce.
          </div>

          <ul className="pageList">
            <li>
              <strong>Pletenec horní končetiny</strong> – lopatka a klíční kost.
            </li>
            <li>
              <strong>Volná horní končetina</strong> – pažní kost, kosti předloktí a kosti ruky.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Pletenec: lopatka (scapula)</h2>
          <div className="pageBlock">
            Lopatka (scapula) je plochá kost na zadní straně hrudníku. Je základnou pro ramenní
            kloub a nabízí rozsáhlé plochy pro úpony svalů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Hřeben lopatky (spina scapulae)</strong> – výrazný kostěný hřeben na zadní ploše.
            </li>
            <li>
              <strong>Nadpažek (akromion)</strong> – laterální pokračování hřebene;{" "}
              <strong>hmatný v rameni</strong>.
            </li>
            <li>
              <strong>Hákovitý výběžek (processus coracoideus)</strong> – hákovitý výběžek vpředu;
              důležitý pro úpony vazů a svalů.
            </li>
            <li>
              <strong>Kloubní jamka</strong> – pro hlavici humeru (ramenní kloub).
            </li>
          </ul>

          <div className="pageSummary">
            Akromion je „kostěná špička ramene“, kterou si snadno nahmatáte laterálně. Hákovitý výběžek
            je vpředu a mediálněji, často hůř přístupný palpaci.
          </div>
        </div>

        <div className="card">
          <img src={imgScapula} alt="Lopatka (scapula) – hlavní části" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Pletenec: klíční kost (clavicula) a spojení</h2>
          <div className="pageBlock">
            Klíční kost (clavicula) je esovitě prohnutá kost, která funguje jako „vzpěra“ mezi hrudníkem
            a lopatkou. Pomáhá držet rameno v optimální poloze a přenáší síly z horní končetiny na trup.
          </div>

          <ul className="pageList">
            <li>
              <strong>Sternoklavikulární spojení</strong> – klíční kost s hrudní kostí (u sterna).
            </li>
            <li>
              <strong>Akromioklavikulární spojení</strong> – klíční kost s akromiem lopatky (u ramene).
            </li>
            <li>Klíční kost je dobře hmatná v celé délce.</li>
          </ul>

          <div className="pageSummary">
            Pro praxi: bolest v oblasti „špičky ramene“ často souvisí s akromioklavikulárním spojením.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Paže: kost pažní (humerus)</h2>
          <div className="pageBlock">
            Humerus je dlouhá kost paže. Má proximální epifýzu (u ramene), diafýzu a distální epifýzu
            (u lokte). Na koncích vytváří kloubní plochy a nese hrboly a výběžky pro úpony svalů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Proximální epifýza</strong> – hlavice humeru (kloub s lopatkou).
            </li>
            <li>
              <strong>Diafýza</strong> – tělo kosti.
            </li>
            <li>
              <strong>Distální epifýza</strong> – podílí se na loketním kloubu.
            </li>
            <li>
              <strong>Epikondyl</strong> – kostní hrbol na distálním konci pro úpony svalů a vazů.
            </li>
          </ul>

          <div className="pageSummary">
            Epikondyly: mediální a laterální. Nejsou to „části kloubní plochy“, ale úponové hrboly
            pro svaly a vazy.
          </div>
        </div>

        <div className="card">
          <img src={imgHumerus} alt="Humerus – hlavní části" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Loket, epikondyly a typické bolesti</h2>
          <div className="pageBlock">
            Loketní oblast tvoří složitý kloubní komplex. Epikondyly humeru jsou častým místem
            přetížení úponů svalů předloktí.
          </div>

          <ul className="pageList">
            <li>
              <strong>Epikondylus medialis</strong> – úpon ohybačů; při přetížení se může projevit{" "}
              <strong>„oštěpový loket“</strong>.
            </li>
            <li>
              <strong>Epikondylus lateralis</strong> – úpon natahovačů; při přetížení typicky{" "}
              <strong>„tenisový loket“</strong>.
            </li>
            <li>
              Epikondyly jsou dobře hmatné po stranách distálního konce humeru.
            </li>
          </ul>
        </div>

        <div className="card">
          <img src={imgElbow} alt="Loket – orientace, epikondyly a olekranon" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Předloktí: radius a ulna</h2>
          <div className="pageBlock">
            Předloktí tvoří dvě kosti: vřetenní (radius) a loketní (ulna). Jejich vzájemné postavení
            umožňuje pronaci a supinaci, tedy otáčení dlaně dolů a nahoru.
          </div>

          <ul className="pageList">
            <li>
              <strong>Radius</strong> – na palcové straně; při pronaci/supinaci se{" "}
              <strong>otáčí kolem ulny</strong>.
            </li>
            <li>
              <strong>Ulna</strong> – na malíkové straně; tvoří stabilnější osu předloktí.
            </li>
            <li>
              <strong>Okovec (olecranon)</strong> – proximální výběžek ulny tvořící „špičku lokte“.
            </li>
          </ul>

          <div className="pageSummary">
            Zapamatování: v pronaci se radius kříží přes ulnu; v supinaci jsou kosti rovnoběžně.
            Radius se točí kolem ulny.
          </div>
        </div>

        <div className="card">
          <img src={imgRU} alt="Radius a ulna – vzájemná poloha" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Ruka: kosti zápěstní, záprstní a články prstů</h2>
          <div className="pageBlock">
            Skelet ruky je uzpůsoben pro jemnou motoriku. Tvoří ho kosti zápěstní, záprstní a články
            prstů. V základní orientaci je důležité znát počty a číslování prstů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Kosti zápěstní (ossa carpi)</strong> – 8 kostí ve dvou řadách.
            </li>
            <li>
              <strong>Kosti záprstní (ossa metacarpi)</strong> – 5 kostí (I–V).
            </li>
            <li>
              <strong>Články prstů (ossa digitorum manus – phalanges)</strong> – palec má 2 články,
              ostatní prsty 3 články.
            </li>
            <li>
              <strong>Číslování prstů</strong>: I = palec, II = ukazovák, III = prostředník, IV = prsteník, V = malík.
            </li>
          </ul>

          <div className="pageSummary">
            Články: proximální, střední (jen u II–V) a distální. Palec má pouze proximální a distální článek.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Kost hrášková a drsnatinky</h2>
          <div className="pageBlock">
            V oblasti zápěstí se často zmiňují specifické orientační kůstky a drsnatiny (výběžky) pro úpony
            vazů a svalů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Kost hrášková</strong> – drobná kůstka na ulnární straně zápěstí, dobře hmatná.
            </li>
            <li>
              <strong>Drsnatinky</strong> – kostní hrboly/výběžky sloužící jako úpony (praktické orientační body).
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Karpální tunel</h2>
          <div className="pageBlock">
            Karpální tunel je úzký prostor na palmární (dlaňové) straně zápěstí. Je ohraničen kostmi zápěstí
            a vazivovým pruhem (flexorovým retinakulem). Uvnitř procházejí šlachy ohybačů prstů a nerv.
          </div>

          <ul className="pageList">
            <li>
              V tunelu běží šlachy ohybačů prstů a <strong>nerv</strong> pro ruku.
            </li>
            <li>
              Při zúžení prostoru (otok, přetížení, zánět) dochází k <strong>útisku nervu</strong>.
            </li>
            <li>
              Typické projevy: brnění, bolest, noční zhoršení, oslabení úchopu (hlavně palcová strana).
            </li>
          </ul>

          <div className="pageSummary">
            Pro praxi: karpální tunel je „kanálek“ na dlaňové straně zápěstí. Když se v něm zvýší tlak,
            nerv trpí jako první → brnění a bolest v ruce.
          </div>
        </div>

        <div className="card">
          <img src={imgHand} alt="Kosti ruky – zápěstí, záprstí a články prstů" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Horní končetina = pletenec (scapula, clavicula) + volná končetina.</li>
            <li>Scapula: spina scapulae, akromion (hmatný), processus coracoideus.</li>
            <li>Clavicula: spojení se sternem a akromiem.</li>
            <li>Humerus: proximální a distální epifýza; epikondyly jsou úponové hrboly.</li>
            <li>Předloktí: radius a ulna; radius se otáčí kolem ulny; olecranon tvoří loket.</li>
            <li>Ruka: 8 ossa carpi, 5 ossa metacarpi, phalanges (palec 2 články, ostatní 3).</li>
            <li>Karpální tunel: tlak v zápěstí může utlačit nerv → brnění a slabost.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: horní končetina</h2>
          <div className="pageBlock">
            Já napíšu otázku, vy napíšete odpověď jedním slovem (nebo číslem).
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

          {feedback && <div className="pageSummary">{feedback}</div>}
        </div>

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Jaké části tvoří pletenec horní končetiny a jaká jsou jeho hlavní spojení?</li>
            <li>Které tři struktury na lopatce jsou nejdůležitější jako orientační body?</li>
            <li>Co je epikondyl a proč souvisí s tenisovým a oštěpovým loktem?</li>
            <li>Proč se radius při pronaci a supinaci otáčí kolem ulny a co to umožňuje?</li>
            <li>Kolik je kostí zápěstních a záprstních a jak se číslují prsty?</li>
            <li>Jaké články prstů rozlišujeme a čím se liší palec?</li>
            <li>Kde je karpální tunel a proč může způsobovat brnění a bolest?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
