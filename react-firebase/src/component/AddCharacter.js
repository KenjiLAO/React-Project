import Form from "./Form";
import { Link } from "react-router-dom";

const AddCharacter = props => {

    const saveCharacterDataHandler = (enteredCharacterData) => {
        const Data = {
            ...enteredCharacterData,
            id: Math.random().toString(),
        };
        props.onAddCharacter(Data);
    };

    return (
        <>
            <div>
            <Form
                onSaveCharacterData={saveCharacterDataHandler}
            />
        </div>
        <div>
            <Link to="../TekkenCharacter">See all characters</Link>
        </div>
        </>
    );
}

export default AddCharacter;