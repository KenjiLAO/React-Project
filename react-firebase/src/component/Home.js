import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>This is the home page</h1>
        <Link to="TekkenCharacter">Click here to go to Tekken Character</Link>
      </div>
    );
  }
  
  export default Home;