import { Link } from "react-router-dom";
import { useState } from "react";

function TekkenCharacter(props) {
    const [list, setList] = useState(props);

    const handleRemoveItem = (Id) => {
        if (list.items) {
            setList(list.items.filter((character) => { return character.id !== Id }))
            alert('button clicked')
        }
        if (list) {
            setList(list.filter((character) => { return character.id !== Id }))
            alert('button clicked')
        }
        
        console.log(list.items)
        console.log(list)
        console.log(Id)
        
    }

    let itemToRender;
    if (list.items) {
        console.log(list)
        console.log(itemToRender)
        itemToRender = list.items.map((myCharacter) => {
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
        })
        console.log(itemToRender)
    }
    else {
        console.log(itemToRender)
        console.log(list)
        itemToRender = list.map((myCharacter) => {
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
        })
        console.log(itemToRender)
    }

    return (
        <>
            <div>Tekken character</div>
            <div>
                {itemToRender}
            </div>

            <Link to="AddCharacter">Add a new character</Link>
        </>

    );
}

export default TekkenCharacter;