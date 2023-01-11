import './App.css';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { findAll } from './services/tekken';

const App = () => {

  const [tekkenCharacter, setTekkenCharacter] = useState([]);
  const [error, setError] = useState(null);

  const testFetchHandler = () => {
    fetch('https://swapi.dev/api/people/1').then((httpResponse) => {
      console.log('reussite! ', httpResponse)
      return httpResponse.json()
    }).then((data) => {
      console.log('mes donnees ', data)
    }).catch((error) => {
      console.log('j \'ai une belle erreur', error)
    })
  }

  const fetchTekkenCharacterHandler = useCallback(async () => {
    try {
      const response = await findAll();

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedTekkenCharacter = [];

      for (const key in data) {
        loadedTekkenCharacter.push({
          id: key,
          characterFirstName: data[key].characterFirstName,
          characterLastName: data[key].characterLastName,
          gender: data[key].gender,
          moveList: data[key].moveList
        });
      }
      setTekkenCharacter(loadedTekkenCharacter);
      console.log(loadedTekkenCharacter)
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchTekkenCharacterHandler();

    return () => {
      console.log()
    }

  }, [fetchTekkenCharacterHandler]);



  return (
    <div>
      <h2>C'est parti</h2>
      <button onClick={testFetchHandler} >HTTP</button>
      <button onClick={fetchTekkenCharacterHandler} >Pas ce bouton</button>
    </div>
  );
}

export default App;
