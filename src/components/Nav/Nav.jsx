import React, { useEffect, useState } from 'react'
import '../Nav/Nav.scss'
import { NavLink } from 'react-router-dom'
import img1 from "../../assets/logo.png"

const Nav = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 10) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <>
            <nav className={`NAV ${show && 'nav--scroll'}`}>
                <div className="container nav--container">
                    <NavLink className='link--home' to="/">
                        <img src={img1} alt="" />
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to=''>
                                О КОМПАНИИ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                КАРЬЕРА
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                ПРОЕКТЫ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                ПРОДУКЦИЯ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                ПОРТФОЛИО
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                НОВОСТИ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                КОНТАКТЫ
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav