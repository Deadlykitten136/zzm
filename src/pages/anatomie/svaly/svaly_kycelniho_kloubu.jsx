import PageLayout from "../../../components/PageLayout.jsx";
import { useMemo, useState } from "react";
import img from "../../../assets/anatomie/hlukobe_svaly_kycle.png";

export default function SvalyKycelnihoKloubu() {
  const pool = useMemo(
    () => [
      { q: "bedrokyčlostehenní sval se latinsky řekne (1 slovo)", a: ["iliopsoas"] },
      { q: "hlavní pohyb m. iliopsoas v kyčli je (1 slovo)", a: ["flexe"] },
      { q: "hýžďové svaly se latinsky řeknou (1 slovo)", a: ["glutei"] },
      { q: "největší hýžďový sval je (2 slova)", a: ["gluteus maximus"] },
      { q: "střední hýžďový sval je (2 slova)", a: ["gluteus medius"] },
      { q: "malý hýžďový sval je (2 slova)", a: ["gluteus minimus"] },
      { q: "gluteus medius je klíčový pro stabilizaci (1 slovo)", a: ["pánve", "panev"] },
      { q: "napínač povázky stehenní se latinsky řekne (3 slova)", a: ["tensor fasciae latae"] },
      { q: "hluboké pelvitrochanterické svaly dělají hlavně (2 slova)", a: ["zevní rotaci", "zevni rotaci"] },
      { q: "sval hruškový se latinsky řekne (1 slovo)", a: ["piriformis"] },
      { q: "hluboké zevní rotátory kyčle se souhrnně říká (1 slovo)", a: ["pelvitrochanterické", "pelvitrochantericke"] },
      { q: "gluteus maximus dělá hlavně extenzi a (1 slovo)", a: ["zevní", "zevni"] }, // zevní rotaci
      { q: "při stoji na jedné noze brání poklesu pánve hlavně (2 slova)", a: ["gluteus medius"] },
      { q: "iliopsoas se upíná na malý chocholík femuru = (1 slovo)", a: ["trochanter", "trochanter minor", "minor"] },
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
      title="Svaly kyčelního kloubu"
      lead="Kyčel je silový kloub pro stoj a chůzi. Klíčové jsou flexory (iliopsoas), hýžďové svaly pro stabilitu pánve a hluboké zevní rotátory pro kontrolu postavení hlavice femuru."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Obrázek</h2>
          <div className="pageBlock">
            <img src={img} alt="Svaly kyčelního kloubu – hýžďové a hluboké svaly kyčle" className="img" />
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Co je pro kyčel typické</h2>
          <div className="pageBlock">
            Kyčelní kloub musí současně unést váhu těla a umožnit velký rozsah pohybu. Proto je řízen „ve vrstvách“:
            silné povrchové svaly dělají velký pohyb, hlubší svaly ho jemně korigují a stabilizují.
          </div>

          <ul className="pageList">
            <li>Kyčel = silový kloub pro stoj, chůzi, přenos síly.</li>
            <li>Stabilita závisí hlavně na svalech kolem pánve.</li>
            <li>Hluboké svaly řídí „jemné centrování“ v kloubu.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: bolest kyčle/zad často vzniká, když povrchové svaly přebírají práci za hlubokou stabilizaci.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Přední skupina: m. iliopsoas (bedrokyčlostehenní)</h2>
          <div className="pageBlock">
            <strong>m. iliopsoas</strong> je hlavní flexor kyčle. Vzniká z části bederní páteře a pánve a upíná se na femur,
            takže propojuje trup s dolní končetinou. Při zkrácení může „tahat“ bederní oblast do zvýšené lordózy.
          </div>

          <ul className="pageList">
            <li><strong>Funkce:</strong> flexe v kyčli (zvednutí stehna), pomocná zevní rotace.</li>
            <li><strong>Začátek:</strong> oblast Th12–L4/5 + pánev.</li>
            <li><strong>Úpon:</strong> malý chocholík femuru (trochanter minor).</li>
          </ul>

          <div className="pageSummary">
            Jednoduše: iliopsoas = „zvedák stehna“ + silné propojení s bedry.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Zadní a zevní skupina: hýžďové svaly (glutei)</h2>
          <div className="pageBlock">
            Hýžďové svaly jsou pro kyčel a pánev zásadní. Nejde jen o „sílu“, ale o stabilizaci pánve při stoji na jedné noze
            (chůze je vlastně série stojů na jedné noze).
          </div>

          <ul className="pageList">
            <li><strong>gluteus maximus</strong> – extenze kyčle, zevní rotace (silový sval „zapažení“).</li>
            <li><strong>gluteus medius</strong> – abdukce + stabilizace pánve (nejdůležitější pro chůzi).</li>
            <li><strong>gluteus minimus</strong> – abdukce + stabilizace, jemnější kontrola pohybu.</li>
          </ul>

          <div className="pageSummary">
            Když gluteus medius nefunguje, pánev při kroku na zatížené straně „padá“ a tělo to kompenzuje jinde (bedra, koleno).
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">m. tensor fasciae latae (napínač povázky stehenní)</h2>
          <div className="pageBlock">
            <strong>Tensor fasciae latae</strong> pokračuje do pruhu stehenní fascie na zevní straně stehna.
            Funkčně pomáhá stabilizovat kyčel i koleno – často se přetěžuje, když nepracují hýžďové svaly, hlavně gluteus medius.
          </div>

          <ul className="pageList">
            <li>Pomáhá stabilizaci kyčle a kolene přes zevní fascii stehna.</li>
            <li>Často „přebírá práci“ při slabším gluteus medius.</li>
            <li>Souvisí s pocitem tahání po zevní straně stehna.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Pelvitrochanterické svaly (hluboké zevní rotátory)</h2>
          <div className="pageBlock">
            Pelvitrochanterické svaly jsou hluboké svaly, které tvoří „jemné řízení“ kyčle. Jejich hlavní funkcí je
            <strong>zevní rotace</strong> a stabilizace postavení hlavice femuru v jamce, hlavně při zatížení.
          </div>

          <ul className="pageList">
            <li><strong>m. piriformis</strong> – sval hruškový.</li>
            <li><strong>m. obturatorius internus</strong> – vnitřní obturátor.</li>
            <li><strong>mm. gemelli</strong> – dvojčecí horní a dolní.</li>
            <li><strong>m. quadratus femoris</strong> – čtyřhranný sval stehenní.</li>
          </ul>

          <div className="pageSummary">
            Prakticky: tyto svaly nejsou „na objem“, ale na kontrolu. Když nepracují, kyčel je méně stabilní i bez velké bolesti.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Shrnutí</h2>
          <ul className="pageList">
            <li><strong>iliopsoas</strong> = hlavní flexor kyčle (propojení s bedry).</li>
            <li><strong>glutei</strong> = stabilizace pánve + pohyb v kyčli (hlavně gluteus medius při chůzi).</li>
            <li><strong>tensor fasciae latae</strong> = stabilizace přes zevní fascii stehna.</li>
            <li><strong>pelvitrochanterické svaly</strong> = hluboká stabilizace a zevní rotace.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cvičení: svaly kyčelního kloubu</h2>
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
