import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";

import NavBar from "./components/navbar";
import TunesList from "./components/TunesList";
import Panier from "./components/Panier";
import Buy from "./components/Buy";
import Bought from "./components/Bought";

function App() {
  const [tunes, setTunes] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showPanier, setShowPanier] = useState(false);
  const [showBuy, setShowBuy] = useState(false);
  const [showBought, setShowBought] = useState(false);
  const [nom, setNom] = useState("");

  const myTunes = useSelector((state) => state.panier.tunes);
  const total = useSelector((state) => state.panier.total);

  const getTunes = (searchValue) => {
    axios
      .get(`https://itunes.apple.com/search?term=${searchValue}`)
      .then((response) => {
        console.table(response.data.results[0]);
        setTunes(response.data.results);
        setShowPanier(false);
        setShowResults(true);
      });
  };

  const buyer = (name) => {
    setNom(name);
  };

  return (
    <div className="App">
      <NavBar
        getTunes={getTunes}
        showPanier={setShowPanier}
        showResults={setShowResults}
      />
      {tunes && showResults && <TunesList tunes={tunes} />}
      {showPanier && (
        <Panier
          tunes={myTunes}
          open={showPanier}
          showResults={setShowResults}
          showPanier={setShowPanier}
          showBuy={setShowBuy}
          total={total}
        />
      )}
      {showBuy && (
        <Buy
          tunes={myTunes}
          total={total}
          showBought={setShowBought}
          buyer={buyer}
        />
      )}
      {showBought && <Bought nom={nom} />}
    </div>
  );
}

export default App;
