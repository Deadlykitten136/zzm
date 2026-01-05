import PageLayout from "../../../components/PageLayout.jsx";

export default function OrientacniCaryHrudniku() {
  return (
    <PageLayout
      title="Orientační čáry hrudníku"
      lead="Orientační čáry hrudníku jsou pomyslné svislé linie na povrchu těla, které slouží k přesnému popisu polohy orgánů a klinických nálezů."
    >
      <div className="pageCard">
        <div className="card">
          <h2 className="pageH2">Proč orientační čáry používáme</h2>
          <div className="pageBlock">
            Hrudník je plošně rozsáhlý a tvarově proměnlivý. Orientační čáry umožňují popsat polohu
            nálezu jednotně a srozumitelně, bez nutnosti složitého měření.
          </div>

          <ul className="pageList">
            <li>Usnadňují popis nálezů při vyšetření plic a srdce.</li>
            <li>Používají se při poslechu, poklepu i zobrazovacích metodách.</li>
            <li>Kombinují se s označením mezižeberního prostoru.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Přední orientační čáry</h2>
          <div className="pageBlock">
            Přední čáry se vztahují k přední stěně hrudníku a k hrudní kosti a klíčním kostem.
            Jejich názvy vycházejí z anatomických struktur, podle kterých jsou vedeny.
          </div>

          <ul className="pageList">
            <li>
              <strong>Přední střední čára (linea mediana anterior)</strong> – probíhá středem těla
              přes sternum; odpovídá střední rovině těla.
            </li>
            <li>
              <strong>Parasternální čára (linea parasternalis)</strong> – probíhá těsně po obou
              stranách sterna; název znamená „vedle sterna“.
            </li>
            <li>
              <strong>Medioklavikulární čára (linea medioclavicularis)</strong> – probíhá středem
              klíční kosti směrem dolů na hrudník.
            </li>
          </ul>

          <div className="pageSummary">
            Praktická orientace: u mužů prochází linea medioclavicularis přibližně přes bradavku,
            což se často využívá jako orientační pomůcka.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Axilární orientační čáry</h2>
          <div className="pageBlock">
            Axilární čáry souvisejí s axilou (lat. axilla), tedy s podpažím. Procházejí oblastí
            podpaží a používají se hlavně při vyšetření postranních částí hrudníku.
          </div>

          <ul className="pageList">
            <li>
              <strong>Přední axilární čára (linea axillaris anterior)</strong> – probíhá předním
              okrajem axily (podpaží).
            </li>
            <li>
              <strong>Zadní axilární čára (linea axillaris posterior)</strong> – probíhá zadním
              okrajem axily.
            </li>
          </ul>

          <div className="pageSummary">
            Jednoduše: axilární čáry „jdou podpažím“, a proto se jmenují axilární.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Zadní orientační čáry</h2>
          <div className="pageBlock">
            Zadní čáry se vztahují k zadní stěně hrudníku a k páteři. Slouží hlavně při vyšetření
            zadních částí plic.
          </div>

          <ul className="pageList">
            <li>
              <strong>Zadní střední čára (linea mediana posterior)</strong> – probíhá středem zad nad
              trnovými výběžky obratlů.
            </li>
          </ul>

          <div className="pageSummary">
            Zadní střední čára odpovídá průběhu páteře a je zadním ekvivalentem přední střední čáry.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Otázky pro procvičení</h2>
          <ul className="pageList">
            <li>Co jsou orientační čáry hrudníku a k čemu slouží?</li>
            <li>Kudy probíhá přední střední čára?</li>
            <li>Proč se parasternální čára takto jmenuje?</li>
            <li>Kudy probíhá medioklavikulární čára a jakou praktickou pomůcku lze použít u mužů?</li>
            <li>Co znamená pojem axila a kudy vedou axilární čáry?</li>
            <li>Kudy probíhá zadní střední čára?</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
