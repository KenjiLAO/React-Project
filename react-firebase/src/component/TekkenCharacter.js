import { Link } from "react-router-dom";
import { useState } from "react";

function TekkenCharacter(props) {
    const [list, updateList] = useState(props);

    const handleRemoveItem = e => {
        const name = e.target.getAttribute("characterFirstName")
        console.log(name)
        updateList(list.items.filter(item => item.characterFirstName !== name));
    }
  

    return (
        <>
            <div>Tekken character</div>
            <div>
                {props.items.map((character) => {
                    return (
                        <>
                            <div>
                                <h2>Character Firstname: {character.characterFirstName}</h2>
                                <h2>Character lastname: {character.characterLastName}</h2>
                                <h2>Character gender: {character.gender}</h2>
                                <h2>MoveList: {character.moveList}</h2>
                                <button onClick={handleRemoveItem}>x </button>
                            </div>
                        </>
                    );
                })}
            </div>

            <Link to="AddCharacter">Add a new character</Link>
        </>

    );
}

export default TekkenCharacter;