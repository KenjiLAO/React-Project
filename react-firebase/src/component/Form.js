import { useState } from "react";

function Form(props) {

    const [firstNameEntered, setfirstNameEntered] = useState();
    const [lastNameEntered, setlastNameEntered] = useState();
    const [genderEntered, setGenderEntered] = useState();
    const [moveListEntered, setMoveListEntered] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        const prop = {
            id : Math.random(),
            characterFirstName : firstNameEntered,
            characterLastName : lastNameEntered,
            gender : genderEntered,
            moveList : moveListEntered
        }
        props.onSaveCharacterData(prop);
        console.log(props)
        console.log(prop)
        setfirstNameEntered('');
        setlastNameEntered('');
        setGenderEntered('');
        setMoveListEntered('');

        alert('You have submitted the form.')
    }

    const firstNameChangeHandler = (event) => {
        setfirstNameEntered(event.target.value);
    };
    
    const lastNameChangeHandler = (event) => {
        setlastNameEntered(event.target.value);
    };
    
    const genderChangeHandler = (event) => {
        setGenderEntered(event.target.value);
    };

    const moveListChangeHandler = (event) => {
        setMoveListEntered(event.target.value);
    };


    return (
        <>
            <form id="form" onSubmit={handleSubmit}>
                <label>
                    First Name :
                    <input type="text" name="firstName" value={firstNameEntered} onChange={firstNameChangeHandler}/>
                </label>
                <label>
                    Last Name :
                    <input type='text' name="lastName" value={lastNameEntered} onChange={lastNameChangeHandler}/>
                </label>
                <label>
                    Gender :
                    <input type='text' name="gender" value={genderEntered} onChange={genderChangeHandler}/>
                </label>
                <label>
                    Move list :
                    <input type='text' name="moveList" value={moveListEntered} onChange={moveListChangeHandler}/>
                </label>
                <button type="submit">Create new character</button>
            </form>
        </>
    );
}

export default Form;