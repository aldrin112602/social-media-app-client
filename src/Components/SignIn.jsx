import NavBar from "./NavBar";
import img1 from "../images/img1.png";
import CopyRight from "./CopyRight";
import { useState } from "react";

const SignIn = ({ setSignIn, setSignUp, socket }) => {
  const [inputs, setInputs] = useState({});

  const SignIn = () => {
    setSignUp(false);
    setSignIn(true);
  };

  const SignUp = () => {
    setSignUp(true);
    setSignIn(false);
  };

  const Buttons = (
    <>
      <button
        className="btn text-white"
        style={{ backgroundColor: "#000b76" }}
        onClick={SignIn}
      >
        Sign In
      </button>{" "}
      &nbsp;&nbsp;
      <button className="btn btn-primary" onClick={SignUp}>
        Sign Up
      </button>
    </>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((currentObj) => {
      return { ...currentObj, [name]: value };
    });
  };

  //handle form
  const handleSignIn = (e) => {
    e.preventDefault();

    //Send signIn data to backend
    socket.emit("signIn", inputs);
  };

  return (
    <>
      <NavBar button={Buttons} />
      <div
        style={{ backgroundColor: "#5000ca" }}
        className="d-flex  align-items-center px-4 justify-content-center py-5 "
      >
        <div className="row bg-white shadow-lg rounded overflow-hidden">
          <img
            className="col"
            style={{ maxWidth: "600px" }}
            src={img1}
            width="100%"
            height="100%"
            alt=""
          />
          <form className="col container p-5 text-dark" onSubmit={handleSignIn}>
            <br />
            <h4>Sign In</h4>
            <br />
            <div className="my-2">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                required
                onChange={handleChange}
                placeholder="Enter username"
                id="username"
                name="username"
                type="text"
                className="form-control"
              />
            </div>
            <div className="my-2">
              <label htmlFor="password" className="form-label">
                Passwod
              </label>
              <input
                required
                onChange={handleChange}
                placeholder="Enter password"
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
            </div>
            <div className="my-4 d-grid">
              <button className="btn btn-primary" type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ backgroundColor: "#5000ca" }} className="pb-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,64L30,80C60,96,120,128,180,122.7C240,117,300,75,360,85.3C420,96,480,160,540,176C600,192,660,160,720,165.3C780,171,840,213,900,229.3C960,245,1020,235,1080,202.7C1140,171,1200,117,1260,122.7C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <CopyRight />
      </div>
    </>
  );
};

export default SignIn;
