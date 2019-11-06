import { Navbar as BSNavbar, Nav} from "react-bootstrap";
import Link from "next/link"

export const Navbar = () => (
  <BSNavbar>

    <Link href="/">
      <BSNavbar.Brand>
          rest
      </BSNavbar.Brand>
    </Link>
  </BSNavbar>
)