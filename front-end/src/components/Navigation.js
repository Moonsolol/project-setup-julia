import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function Navigation() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/Home"
            title="Coded by Creative Tim"
            tag={Link}
          >
            Whendor
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to="/Vendors" tag={Link}>
                <i /> Vendors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Vendors" active>
                <i /> Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/EditVendorProfile" tag={Link}>
                <i /> Vendor Edit Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/UserProfile" active>
                <i /> User Profile
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/Login" tag={Link}>
                <i /> Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/VendorSignUp" tag={Link}>
                <i /> Vendor-SignUp
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/UserSignUp" tag={Link}>
                <i /> User-SignUp
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/VendorProfile" tag={Link}>
                <i /> Vendor Profile
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/software-students-fall2021/project-setup-julia"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
