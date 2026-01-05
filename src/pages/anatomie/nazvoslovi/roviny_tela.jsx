import PageLayout from "../../../components/PageLayout.jsx";
import img from "../../../assets/anatomie/nazvoslovi/roviny_tela.png";

export default function RovinyTela() {
  return (
    <PageLayout
      title="Základní roviny těla"
      lead="Roviny těla jsou pomyslné řezy, které se používají k popisu polohy orgánů, struktur a pohybů."
    >
      <div className="pageCard">

        <div className="card">
          <h2 className="pageH2">Sagitální rovina</h2>
          <div className="pageBlock">
            Sagitální rovina dělí tělo na <strong>pravou</strong> a <strong>levou</strong> část.
          </div>
          <ul className="pageList">
            <li>
              <strong>Mediánní (střední) sagitální rovina</strong> prochází středem těla
            </li>
            <li>
              <strong>Parasagitální roviny</strong> probíhají rovnoběžně se střední rovinou
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="pageH2">Frontální (koronální) rovina</h2>
          <div className="pageBlock">
            Frontální rovina dělí tělo na <strong>přední (ventrální)</strong> a
            <strong> zadní (dorzální)</strong> část.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Transverzální (horizontální) rovina</h2>
          <div className="pageBlock">
            Transverzální rovina dělí tělo na <strong>horní (kraniální)</strong> a
            <strong> dolní (kaudální)</strong> část.
          </div>
        </div>

        <div className="card">
          <h2 className="pageH2">Schéma rovin těla</h2>
          <img
            src={img}
            alt="Základní roviny těla – sagitální, frontální a transverzální"
            className="img"
          />
        </div>

      </div>
    </PageLayout>
  );
}
