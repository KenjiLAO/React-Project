import Form from "./Form";

const AddCharacter = props => {

    const saveCharacterDataHandler = (enteredCharacterData) => {
        const Data = {
            ...enteredCharacterData,
            id: Math.random().toString(),
        };
        props.onAddCharacter(Data);
    };

    return (
        <div>
            <Form
                onSaveCharacterData={saveCharacterDataHandler}
            />
        </div>
    );
}

export default AddCharacter;