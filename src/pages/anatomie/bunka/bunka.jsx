import PageLayout from "../../../components/PageLayout.jsx";
import img from "../../../assets/anatomie/lidska_bunka.jpg";

export default function Bunka() {
  return (
    <PageLayout
      title="Buňka"
      lead="Buňka je základní stavební a funkční jednotka lidského těla. Všechny tkáně a orgány jsou tvořeny buňkami a jejich produkty."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní charakteristika buňky</h2>
          <div className="pageBlock">
            Lidská buňka je eukaryotická, což znamená, že má pravé buněčné jádro a membránové
            organely. Jednotlivé části buňky jsou specializované na konkrétní funkce, ale fungují
            vždy jako celek.
          </div>

          <ul className="pageList">
            <li>Buňky se liší tvarem, velikostí i funkcí.</li>
            <li>Většina buněk má stejnou základní stavbu.</li>
            <li>Funkce buňky odpovídá její stavbě.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Buněčná membrána</h2>
          <div className="pageBlock">
            Buněčná membrána ohraničuje buňku, odděluje vnitřní prostředí od zevního a zajišťuje
            řízenou výměnu látek.
          </div>

          <ul className="pageList">
            <li>Tvořena fosfolipidovou dvojvrstvou s bílkovinami.</li>
            <li>Je selektivně propustná.</li>
            <li>Podílí se na buněčné komunikaci.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Cytoplazma</h2>
          <div className="pageBlock">
            Cytoplazma vyplňuje prostor mezi buněčnou membránou a jádrem. Obsahuje cytosol a
            buněčné organely.
          </div>

          <ul className="pageList">
            <li>Probíhá zde velká část metabolických dějů.</li>
            <li>Zajišťuje vnitřní prostředí buňky.</li>
            <li>Umožňuje transport látek uvnitř buňky.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Buněčné jádro</h2>
          <div className="pageBlock">
            Buněčné jádro je řídicím centrem buňky. Obsahuje genetickou informaci ve formě DNA a
            kontroluje syntézu bílkovin a dělení buňky.
          </div>

          <ul className="pageList">
            <li>Ohraničeno jadernou membránou.</li>
            <li>Obsahuje chromatin.</li>
            <li>V jadérku vznikají ribozomy.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Mitochondrie</h2>
          <div className="pageBlock">
            Mitochondrie jsou energetickými centry buňky. Probíhá v nich buněčné dýchání a tvorba
            ATP.
          </div>

          <ul className="pageList">
            <li>Mají dvojitou membránu.</li>
            <li>Obsahují vlastní DNA.</li>
            <li>Jejich počet odpovídá energetickým nárokům buňky.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Endoplazmatické retikulum</h2>
          <div className="pageBlock">
            Endoplazmatické retikulum je systém membránových kanálků podílejících se na syntéze
            a transportu látek.
          </div>

          <ul className="pageList">
            <li>
              <strong>Drsné ER</strong> – s ribozomy, syntéza bílkovin.
            </li>
            <li>
              <strong>Hladké ER</strong> – syntéza lipidů, detoxikace, zásobárna Ca²⁺.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Golgiho aparát</h2>
          <div className="pageBlock">
            Golgiho aparát upravuje, třídí a balí bílkoviny a lipidy určené k transportu v buňce
            nebo mimo buňku.
          </div>

          <ul className="pageList">
            <li>Navazuje na endoplazmatické retikulum.</li>
            <li>Podílí se na sekreci látek.</li>
            <li>Vznikají zde sekreční váčky.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Lysozomy</h2>
          <div className="pageBlock">
            Lysozomy jsou váčky obsahující trávicí enzymy. Zajišťují vnitrobuněčné trávení
            a rozklad poškozených struktur.
          </div>

          <ul className="pageList">
            <li>Obsahují hydrolytické enzymy.</li>
            <li>Podílejí se na autofagii.</li>
            <li>Chrání buňku před nahromaděním odpadu.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Ribozomy</h2>
          <div className="pageBlock">
            Ribozomy jsou nemembránové struktury, na kterých probíhá syntéza bílkovin.
          </div>

          <ul className="pageList">
            <li>Mohou být volné v cytoplazmě.</li>
            <li>Nebo vázané na drsné endoplazmatické retikulum.</li>
          </ul>
        </div>

        <div className="card">
          <img src={img} alt="Stavba lidské buňky" className="img" />
        </div>

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Co je buňka a proč je považována za základní jednotku těla?</li>
            <li>Jaká je funkce buněčné membrány?</li>
            <li>Jakou roli má buněčné jádro?</li>
            <li>Proč jsou mitochondrie označovány jako energetická centra?</li>
            <li>Jaký je rozdíl mezi drsným a hladkým endoplazmatickým retikulem?</li>
            <li>Jaká je funkce Golgiho aparátu?</li>
            <li>Jaký význam mají lysozomy?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
