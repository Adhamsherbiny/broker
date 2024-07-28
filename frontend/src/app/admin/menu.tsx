'use client'
import { useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./adminpanel.css"

export default function Menu() {
    const menu = useRef<any>();
    function menutoggle(){
        if(menu.current.style.display == "block"){
            menu.current.style.display = "none"
        } else{
            menu.current.style.display = "block"
        }
    }
    return (
        <div className="admin-panel">
            <FontAwesomeIcon className="menu-icn" icon={faBars} onClick={menutoggle} />
            <ul className="menu" ref={menu}>
                <li>
                    <Link href={"#"} className="tab" >Add Appartment to Rent</Link>
                </li>
                <li>
                    <Link href={"#"} className="tab" >Add Appartment to Sell</Link>
                </li>

                <li>
                    <Link href={"#"} className="tab" >Create Admin User</Link>
                </li>
                <li>
                    <Link href={"#"} className="tab" >Show Admin Users</Link>
                </li>
            </ul>
        </div>
    )
}
