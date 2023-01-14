import { Link } from "react-router-dom";
import { useState } from "react";

function TekkenCharacter(props) {
    const [list, setList] = useState(props);

    const handleRemoveItem = (Id) => {
        const maList = list.items.filter((character) => { return character.id !== Id })
        console.log(maList)
        console.log(list.items)

        setList({...list.items, ...maList});

        alert('button clicked')
        console.log(Id)
        console.log(list)
    }

    return (
        <>
            <div>Tekken character</div>
            <div>
                {list.items.map((myCharacter) => {
                    return (
                        <>
                            <div>
                                <h2>Character Firstname: {myCharacter.characterFirstName}</h2>
                                <h2>Character lastname: {myCharacter.characterLastName}</h2>
                                <h2>Character gender: {myCharacter.gender}</h2>
                                <h2>MoveList: {myCharacter.moveList}</h2>
                                <button onClick={() => handleRemoveItem(myCharacter.id)}> x </button>
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