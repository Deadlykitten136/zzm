import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function VyvojAOsifikace() {
  const pool = useMemo(
    () => [
      { q: "proces tvorby kosti", a: ["osifikace", "ossifikace"] },
      { q: "osifikace z vaziva", a: ["desmalni", "desmální", "intramembranozni", "intramembranózní"] },
      { q: "osifikace z chrupavky", a: ["chondralni", "chondrální", "endochondralni", "endochondrální"] },
      { q: "kostitvorná buňka", a: ["osteoblast"] },
      { q: "buňka odbourávající kost", a: ["osteoklast"] },
      { q: "zralá kostní buňka", a: ["osteocyt"] },
      { q: "růst do délky probíhá přes", a: ["plotenku", "ploténku", "epifyzarni", "epifyzární"] },
      { q: "hormon podporující růst kostí", a: ["somatotropin"] },
      { q: "celoživotní přestavba kosti se nazývá", a: ["remodelace", "remodelování"] },
      { q: "vazivový obal kosti", a: ["okostice", "periost"] },
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
      title="Vývoj kosti a osifikace"
      lead="Kosti vznikají osifikací během embryonálního vývoje a dále rostou a přestavují se po celý život. Přestavba umožňuje růst, hojení fraktur i adaptaci na zátěž."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Vznik a vývoj kostry</h2>
          <div className="pageBlock">
            Většina kostí se během vývoje nejprve zakládá jako vazivový nebo chrupavčitý model.
            Tento model se postupně mění v kostní tkáň procesem osifikace. Současně se formuje
            prokrvení, okostice a vnitřní architektura kosti.
          </div>

          <ul className="pageList">
            <li>Kostní tkáň vzniká z mezenchymu (embryonální vazivo).</li>
            <li>Podle „podkladu“ rozlišujeme osifikaci desmální a chondrální.</li>
            <li>Růst kosti je řízen geneticky a hormonálně a reaguje na mechanickou zátěž.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Osifikace: z čeho kost vzniká</h2>
          <div className="pageBlock">
            Osifikace je tvorba kosti. Základem je přeměna mezenchymu (nebo chrupavky) na kostní
            tkáň, ukládání mineralizované mezibuněčné hmoty a organizace do kompakty a spongiózy.
          </div>

          <ul className="pageList">
            <li>
              <strong>Desmální (intramembranózní) osifikace</strong> – kost vzniká přímo z vaziva
              (mezenchymu), bez chrupavčitého předstupně.
            </li>
            <li>
              <strong>Chondrální (endochondrální) osifikace</strong> – kost vzniká postupnou náhradou
              chrupavčitého modelu kostí.
            </li>
          </ul>

          <div className="pageSummary">
            Zjednodušeně: desmální = „z vaziva rovnou kost“, chondrální = „nejdřív chrupavka, pak kost“.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Kostitvorné a kostní buňky</h2>
          <div className="pageBlock">
            Kost je dynamická tkáň. Neustále probíhá tvorba a odbourávání kostní hmoty, na kterém se
            podílí několik typů buněk.
          </div>

          <ul className="pageList">
            <li>
              <strong>Osteoblast</strong> – kostitvorná buňka; tvoří kostní matrix (osteoid) a
              zahajuje její mineralizaci.
            </li>
            <li>
              <strong>Osteocyt</strong> – zralá kostní buňka vzniklá z osteoblastu; udržuje kostní
              tkáň a „hlásí“ mechanické zatížení.
            </li>
            <li>
              <strong>Osteoklast</strong> – buňka odbourávající kost; umožňuje přestavbu a uvolnění
              minerálů.
            </li>
          </ul>

          <div className="pageSummary">
            „Kostitvorná buňka“ znamená, že osteoblast aktivně vytváří novou kostní hmotu (matrix),
            na kterou se ukládají minerály.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Růst kosti a somatotropin</h2>
          <div className="pageBlock">
            Růst kostí probíhá do délky a do šířky. Do délky se kost prodlužuje přes růstovou
            chrupavku, do šířky především aktivitou okostice.
          </div>

          <ul className="pageList">
            <li>
              <strong>Růst do délky</strong> – probíhá na růstové (epifyzární) ploténce mezi epifýzou
              a diafýzou (v oblasti metafýzy).
            </li>
            <li>
              <strong>Růst do šířky</strong> – probíhá appozicí z periostu (okostice).
            </li>
            <li>
              <strong>Somatotropin (růstový hormon)</strong> podporuje růst tkání včetně kostí a
              nepřímo zvyšuje tvorbu kostní matrix.
            </li>
          </ul>

          <div className="pageSummary">
            Po uzávěru růstových plotének se dlouhé kosti už neprodlužují, ale kost se dál přestavuje.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Celoživotní přestavba kosti (remodelace)</h2>
          <div className="pageBlock">
            Remodelace znamená, že kost se neustále obnovuje: část se odbourá a část se znovu vytvoří.
            Není to známka nemoci – je to normální proces, který umožňuje udržet pevnost kosti a
            přizpůsobit ji zátěži.
          </div>

          <ul className="pageList">
            <li>Probíhá „ve vlnách“: osteoklast nejprve odstraní část kosti, osteoblast ji doplní.</li>
            <li>Umožňuje opravy mikrotrhlin vznikajících běžným zatížením.</li>
            <li>Pomáhá regulovat zásoby vápníku a fosfátů v těle.</li>
            <li>Kost se přizpůsobuje zátěži (pevnější tam, kde je více namáhaná).</li>
          </ul>

          <div className="pageSummary">
            Klíčová myšlenka: kost není „mrtvá tyč“, ale živá tkáň, která se průběžně opravuje a přestavuje.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Hojení fraktury</h2>
          <div className="pageBlock">
            Hojení zlomeniny je řízený proces, který obnovuje kontinuitu kosti. Probíhá v několika
            navazujících fázích. Klíčová je stabilita zlomeniny, dobré prokrvení a přítomnost buněk
            schopných tvořit kost.
          </div>

          <ul className="pageList">
            <li>
              <strong>1) Krvácení a hematom</strong> – po zlomenině dojde ke krvácení, vzniká hematom,
              který je „startovní“ prostředí pro hojení (přináší buňky a signální molekuly).
            </li>
            <li>
              <strong>2) Zánětlivá fáze</strong> – imunitní buňky uklidí poškozenou tkáň a spustí
              regeneraci; zvyšuje se prokrvení okolí.
            </li>
            <li>
              <strong>3) Měkký svalek (měkký kalus)</strong> – vzniká provizorní „most“ mezi úlomky,
              převážně z vaziva a chrupavky; stabilizuje zlomeninu.
            </li>
            <li>
              <strong>4) Tvrdý svalek (kostní kalus)</strong> – měkký svalek se postupně nahrazuje
              kostní tkání osifikací; úlomky se pevně spojí.
            </li>
            <li>
              <strong>5) Remodelace</strong> – nově vzniklá kost se dlouhodobě přestavuje podle zátěže
              až k co nejbližší původní struktuře.
            </li>
          </ul>

          <div className="pageSummary">
            Proč je důležitá stabilita: pokud se úlomky příliš hýbou, tělo „nestíhá“ vytvořit pevný
            kostní most a hojení se zpomaluje nebo se vytvoří méně kvalitní spoj (typicky více vaziva).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Osifikace = tvorba kosti; probíhá desmálně (z vaziva) nebo chondrálně (z chrupavky).</li>
            <li>Osteoblast tvoří kostní matrix, osteoklast kost odbourává, osteocyt udržuje a řídí reakci na zátěž.</li>
            <li>Somatotropin podporuje růst kostí a tvorbu tkání.</li>
            <li>Remodelace probíhá celý život: opravy mikrotrhlin, adaptace na zátěž, metabolická role.</li>
            <li>Hojení fraktury: hematom → zánět → měkký svalek → tvrdý svalek → remodelace.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: vývoj a osifikace</h2>
          <div className="pageBlock">
            Já napíšu popis, vy napíšete pojem jedním slovem.
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
            <li>Co je osifikace a z čeho kost během vývoje vzniká?</li>
            <li>Jaký je rozdíl mezi desmální a chondrální osifikací?</li>
            <li>Která buňka je kostitvorná a co přesně dělá?</li>
            <li>Jakou roli má osteoklast a osteocyt?</li>
            <li>Jak probíhá růst dlouhé kosti do délky a kde je růstová ploténka?</li>
            <li>Jaký význam má somatotropin pro růst kostí?</li>
            <li>Co znamená remodelace a proč probíhá celý život?</li>
            <li>Vyjmenujte fáze hojení fraktury v logickém pořadí.</li>
            <li>Proč je při hojení fraktury důležitá stabilita a prokrvení?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
