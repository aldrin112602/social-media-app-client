const NavBar = ({ button }) => {
  return (
    <div
      style={{ backgroundColor: "#223" }}
      className="container-fluid p-3 d-flex align-items-center justify-content-between border-bottom border-primary"
    >
      <div className="d-flex align-items-center justify-content-start">
        <img
          height="50px"
          width="50px"
          className="rounded-circle"
          src="https://cdn.dribbble.com/users/1139587/screenshots/14727882/media/d8bf906f70115d4af55f4f265349780c.png?compress=1&resize=400x300&vertical=top"
          alt="logo"
        />
        <header className="text-white" style={{ fontSize: "25px" }}>
          &nbsp;&nbsp;Rumble
        </header>
      </div>
      <div className="d-flex align-items-center justify-content-end">
        {button}
      </div>
    </div>
  );
};

export default NavBar;
