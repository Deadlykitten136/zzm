import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";

export default function StavbaKosti() {

      const pool = useMemo(
    () => [
      { q: "konec dlouhé kosti", a: ["epifyza", "epifýza"] },
      { q: "tělo dlouhé kosti", a: ["diafyza", "diafýza"] },
      { q: "přechod mezi epifýzou a diafýzou", a: ["metafyza", "metafýza"] },

      { q: "hutná kostní hmota", a: ["kompakta", "compacta"] },
      { q: "trámčitá kostní hmota", a: ["spongioza", "spongióza"] },

      { q: "dutina v diafýze dlouhé kosti", a: ["drenova", "dřeňová"] },

      { q: "vazivový obal kosti", a: ["okostice", "periost"] },
      { q: "vnitřní výstelka kosti", a: ["endost"] },

      { q: "krvetvorná kostní dřeň", a: ["cervena", "červená"] },
      { q: "tuková kostní dřeň", a: ["zluta", "žlutá"] },
      { q: "degenerovaná kostní dřeň ve stáří", a: ["seda", "šedá"] },
    ],
    []
  );

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const [deck, setDeck] = useState(() =>
    [...pool.keys()].sort(() => Math.random() - 0.5)
  );
  const [pos, setPos] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  const current = pool[deck[pos]];

  const next = () => {
    setInput("");
    setFeedback(null);
    if (pos + 1 >= deck.length) {
      setDeck([...pool.keys()].sort(() => Math.random() - 0.5));
      setPos(0);
    } else {
      setPos((p) => p + 1);
    }
  };

  const check = () => {
    const ok = current.a.map(normalize).includes(normalize(input));
    setFeedback(ok ? "Správně ✅" : `Ne ❌ Správně: ${current.a[0]}`);
    setTimeout(next, 600);
  };

  return (
    <PageLayout
      title="Stavba kosti"
      lead="Kost je živý orgán tvořený kostní tkání, cévami a nervy. Má pevnou zevní stavbu a funkční vnitřní architekturu, která umožňuje oporu, pohyb i krvetvorbu."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Co je kost</h2>
          <div className="pageBlock">
            Kost (os) je orgán opěrné soustavy. Kromě mechanické funkce má i význam metabolický
            (zásobárna minerálů) a hematopoetický (krvetvorba v kostní dřeni).
          </div>

          <ul className="pageList">
            <li>Opora a ochrana orgánů.</li>
            <li>Páky pro svaly – umožnění pohybu.</li>
            <li>Zásobárna vápníku a fosfátů.</li>
            <li>Krvetvorba (hlavně v červené kostní dřeni).</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Zevní stavba dlouhé kosti</h2>
          <div className="pageBlock">
            Na dlouhé kosti rozlišujeme konce a střední část. Toto členění je důležité pro popis
            růstu, prokrvení i typické poškození.
          </div>

          <ul className="pageList">
            <li>
              <strong>Epifýza</strong> – konec kosti (proximální a distální epifýza), podílí se na
              tvorbě kloubních ploch.
            </li>
            <li>
              <strong>Diafýza</strong> – tělo (střední část) dlouhé kosti, typicky tvořená kompaktní
              kostí a dřeňovou dutinou.
            </li>
            <li>
              <strong>Metafýza</strong> – přechod mezi epifýzou a diafýzou; v období růstu zde leží
              růstová chrupavka (epifyzární ploténka).
            </li>
            <li>
              <strong>Kloubní chrupavka</strong> – hyalinní chrupavka pokrývající kloubní plochy
              epifýz (snižuje tření, tlumí nárazy).
            </li>
          </ul>

          <div className="pageSummary">
            Pro orientaci: epifýzy jsou „konce“, diafýza je „střed“. Metafýza je typické místo růstu
            i některých patologických změn.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Povrch kosti</h2>
          <div className="pageBlock">
            Kost je na povrchu kryta vazivovým obalem, který je klíčový pro výživu, hojení a růst do
            šířky. V kloubních místech je nahrazen chrupavkou.
          </div>

          <ul className="pageList">
            <li>
              <strong>Okostice (periost)</strong> – bohatě prokrvená a inervovaná; obsahuje buňky pro
              růst a obnovu kosti.
            </li>
            <li>
              <strong>Endost</strong> – výstelka vnitřních dutin a trámců; podílí se na přestavbě
              kosti.
            </li>
            <li>
              V okostici probíhá růst kosti do šířky a významně se uplatňuje při hojení zlomenin.
            </li>
          </ul>

          <div className="pageSummary">
            Okostice je citlivá na bolest – proto bývá poranění kosti výrazně bolestivé.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Vnitřní stavba kosti</h2>
          <div className="pageBlock">
            Kost je uvnitř uspořádána tak, aby byla pevná a současně relativně lehká. Rozlišujeme
            kompaktní (hutnou) a spongiózní (trámčitou) kost.
          </div>

          <ul className="pageList">
            <li>
              <strong>Kompaktní kost (substantia compacta)</strong> – tvoří pevný obal, hlavně v
              diafýze dlouhých kostí; zajišťuje vysokou mechanickou odolnost.
            </li>
            <li>
              <strong>Spongiózní kost (substantia spongiosa)</strong> – systém kostních trámců
              (trabekul), typicky v epifýzách; trámce jsou orientované podle zatížení.
            </li>
            <li>
              <strong>Dřeňová dutina (cavitas medullaris)</strong> – v diafýze dlouhých kostí;
              obsahuje kostní dřeň.
            </li>
            <li>
              Cévy a nervy vstupují do kosti otvory (např. výživový otvor) a rozvětvují se v
              Haversových a Volkmannových kanálcích.
            </li>
          </ul>

          <div className="pageSummary">
            Spongióza není „měkká“ – je to pevná trámčina. Její uspořádání šetří materiál a zároveň
            dobře přenáší síly.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Kostní dřeň a změny s věkem</h2>
          <div className="pageBlock">
            Kostní dřeň vyplňuje prostory ve spongióze a dřeňové dutině. Je buď červená (krvetvorná)
            nebo žlutá (tuková). Zastoupení se v průběhu života výrazně mění.
          </div>

          <ul className="pageList">
            <li>
              <strong>Děti</strong> – převládá <strong>červená kostní dřeň</strong> prakticky ve
              všech kostech; krvetvorba je rozšířená.
            </li>
            <li>
              <strong>Dospělí</strong> – červená dřeň zůstává hlavně v{" "}
              <strong>plochých kostech</strong> a také <strong>na koncích (epifýzách) dlouhých kostí</strong>;
              zbytek se mění na <strong>žlutou (tukovou) dřeň</strong>.
            </li>
            <li>
              <strong>Stáří</strong> – dřeň může přecházet do{" "}
              <strong>šedé dřeně</strong>, protože se snižuje buněčnost a prokrvení a přibývá
              vazivových a degenerativních změn; krvetvorná kapacita klesá.
            </li>
          </ul>

          <div className="pageSummary">
            Důsledek: s věkem se snižuje rezerva krvetvorby a zhoršuje se regenerace některých
            tkání; současně roste podíl tukové a vazivové složky v dřeni.
          </div>
        </div>

        <div className="card">
  <h2 className="pageH2">Cvičení: stavba kosti</h2>

  <div className="pageBlock">
    <strong>Otázka:</strong> {current.q}
  </div>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      if (input.trim()) check();
    }}
  >
    <input
      className="answerInput"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Napiš pojem (1 slovo)"
    />
    <button type="submit">Odeslat</button>
  </form>

  {feedback && <div className="pageSummary">{feedback}</div>}
</div>


        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Co je kost z hlediska anatomie (tkáň vs. orgán) a jaké má hlavní funkce?</li>
            <li>Co je epifýza a co diafýza? Kde přibližně leží metafýza?</li>
            <li>Jaký je rozdíl mezi kompaktní a spongiózní kostí a kde se typicky nacházejí?</li>
            <li>Co je dřeňová dutina a kde ji najdeme?</li>
            <li>Jaká je funkce okostice a proč je klinicky důležitá?</li>
            <li>Jak se liší rozložení červené a žluté kostní dřeně u dětí a dospělých?</li>
            <li>Co je šedá kostní dřeň a proč se objevuje ve stáří?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
