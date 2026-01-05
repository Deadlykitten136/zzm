import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function PoraneniJednotlivychCastiTela() {
  return (
    <PageLayout
      title="Poranění jednotlivých částí těla (hlava, páteř, hrudník, břicho)"
      lead="V mechanických poraněních jde o minimalizaci pohybu, sterilní krytí a včasné volání 155. Některé rány se cíleně NEUZAVÍRAJÍ."
      checklist={[
        "Hlava: minimální manipulace; krvácení z uší neucpávat",
        "Páteř: minimální manipulace; šetrný transport jen když hrozí nebezpečí",
        "Břicho: vyhřezlé střevo netlačit zpět, sterilně navlhčeně krýt",
        "Bodná rána s nožem: nikdy nevytahovat, fixovat",
        "Otevřený hrudník: ránu nepřekrývat, ponechat komunikaci s okolím; preferovat polosed"
      ]}
      summary={
        <div className="pageSummary">
          <strong>Hlava:</strong> neucpávat krvácení z uší. <strong>Páteř:</strong> co nejméně hýbat.
          <strong>Břicho:</strong> vyhřezlé orgány netlačit zpět, navlhčeně krýt. <strong>Nůž v ráně:</strong> nevytahovat – fixovat.
          <strong>Otevřený hrudník:</strong> nepřekrývat, polosed.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Poranění hlavy</h2>
      <ul className="pageList">
        <li>Příznaky mohou být: nevolnost, rozostřené vidění, bolest hlavy.</li>
        <li>S postiženým <strong>manipulujeme co nejméně</strong>.</li>
        <li>Krvácivé rány dezinfikovat a sterilně překrýt.</li>
        <li><strong>Krvácení z uší neucpáváme</strong> – necháme volně odtékat (snižujeme riziko zvýšení tlaku v nitrolebí).</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Poranění páteře</h2>
      <ul className="pageList">
        <li>Postup obdobně jako u hlavy: <strong>minimální manipulace</strong>.</li>
        <li>Při pohybu se úlomky mohou přiblížit k míše a více ji poškodit.</li>
        <li>Transport jen když hrozí nebezpečí – <strong>co nejšetrněji</strong>.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Poranění břicha (vyhřeznutí)</h2>
      <ul className="pageList">
        <li>Hrozí velké krevní ztráty a porucha životně důležitých orgánů.</li>
        <li>
          Pokud dojde k <strong>vyhřeznutí střev</strong>: <strong>nikdy netlačíme orgány zpět</strong>.
        </li>
        <li>
          Přikrýt <strong>sterilním krytím navlhčeným</strong> (fyziologický roztok; nouzově navlhčená látka vodou).
        </li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Bodná rána (nůž v hrudníku/břiše)</h2>
      <ul className="pageList">
        <li><strong>Nikdy předmět nevytahujeme</strong> (funguje jako zátka).</li>
        <li>Předmět <strong>fixujeme</strong> a bráníme sekundárnímu pohybu.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Poranění hrudníku</h2>
      <ul className="pageList">
        <li>Často porucha dýchání → preferujeme <strong>polosed</strong> (komfortnější).</li>
        <li>
          Při <strong>otevřeném poranění hrudníku</strong> ránu <strong>nepřekrýváme</strong> – ponecháme volně, aby komunikovala s vnějším prostředím.
        </li>
        <li>Volat 155, sledovat vitální funkce, postup dle ABCDE.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Poznámka k tekutinám u rozsáhlých poranění</h2>
      <div className="pageSummary">
        U rozsáhlých poranění <strong>nepodáváme tekutiny</strong> – situace může vyžadovat operační řešení a v anestezii je riziko aspirace.
      </div>
    </PageLayout>
  );
}
