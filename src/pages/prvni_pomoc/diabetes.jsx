import PageLayout from "../../components/PageLayout.jsx";
import prvniPomocFlow from "../../data/flow/prvni_pomoc.json";

export default function Diabetes() {
  return (
    <PageLayout
      title="Diabetes: hypo vs hyper (a co dělat)"
      lead="V první pomoci řešíš hlavně hypo (rychlejší, nebezpečná). Když si nejsi jistá, řeš to jako hypoglykémii."
      checklist={[
        "Znát hypo příznaky + co podat (cukr pod jazyk; čokoláda není ideální)",
        "Vědět: nic ústy při poruše vědomí (aspirace)",
        "Znát hyper příznaky (acetonový dech, oschlé sliznice) + že vyžaduje hospitalizaci"
      ]}
      summary={
        <div className="pageSummary">
          <strong>Hypo:</strong> studený pot, rychlý tep, zmatenost („jako opilý“). Nejlépe <strong>cukr pod jazyk</strong>.
          Čokoláda není ideální. <strong>Při poruše vědomí nic ústy</strong>. Když nevíš hypo/hyper → řeš jako hypo.
          <br />
          <strong>Hyper:</strong> pozvolnější, <strong>acetonový dech</strong>, oschlé sliznice, zmatenost → komfort + lze tekutiny, ale{" "}
          <strong>hospitalizace</strong>.
        </div>
      }
      flow={prvniPomocFlow}
      moduleId="prvni_pomoc"
    >
      <h2 className="pageH2">Hypoglykémie (nízký cukr) – typicky rychlá</h2>
      <ul className="pageList">
        <li>Zmatenost, může působit „opile“.</li>
        <li>Studený pot, rychlý tep, poruchy vědomí až bezvědomí.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Co dělat při hypu</h2>
      <ul className="pageList">
        <li>
          Je při vědomí? → doplň cukr: <strong>cukr pod jazyk</strong> (nejlépe). Když není, sladký nápoj nebo ovoce.
        </li>
        <li>
          <strong>Čokoláda není ideální</strong> (tuky brzdí rychlé vstřebání cukrů).
        </li>
        <li>
          Při výrazném zhoršení vědomí / bezvědomí: <strong>nic ústy</strong> (riziko aspirace).
        </li>
        <li>
          Pokud diabetik má <strong>GlucaGen</strong>: dle návodu – rozředit, natáhnout, píchnout <strong>kolmo do svalu</strong>, preferované{" "}
          <strong>stehno</strong>.
        </li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Hyperglykémie (vysoký cukr) – typicky pozvolnější</h2>
      <ul className="pageList">
        <li>Nadměrné močení, nevolnost, oschlé sliznice, zmatenost.</li>
        <li><strong>Acetonový dech</strong>, poruchy vědomí až bezvědomí.</li>
        <li>V první pomoci omezené možnosti: komfort, lze poskytnout tekutiny, ale stav vyžaduje <strong>hospitalizaci</strong>.</li>
      </ul>

      <h2 className="pageH2" style={{ marginTop: 12 }}>Když si nejsi jistá (hypo vs hyper)</h2>
      <ul className="pageList">
        <li>Pokud nemáš glukometr nebo výsledek: <strong>řeš jako hypoglykémii</strong>.</li>
      </ul>
    </PageLayout>
  );
}
