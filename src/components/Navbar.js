import React from "react"
import ReactLogo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={ReactLogo} className="nav--icon" alt ="React logo" /> {/* HARD CODING relative path of image creates issues when bundled with webpack.Ex img src = "../images/react-icon-small.png" */}
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}