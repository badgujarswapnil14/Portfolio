import styles from '../../css/navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { switchViewHandler } from '../NavigationHandler';
import Drawer from './Drawer'
import DarkModeButton from './DarkModeButton';
import { useState } from 'react';
import { toggleDrawer } from '../store/dataSlice'

const Navbar = () => {

    // const [isOpen, toggleDrawer] = useState(false)

    const darkMode = useSelector((state) => state.navstate.darkMode)
    const isOpen = useSelector((state) => state.navstate.isOpen)
    const navState = useSelector((state) => state.navstate.data)
    const dispatch = useDispatch()

    const toggleHamburger = (state = null) => {
        // console.log(!isOpen)
        var stateTo = state != null ? state : !isOpen
        dispatch(toggleDrawer(stateTo))
    }

    const switchNav = (nav) => {
        switchViewHandler(nav, navState, dispatch, toggleHamburger)
    }

    // console.log('navState:::', navState, isOpen)
    return (
        <>
            <div className={`${darkMode ? styles.darkMode : ''} ${styles.navWrapper} ${!navState.intro ? styles.slateTheme : ''} ${isOpen ? styles.whiteTheme : ''}`}>
                <div
                    className={styles.brand}

                >
                    <Link to="/portfolio" onClick={() => switchNav('intro')}><span>Swapnil</span></Link>
                </div>
                    <div className={styles.nav_links}>
                        <Link to="/experience" onClick={() => switchNav('exp')}><span>Experience</span></Link>
                    </div>
                <div className={styles.nav_links}>
                    <Link to="/education" onClick={() => switchNav('edu')}><span>Education</span></Link>
                </div>
                <div className={styles.nav_links}>
                    <Link to="/projects" onClick={() => switchNav('projects')}><span>Projects</span></Link>
                </div>
                <DarkModeButton style={styles.nav_links} onSwitch={() => {}} />
                <div 
                    onClick={() => toggleHamburger()}
                    className={isOpen ? `${styles.hamburger}  ${styles.toggle}` : styles.hamburger }
                >
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </div>
            <Drawer isOpen={isOpen} switchView={switchNav} closeDrawer={() => toggleDrawer(false)} />
        </>
    );
}


export default Navbar