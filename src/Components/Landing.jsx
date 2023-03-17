import NavBar from "./NavBar";
import Footer from "./Footer";

const Landing = ({ setSignIn, setSignUp }) => {
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

  return (
    <>
      <NavBar button={Buttons} />
      <div style={{ backgroundColor: "#5000ca" }} className="row py-3 px-4">
        <div className="col-lg d-flex align-items-center justify-content-center">
          <h1
            style={{
              textShadow: "2px 2px 20px rgba(200, 120, 225, 1)",
              fontSize: "3.7rem",
              fontWeight: "bold",
            }}
            className="text-white py-5 text-center"
          >
            Interactive Chat & Streaming
          </h1>
        </div>
        <div className="col-lg d-flex align-items-center justify-content-center">
          <img
            style={{ width: "100%" }}
            className="rounded"
            src="https://www.mumble2.dev/images/Group%2042%20(3).png"
            alt=""
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#5000ca" }} className="pt-3 pb-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,64L30,80C60,96,120,128,180,122.7C240,117,300,75,360,85.3C420,96,480,160,540,176C600,192,660,160,720,165.3C780,171,840,213,900,229.3C960,245,1020,235,1080,202.7C1140,171,1200,117,1260,122.7C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
