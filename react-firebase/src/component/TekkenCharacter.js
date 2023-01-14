import { Link } from "react-router-dom";

function TekkenCharacter(props) {

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