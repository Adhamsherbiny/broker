import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./nav.css"
export default function Nav() {
  return (
    <nav>
        <div className="logo">
            <FontAwesomeIcon className="logo-pic" icon={faHome}/>
            <p>Real Estate</p>
        </div>
        <ul>
            <li>
                <Link href={"#"}>Home</Link>
            </li>
            <li>
                <Link href={"#"}>Sell</Link>
            </li>
            <li>
                <Link href={"#"}>Rent</Link>
            </li>
            <li>
                <Link href={"#"}>About Us</Link>
            </li>
        </ul>
    </nav>
  )
}
