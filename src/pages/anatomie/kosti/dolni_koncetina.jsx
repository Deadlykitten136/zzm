import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import imgPelvis from "../../../assets/anatomie/panev.jpg";
import imgFemur from "../../../assets/anatomie/femur.png";
import imgTF from "../../../assets/anatomie/tibia_a_fibula.webp";
import imgFoot from "../../../assets/anatomie/pata.png";

export default function DolniKoncetiny() {
  const pool = useMemo(
    () => [
      { q: "kost pánevní (latinsky)", a: ["oscoxae"] },
      { q: "jamka kyčelního kloubu (1 slovo)", a: ["acetabulum"] },
      { q: "stehenní kost (1 slovo)", a: ["femur"] },
      { q: "čéška (1 slovo)", a: ["patella"] },
      { q: "kost holenní (1 slovo)", a: ["tibia"] },
      { q: "kost lýtková (1 slovo)", a: ["fibula"] },
      { q: "kosti zánártní (latinsky bez mezer)", a: ["ossatarsi", "ossatrsi"] },
      { q: "kosti nártní (latinsky bez mezer)", a: ["ossametatarsi", "ossametatarsi"] },
      { q: "kolik článků má palec nohy", a: ["2", "dva", "dvě"] },
      { q: "kolik článků mají ostatní prsty nohy", a: ["3", "tri", "tři"] },
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
      title="Dolní končetina"
      lead="Dolní končetina je uzpůsobena pro oporu a lokomoci. Dělí se na pletenec (pánev) a volnou končetinu (stehno, bérec a noha)."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Členění dolní končetiny</h2>
          <div className="pageBlock">
            Kostra dolní končetiny přenáší hmotnost těla na podložku. Oproti horní končetině je
            stabilnější, masivnější a méně zaměřená na jemnou motoriku, ale musí zvládat velké
            zatížení při chůzi, běhu i stoji.
          </div>

          <ul className="pageList">
            <li>
              <strong>Pletenec</strong> – pánev (kost pánevní + kost křížová).
            </li>
            <li>
              <strong>Volná končetina</strong> – femur, patella, tibia, fibula, kosti nohy.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Pletenec: kost pánevní (os coxae) a pánev</h2>
          <div className="pageBlock">
            Kost pánevní (os coxae) vzniká srůstem tří kostí: kyčelní, sedací a stydké (latinské názvy jsou
            užitečné, ale v tomto cvičení je nebudeme zkoušet). Společně s kostí křížovou tvoří pánev, která
            přenáší zátěž z páteře na dolní končetiny a chrání orgány v malé pánvi.
          </div>

          <ul className="pageList">
            <li>
              <strong>Os ilium</strong> (kost kyčelní) – tvoří horní část; nese hřeben kyčelní.
            </li>
            <li>
              <strong>Os ischii</strong> (kost sedací) – zadodole; nese hrbol sedací (důležitý pro sed).
            </li>
            <li>
              <strong>Os pubis</strong> (kost stydká) – vpředu; spojení obou stran tvoří sponu stydkou.
            </li>
            <li>
              <strong>Acetabulum</strong> – jamka kyčelního kloubu, společný „výrobek“ všech tří kostí.
            </li>
          </ul>

          <div className="pageSummary">
            Pánev = os coxae (vpravo a vlevo) + kost křížová. Zátěž z trupu se přenáší přes pánev do kyčlí.
          </div>
        </div>

        <div className="card">
          <img src={imgPelvis} alt="Pánev – os coxae a orientační body" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Hmatné útvary pánve</h2>
          <div className="pageBlock">
            Pro kliniku a TČM praxi je klíčové umět palpovat stabilní orientační body pánve. Při palpaci
            vždy zohledněte vrstvu měkkých tkání a postavení pánve (anteverze/retroverze).
          </div>

          <ul className="pageList">
            <li>
              <strong>Hřeben kosti kyčelní</strong> – dlouhý hmatný okraj na horní části pánve (často „boky“).
            </li>
            <li>
              <strong>Trny kyčelní</strong> – přední a zadní orientační body na kyčelní kosti.
            </li>
            <li>
              <strong>Hrbol sedací</strong> – výrazná kost při sezení (dole vzadu).
            </li>
            <li>
              <strong>Spona stydká</strong> – vpředu ve střední čáře (citlivá oblast, palpovat ohleduplně).
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Stehno: stehenní kost (femur)</h2>
          <div className="pageBlock">
            Femur je nejdelší a nejmasivnější kost lidského těla. Proximálně se kloubí s acetabulem
            (kyčelní kloub), distálně se podílí na kolenním kloubu.
          </div>

          <ul className="pageList">
            <li>
              <strong>Proximální epifýza</strong> – hlavice femuru (kloub s acetabulem) a krček.
            </li>
            <li>
              <strong>Trochanter major</strong> (velký chocholík) – výrazný laterální úponový hrbol, částečně hmatný.
            </li>
            <li>
              <strong>Trochanter minor</strong> (malý chocholík) – menší výběžek více mediálně a dorzálně (hůř hmatný).
            </li>
            <li>
              <strong>Distální epifýza</strong> – kondyly femuru pro kolenní kloub.
            </li>
          </ul>

          <div className="pageSummary">
            Trochantery jsou úponové struktury: major je výrazný laterálně, minor je skrytější a slouží jako důležitý
            úpon pro svaly kyčle.
          </div>
        </div>

        <div className="card">
          <img src={imgFemur} alt="Femur – hlavní části a chocholíky" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Koleno: čéška (patella)</h2>
          <div className="pageBlock">
            Čéška (patella) je sezamská kost vložená do šlachy čtyřhlavého svalu stehenního. Zvyšuje účinnost
            svalu a chrání přední část kolena.
          </div>

          <ul className="pageList">
            <li>Je součástí kolenního kloubního aparátu.</li>
            <li>Směřuje a zlepšuje tah šlachy čtyřhlavého svalu.</li>
            <li>Je dobře hmatná vepředu na koleni.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Bérec: tibia a fibula</h2>
          <div className="pageBlock">
            Bérec tvoří dvě kosti: tibia (holenní) a fibula (lýtková). Tibia nese většinu zátěže,
            fibula je štíhlejší a významná pro stabilitu kotníku a úpony svalů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Tibia</strong> – masivní, mediálně; proximálně má kondyly pro kolenní kloub.
            </li>
            <li>
              <strong>Drsnatina tibie</strong> – úpon šlachy čtyřhlavého svalu (přes patelární vaz).
            </li>
            <li>
              <strong>Distální epifýza tibie</strong> – tvoří <strong>vnitřní kotník</strong> a kloubní plošku pro talus.
            </li>
            <li>
              <strong>Fibula</strong> – laterálně; distálně tvoří <strong>zevní kotník</strong>.
            </li>
            <li>
              Kotníky spolu vytvářejí „vidlici“ pro kost hlezenní a stabilizují hlezenní kloub.
            </li>
          </ul>

          <div className="pageSummary">
            Tibia = hlavní nosná kost bérce. Fibula = stabilizace kotníku + úpony, není primární nositel hmotnosti.
          </div>
        </div>

        <div className="card">
          <img src={imgTF} alt="Tibia a fibula – orientace a kotníky" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Noha: zánártí, nárt a články prstů</h2>
          <div className="pageBlock">
            Skelet nohy je uzpůsoben pro oporu a pružné odvíjení kroku. Tvoří ho kosti zánártní,
            kosti nártní a články prstů.
          </div>

          <ul className="pageList">
            <li>
              <strong>Kosti zánártní (ossa tarsi)</strong> – tvoří základ kotníku a klenby nohy.
            </li>
            <li>
              <strong>Kosti nártní (ossa metatarsi)</strong> – 5 kostí (I–V), nesou zatížení při odrazu.
            </li>
            <li>
              <strong>Články prstů (ossa digitorum pedis – phalanges)</strong> – palec 2 články, ostatní 3.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Hlavní kosti zánártí a Achillova šlacha</h2>
          <div className="pageBlock">
            Pro orientaci jsou nejdůležitější kost patní a hlezenní, které spolu vytvářejí zadní část nohy a kotník.
            Dále loďkovitá kost a klínové kosti, které se podílejí na klenbě nohy.
          </div>

          <ul className="pageList">
            <li>
              <strong>Kost patní (calcaneus)</strong> – největší kost zánártí; úpon <strong>Achillovy šlachy</strong>.
            </li>
            <li>
              <strong>Kost hlezenní (talus)</strong> – přenáší zátěž z bérce na nohu; kloubí se s tibií a fibulou.
            </li>
            <li>
              <strong>Kost loďkovitá (os naviculare)</strong> – mediálně, před talem; důležitá pro klenbu.
            </li>
            <li>
              <strong>3 kosti klínové</strong> – mediální, prostřední, laterální; před naviculare.
            </li>
            <li>
              Významné jsou i drsnatiny a hrboly jako úpony (např. pro vazy a šlachy) – praktické pro palpaci.
            </li>
          </ul>

          <div className="pageSummary">
            Talus je „kost, která nese bércový kloub“ – nemá přímý svalový úpon, ale přenáší síly.
            Calcaneus je „kost paty“ – pevný úpon Achillovy šlachy.
          </div>
        </div>

        <div className="card">
          <img src={imgFoot} alt="Zánártí – pata, talus a orientační kosti" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Klenba nohy a praktická orientace (TČM)</h2>
          <div className="pageBlock">
            Klenba nohy rozkládá zátěž a funguje jako pružina. V praxi TČM se často orientujeme podle kostních
            hran a drsnatin na mediální a laterální straně nohy (např. v oblasti naviculare a metatarsů).
          </div>

          <ul className="pageList">
            <li>
              Mediální strana nohy: často hmatná oblast naviculare a první metatars.
            </li>
            <li>
              Laterální strana nohy: orientace podle pátého metatarsu a jeho hrbolu (drsnatina).
            </li>
            <li>
              Pokud hledáte bod KI2: orientujte se podle mediální strany nohy a vztahu k naviculare a talusu.
            </li>
          </ul>

          
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Dolní končetina = pánev (os coxae + sacrum) + volná končetina.</li>
            <li>Os coxae = srůst kyčelní, sedací a stydké kosti; acetabulum = jamka kyčelního kloubu.</li>
            <li>Femur: proximální epifýza + trochantery, distální epifýza s kondyly; patella je sezamská kost.</li>
            <li>Bérec: tibia (nese zátěž, vnitřní kotník) + fibula (zevní kotník, stabilita).</li>
            <li>Noha: ossa tarsi, ossa metatarsi, phalanges; palec 2 články, ostatní 3.</li>
            <li>Calcaneus = úpon Achillovy šlachy; talus přenáší zátěž z bérce.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: dolní končetina</h2>
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
            <li>Co tvoří pánev a jaký je rozdíl mezi pánví a kostí pánevní?</li>
            <li>Z jakých tří kostí vzniká os coxae a co je acetabulum?</li>
            <li>Které hmatné body pánve používáte v praxi nejčastěji?</li>
            <li>Jaké jsou hlavní části femuru a k čemu slouží trochanter major/minor?</li>
            <li>Jaký je rozdíl ve funkci tibie a fibuly a co tvoří kotníky?</li>
            <li>Vyjmenujte hlavní kosti zánártí a vysvětlete roli talu a calcanea.</li>
            <li>Kolik je kostí zánártních a nártních a jak se liší články palce oproti ostatním prstům?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
