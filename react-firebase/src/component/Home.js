import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Tekken characters movelist</h1>
        <Link to="TekkenCharacter">Click here to see Tekken Characters</Link><br></br>
        <Link to="TekkenCharacter/AddCharacter">Click here to add a Tekken Character</Link>
      </div>
    );
  }
  
  export default Home;