import { Navbar as BSNavbar, Nav} from "react-bootstrap";
import Link from "next/link"

import "./navbar.css";

export const Navbar = () => (
  <BSNavbar variant="dark">

    <Link href="/">
      <BSNavbar.Brand>
        <span style={{ color: 'white'}}>Hack</span>Aspergers
      </BSNavbar.Brand>
    </Link>
  </BSNavbar>
)