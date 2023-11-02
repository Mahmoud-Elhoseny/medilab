import React, { useState } from 'react'
import SmallNav from './SmallNav'
import NavBar from './NavBar.js'

const Header = () => {
    const [active, setActive] = useState(false)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 120) {
            setActive(true)
        } else {
            setActive(false)
        }
    })
    return (
        <div >
            <SmallNav active={active} />
            <NavBar active={active} />
        </div>
    )
}

export default Header