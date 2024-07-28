import { faFacebookMessenger, faFacebookSquare, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
        <p>Real Estate Broker Agency</p>
        <div className="logos">
        <Link href={"#"} ><FontAwesomeIcon className="icn facebook" icon={faFacebookSquare}/></Link>
        <Link href={"#"} ><FontAwesomeIcon className="icn messenger" icon={faFacebookMessenger}/></Link>
        <Link href={"#"} ><FontAwesomeIcon className="icn twitter" icon={faTwitter}/></Link>
        <Link href={"#"} ><FontAwesomeIcon className="icn instgram" icon={faInstagram}/></Link>
        <Link href={"#"} ><FontAwesomeIcon className="icn telegram" icon={faTelegram}/></Link>
        <Link href={"#"} ><FontAwesomeIcon className="icn phone" icon={faMobilePhone}/></Link>
        </div>
        <p>Privacy & Security</p>
        <p>All rights reserved Copyrights &copy;</p>
        <p>Created By Adham Sherbiny</p>  
        <p>V 0.0.1 2024</p>
    </div>
  )
}
