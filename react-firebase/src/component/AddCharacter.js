import Form from "./Form";

const AddCharacter = props => {

    const saveCharacterDataHandler = (enteredExpenseData) => {
        const Data = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddCharacter(Data);
    };

    return (
        <div>
            <Form
                onSaveExpenseData={saveCharacterDataHandler}
            />
        </div>
    );
}

export default AddCharacter;