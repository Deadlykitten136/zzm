import PageLayout from "../../../components/PageLayout.jsx";

export default function Tkane() {
  return (
    <PageLayout
      title="Tkáně"
      lead="Tkáně jsou soubory buněk stejného původu, stavby a funkce. Společně s mezibuněčnou hmotou tvoří základní stavební jednotky orgánů."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Základní charakteristika tkání</h2>
          <div className="pageBlock">
            Tkáně vznikají diferenciací buněk během vývoje organismu. Buňky v rámci jedné tkáně
            spolu funkčně souvisejí a jsou specializované na určitou činnost.
          </div>

          <ul className="pageList">
            <li>Buňky mají podobnou stavbu a funkci.</li>
            <li>Tkáň může obsahovat mezibuněčnou hmotu.</li>
            <li>Z tkání se skládají orgány.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Základní rozdělení tkání</h2>
          <div className="pageBlock">
            V lidském těle rozlišujeme čtyři základní typy tkání. Toto dělení vychází ze stavby,
            funkce a embryonálního původu buněk.
          </div>

          <ul className="pageList">
            <li>
              <strong>Epiteliální tkáň</strong>
            </li>
            <li>
              <strong>Pojivová a podpůrná tkáň</strong>
            </li>
            <li>
              <strong>Svalová tkáň</strong>
            </li>
            <li>
              <strong>Nervová tkáň</strong>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Epiteliální tkáň</h2>
          <div className="pageBlock">
            Epiteliální tkáň (epitel) kryje povrchy těla, vystýlá dutiny a tvoří žlázy. Buňky epitelu
            jsou těsně u sebe a obsahují minimum mezibuněčné hmoty.
          </div>

          <ul className="pageList">
            <li>Krycí epitel – povrch těla a orgánů.</li>
            <li>Žlázový epitel – tvorba a sekrece látek.</li>
            <li>Smyslový epitel – podíl na vnímání podnětů.</li>
            <li>Buňky jsou pevně spojeny.</li>
            <li>Epitel nemá cévní zásobení.</li>
          </ul>

          <div className="pageSummary">
            Epitel je vyživován difuzí z podkladové pojivové tkáně.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Pojivová a podpůrná tkáň</h2>
          <div className="pageBlock">
            Pojivová a podpůrná tkáň zajišťuje oporu, spojení a výživu ostatních tkání. Typickým znakem
            je přítomnost mezibuněčné hmoty.
          </div>

          <ul className="pageList">
            <li>Vazivo – řídké a tuhé.</li>
            <li>Tuková tkáň – zásobní a izolační funkce.</li>
            <li>Chrupavka – pružná opora.</li>
            <li>Kostní tkáň – pevná opora a ochrana.</li>
            <li>Krev – specializovaná pojivová tkáň.</li>
          </ul>

          <div className="pageSummary">
            Množství a složení mezibuněčné hmoty určuje vlastnosti pojivové tkáně.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Svalová tkáň</h2>
          <div className="pageBlock">
            Svalová tkáň je specializovaná na stah (kontrakci) a umožňuje pohyb těla i vnitřních
            orgánů.
          </div>

          <ul className="pageList">
            <li>Příčně pruhovaná svalovina – kosterní svaly.</li>
            <li>Hladká svalovina – stěny orgánů.</li>
            <li>Srdeční svalovina – myokard.</li>
            <li>Buňky mají schopnost aktivní kontrakce.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Nervová tkáň</h2>
          <div className="pageBlock">
            Nervová tkáň zajišťuje příjem, zpracování a vedení informací v organismu. Je základem
            nervové soustavy.
          </div>

          <ul className="pageList">
            <li>Neuron – základní nervová buňka.</li>
            <li>Neuroglie – podpůrné a ochranné buňky.</li>
            <li>Schopnost dráždivosti a vodivosti.</li>
          </ul>

          <div className="pageSummary">
            Nervová tkáň má velmi omezenou schopnost regenerace.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Co je tkáň a jak vzniká?</li>
            <li>Jaké jsou čtyři základní typy tkání?</li>
            <li>Jaké jsou hlavní znaky epiteliální tkáně?</li>
            <li>Proč má pojivová tkáň mezibuněčnou hmotu?</li>
            <li>Jaké typy svalové tkáně rozlišujeme?</li>
            <li>Jaké buňky tvoří nervovou tkáň?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
