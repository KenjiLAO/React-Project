import './App.css';
import { useContext, useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { findAll } from './services/tekken';
import Home from './component/Home';
import TekkenCharacter from './component/TekkenCharacter';
import { Routes, Route } from 'react-router-dom';
import AddCharacter from './component/AddCharacter';

const App = () => {

  const myCharacters = [{
    id: 0,
    characterFirstName: "e",
    characterLastName: "e",
    gender: "female",
    moveList: []
  }, {
    id: 1,
    characterFirstName: "5456",
    characterLastName: "esqbdw",
    gender: "female",
    moveList: []
  }]

  const context = useContext(myCharacters)

  const [tekkenCharacter, setTekkenCharacter] = useState(myCharacters);
  const [addCharacter, setAddCharacter] = useState(myCharacters);

  const [changeCharacter, setChangeCharacter] = useState(false);

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const fetchTekkenCharacterHandler = useCallback(async (event) => {
    setLoading(false)
    const loadedTekkenCharacter = [];

    try {
      event.preventDefault()
      const response = await findAll();
      console.log(response)

      for (const key in response) {
        loadedTekkenCharacter.push({
          id: response[key].id,
          characterFirstName: response[key].characterFirstName,
          characterLastName: response[key].characterLastName,
          gender: response[key].gender,
          moveList: response[key].moveList
        });
      }

      setTekkenCharacter(loadedTekkenCharacter);
      setChangeCharacter(true)
      console.log(changeCharacter)
      setLoading(true)
      console.log(loadedTekkenCharacter)
      console.log(tekkenCharacter)
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  }, [tekkenCharacter]);

  useEffect(() => {
    fetchTekkenCharacterHandler();
    return () => {
      console.log()
    }
  }, [fetchTekkenCharacterHandler]);

  const addCharacterHandler = (character) => {
    setAddCharacter((myCharacter) => {
      return [character, ...myCharacter];
    });
  };

  return (
    <>
      <div>
        <h2>C'est parti</h2>
        <button onClick={fetchTekkenCharacterHandler}>Pas ce bouton</button>
        {loading &&
          <p>loading...</p>
        }
      </div>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='TekkenCharacter' element={<TekkenCharacter items={addCharacter} />} />
          <Route path='TekkenCharacter/AddCharacter' element={<AddCharacter onAddCharacter={addCharacterHandler} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
