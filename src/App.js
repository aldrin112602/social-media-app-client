import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
//import { nanoid } from 'nanoid'
//import Components
import Landing from "./Components/Landing";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const socket = io.connect("http://localhost:5000");

// unique_id
// const user_id = nanoid(5)

//main componet
const App = () => {
  const [signin, setSignin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      {!signin && !signUp ? (
        <Landing setSignIn={setSignin} setSignUp={setSignUp} />
      ) : !signUp && signin ? (
        <SignIn socket={socket} setSignIn={setSignin} setSignUp={setSignUp} />
      ) : (
        <SignUp socket={socket} setSignIn={setSignin} setSignUp={setSignUp} />
      )}
    </>
  );
};

export default App;
