import React, {useEffect, useState} from 'react';
import './App.scss';


function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}

function App() {

  const risti = "X"
  const nolla = "O"
  const tyhjä = " "

  const [lauta, setLauta] = useState("          ")
  const [vuoro, setVuoro] = useState(risti)
  const [teksti, setTeksti] = useState("")
  
  useEffect(() => {
    if (!peliLoppu())
      setTeksti(vuoro + " vuoro")
  }) 
 
  const lueKomento = (ruutu) => {
    if (peliLoppu())
      return
    setTeksti(vuoro + " vuoro")
    if (lauta.charAt(ruutu) === tyhjä) {
      setLauta(replaceAt(lauta, ruutu, vuoro))
      seuraavaVuoro()
    }
  }

  const peliLoppu = () => {
    if (lauta.charAt(0) === lauta.charAt(1) && lauta.charAt(1) === lauta.charAt(2)) {
      if (lauta.charAt(0) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(3) === lauta.charAt(4) && lauta.charAt(4) === lauta.charAt(5)) {
      if (lauta.charAt(3) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(6) === lauta.charAt(7) && lauta.charAt(7) === lauta.charAt(8)) {
      if (lauta.charAt(6) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(0) === lauta.charAt(3) && lauta.charAt(3) === lauta.charAt(6)) {
      if (lauta.charAt(0) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(1) === lauta.charAt(4) && lauta.charAt(4) === lauta.charAt(7)) {
      if (lauta.charAt(1) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(2) === lauta.charAt(5) && lauta.charAt(5) === lauta.charAt(8)) {
      if (lauta.charAt(2) != tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(0) === lauta.charAt(4) && lauta.charAt(4) === lauta.charAt(8)) {
      if (lauta.charAt(0) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }
    if (lauta.charAt(6) === lauta.charAt(4) && lauta.charAt(4) === lauta.charAt(2)) {
      if (lauta.charAt(6) !== tyhjä) {
        setTeksti(vuoro + " hävisi pelin")
        return true
      }
    }

    // tarkastetaan onko lauta täys
    for (let i = 0; i < 9; ++i) {
      if (lauta.charAt(i) === tyhjä)
        return false
    }
    setTeksti("tasapeli")
    return true
  }

  const seuraavaVuoro = () => {
    if (vuoro === risti)
      setVuoro(nolla)
    else
      setVuoro(risti)
  }
  
  return (
    <div>
    <div class="ticTacToe">
      <div class="column">
        <span onClick={() => lueKomento(0)} class="square">{lauta.charAt(0)}</span>
        <span onClick={() => lueKomento(1)} class="square">{lauta.charAt(1)}</span>
        <span onClick={() => lueKomento(2)} class="square">{lauta.charAt(2)}</span>
      </div>
      <div class="column">
        <span onClick={() => lueKomento(3)} class="square">{lauta.charAt(3)}</span>
        <span onClick={() => lueKomento(4)} class="square">{lauta.charAt(4)}</span>
        <span onClick={() => lueKomento(5)} class="square">{lauta.charAt(5)}</span>
      </div>
      <div class="column">
        <span onClick={() => lueKomento(6)} class="square">{lauta.charAt(6)}</span>
        <span onClick={() => lueKomento(7)} class="square">{lauta.charAt(7)}</span>
        <span onClick={() => lueKomento(8)} class="square">{lauta.charAt(8)}</span>
      </div>
    </div>
    <div>{teksti}</div>
    </div>
  );
}

export default App;
