import { Navbar as BSNavbar, Nav} from "react-bootstrap";
import Link from "next/link"

import "./navbar.css";

export const Navbar = () => (
  <BSNavbar expand="md" variant="dark">

    <Link href="/">
      <BSNavbar.Brand>
        <span style={{ color: 'white'}}>Hack</span>Aspergers
      </BSNavbar.Brand>
    </Link>
    <BSNavbar.Toggle />
    <BSNavbar.Collapse>
      <Nav>
        <Nav.Item>
          <Link passHref href="/latest-post">
            <Nav.Link active>Home</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link passHref href="/latest-post">
            <Nav.Link active>Latest Post</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link passHref href="/latest-post">
            <Nav.Link active>Archives</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link passHref href="/latest-post">
            <Nav.Link active>About The Author</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    </BSNavbar.Collapse>
  </BSNavbar>
)