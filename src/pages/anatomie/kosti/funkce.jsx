import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function Funkce() {
  const pool = useMemo(
    () => [
      { q: "soubor kostí a jejich spojení", a: ["kostra", "skelet"] },
      { q: "kosti hlavy, trupu a hrudníku tvoří", a: ["osovy", "osový", "axialni", "axiální"] },
      { q: "kosti horní a dolní končetiny tvoří", a: ["konceetin", "končetin"] },
      { q: "mechanická funkce kosti: opora a", a: ["pohyb", "ochrana"] },
      { q: "krvetvorba probíhá v", a: ["cervene", "červené"] },
      { q: "zásobárna vápníku a fosfátů = funkce", a: ["metabolicka", "metabolická"] },
      { q: "udržování stálosti vnitřního prostředí = ", a: ["homeostaza", "homeostáza"] },
      { q: "tuk v kostní dřeni = zásoba", a: ["energie", "energeticka", "energetická"] },
      { q: "minerály, které kost nejčastěji ukládá", a: ["vapnik", "vápník"] },
      { q: "druhý hlavní minerál ukládaný v kosti", a: ["fosfor", "fosfaty", "fosfáty"] },
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
      title="Funkce kostí a kostry"
      lead="Kosti nejsou jen pasivní opora – podílejí se na pohybu, ochraně, krvetvorbě i udržování vnitřní rovnováhy organismu. Kostra je soubor kostí a jejich spojení."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Co je kostra</h2>
          <div className="pageBlock">
            Kostra (skelet) je soubor kostí a jejich spojení. Tvoří pevnou konstrukci těla, na kterou
            se upínají svaly a ve které jsou chráněny životně důležité orgány. U člověka se uvádí
            přibližně <strong>233 kostí</strong> (počet se může lišit podle srůstů a variant, např. v oblasti lebky).
          </div>

          <ul className="pageList">
            <li>
              <strong>Osová kostra (axiální skelet)</strong> – kosti hlavy a trupu (lebka, páteř, hrudník).
            </li>
            <li>
              <strong>Kostra končetin (apendikulární skelet)</strong> – horní a dolní končetina včetně pletenců.
            </li>
            <li>Kostra je funkční celek: kosti + klouby + vazy.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Mechanická funkce</h2>
          <div className="pageBlock">
            Mechanická funkce zahrnuje oporu, pohyb a ochranu. Kosti jsou pevné, ale zároveň lehké díky vnitřní
            architektuře (kompakta a spongióza).
          </div>

          <ul className="pageList">
            <li>
              <strong>Oporna funkce</strong> – kostra drží tvar těla a umožňuje stoj a sed.
            </li>
            <li>
              <strong>Pohyb</strong> – kosti fungují jako páky; svaly působí přes šlachy a klouby.
            </li>
            <li>
              <strong>Ochrana</strong> – lebka chrání mozek, hrudník srdce a plíce, páteřní kanál míchu.
            </li>
          </ul>

          <div className="pageSummary">
            V praxi: bez pevného skeletu by svaly neměly „o co“ táhnout a pohyb by nebyl cílený.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Krvetvorná funkce</h2>
          <div className="pageBlock">
            V kostní dřeni vznikají krevní buňky (krvetvorba, hematopoéza). To je zásadní pro přenos kyslíku,
            obranyschopnost i srážení krve.
          </div>

          <ul className="pageList">
            <li>
              <strong>Červená kostní dřeň</strong> – krvetvorná (tvorba erytrocytů, leukocytů a trombocytů).
            </li>
            <li>
              U dospělých je červená dřeň hlavně v plochých kostech a na koncích dlouhých kostí.
            </li>
          </ul>

          <div className="pageSummary">
            Když se sníží funkční krvetvorba, projeví se to např. anémií, vyšší náchylností k infekcím
            nebo poruchami srážení.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Metabolická funkce: zásobárna minerálů</h2>
          <div className="pageBlock">
            Kost je hlavní zásobárnou minerálů, zejména vápníku a fosfátů. Tyto minerály jsou vázané v kostní
            matrix a v případě potřeby se mohou uvolňovat do krve.
          </div>

          <ul className="pageList">
            <li>
              <strong>Vápník (Ca)</strong> – nutný pro svalovou kontrakci, nervový přenos a srážení krve.
            </li>
            <li>
              <strong>Fosfáty (P)</strong> – součást energetických molekul (ATP), buněčných membrán a kostní
              mineralizace.
            </li>
            <li>Minerálová výměna probíhá průběžně díky remodelaci kosti.</li>
          </ul>

          <div className="pageSummary">
            Kost není „sklad“, do kterého se nesahá. Je to aktivní rezervoár, který se podle potřeb těla
            průběžně doplňuje a vyprazdňuje.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Homeostáza: co to znamená u kostí</h2>
          <div className="pageBlock">
            Homeostáza je udržování stabilního vnitřního prostředí. U kostí to znamená hlavně to, že pomáhají
            udržet <strong>stálou hladinu vápníku a fosfátů v krvi</strong>, i když se příjem z potravy nebo potřeby
            těla mění.
          </div>

          <ul className="pageList">
            <li>
              Když je v krvi minerálů málo, organismus je může <strong>uvolnit z kosti</strong>.
            </li>
            <li>
              Když je minerálů dostatek, organismus je může <strong>uložit do kosti</strong>.
            </li>
            <li>
              Remodelace kosti tak funguje jako „regulační ventil“ mezi kostí a krví.
            </li>
          </ul>

          <div className="pageSummary">
            Jednoduše: krev potřebuje stabilní Ca/P pro základní funkce (svaly, nervy, srážení). Kost pomáhá
            udržet tuhle stabilitu i při výkyvech příjmu nebo spotřeby.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Zásoba energie: jak s tím souvisí kost</h2>
          <div className="pageBlock">
            Energetická zásoba kosti souvisí hlavně se <strong>žlutou kostní dření</strong>, která obsahuje tuk.
            Tuk je zásobní energetický materiál – v případě potřeby může být využit jako zdroj energie pro organismus.
          </div>

          <ul className="pageList">
            <li>
              <strong>Žlutá kostní dřeň</strong> = tuková; převažuje u dospělých v diafýzách dlouhých kostí.
            </li>
            <li>Tuk v dřeni je energetická rezerva (stejně jako tuková tkáň jinde v těle).</li>
            <li>Současně dřeň vyplňuje prostor a podílí se na vnitřním prostředí kosti.</li>
          </ul>

          <div className="pageSummary">
            Pro pochopení: kostní dřeň není jen „krvetvorba“. Má i zásobní složku – žlutá dřeň funguje jako
            tukový rezervoár.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li>Kostra = kosti + jejich spojení; přibližně 233 kostí.</li>
            <li>Osový skelet: lebka, páteř, hrudník. Kostra končetin: končetiny a pletence.</li>
            <li>Mechanická funkce: opora, pohyb (páky), ochrana.</li>
            <li>Krvetvorba: červená kostní dřeň.</li>
            <li>Metabolismus a homeostáza: zásoba a regulace Ca a fosfátů.</li>
            <li>Zásoba energie: tuk ve žluté kostní dřeni.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: funkce kostí</h2>
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
            <li>Co je kostra a z čeho se skládá?</li>
            <li>Co patří do osové kostry a co do kostry končetin?</li>
            <li>Jaké jsou hlavní mechanické funkce kostí?</li>
            <li>Kde probíhá krvetvorba a jaký je význam červené kostní dřeně?</li>
            <li>Jaké minerály kost ukládá a proč jsou důležité pro organismus?</li>
            <li>Vysvětlete homeostázu Ca a fosfátů ve vztahu ke kosti.</li>
            <li>Jak souvisí žlutá kostní dřeň se zásobou energie?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
