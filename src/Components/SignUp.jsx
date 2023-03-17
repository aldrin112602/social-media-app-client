import NavBar from "./NavBar";
import CopyRight from "./CopyRight";
import img2 from "../images/img2.png";
import { useState, useEffect } from "react";

const SignUp = ({ setSignIn, setSignUp, socket }) => {
  const [inputs, setInputs] = useState({});
  const [msg, setMsg] = useState(null);

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
  const handleSignUp = (e) => {
    e.preventDefault();
    //Send signUp data to backend
    socket.emit("signUp", inputs);
  };
  useEffect(() => {
    socket.on("signUp", (res) => {
      setMsg(res);
    });
  });

  return (
    <>
      <NavBar button={Buttons} />
      <div
        style={{ backgroundColor: "#5000ca" }}
        className="d-flex align-items-center px-3 justify-content-center pt-5 pl-5 pr-5"
      >
        <div className="row bg-white container shadow-lg rounded">
          <img
            className="col my-auto top-0 bottom-0"
            src={img2}
            style={{ maxWidth: "600px" }}
            width="100%"
            height="100%"
            alt=""
          />
          <form
            className="col container p-5 mt-3 text-dark"
            onSubmit={handleSignUp}
          >
            <h4>Sign Up</h4>
            <br />
            {msg && (
              <div
                className={
                  msg.type === "error"
                    ? "alert alert-warning alert-dismissible fade show"
                    : "alert alert-success alert-dismissible fade show"
                }
                role="alert"
              >
                <strong> {msg.message} </strong>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            <div className="my-2">
              <label htmlFor="fullname" className="form-label">
                Full-name
              </label>
              <input
                onChange={handleChange}
                required
                placeholder="Enter full-name"
                id="username"
                name="fullname"
                type="text"
                className="form-control"
              />
            </div>
            <div className="my-2">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                onChange={handleChange}
                required
                name="gender"
                id="gender"
                className="form-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onChange={handleChange}
                required
                placeholder="Enter email"
                id="email"
                name="email"
                type="email"
                className="form-control"
              />
            </div>
            <div className="my-2">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                onChange={handleChange}
                required
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
                onChange={handleChange}
                required
                placeholder="Enter password"
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
            </div>
            <div className="my-4 d-grid">
              <button className="btn btn-primary" type="submit">
                Sign Up
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

export default SignUp;
