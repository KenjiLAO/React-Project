function TekkenCharacter(props) {

    return (
        <div>
            {props.items.map((character) => {
                return (
                    <div>
                        <h2>Character FirstName: {character.characterFirstName}</h2>
                        <h2>Character lastname: {character.characterLastName}</h2>
                        <h2>Character gender: {character.gender}</h2>
                        <h2>MoveList: {character.moveList}</h2>

                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default TekkenCharacter;