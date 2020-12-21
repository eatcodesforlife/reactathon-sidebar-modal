import React from 'react'
import { FaTimes} from 'react-icons/fa'
import { links, social } from '../data'
import logo from '../logo.svg'
import { useGlobalContext } from '../context'

const Sidebar = () => {

    const { isSideBarOpen, openSideBar } = useGlobalContext()

    return (
        <aside className={`sidebar ${isSideBarOpen && "show-sidebar"}`}>
            <div className="sidebar-header">
                <img src={logo} alt="logo" className='logo'/>
                <button className='close-btn' onClick={() => openSideBar()}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {
                    links.map(({id, url, text, icon}) => (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <ul className="social-icons">
                {
                    social.map(({id, url, icon}) => (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default Sidebar
