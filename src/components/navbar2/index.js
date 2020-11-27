import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import styles from './index.module.scss';

// import { ReactComponent as ProfileIcon } from './profile-icon.svg';
// import { ReactComponent as ShoppingCart } from './shopping-cart.svg';
import { ReactComponent as Logo } from './logo.svg';


import useWindowSize from '../../hooks/useWindowSize';
import yaris2020 from '../register/yaris2020.svg';
import YarisAtiv2020 from '../register/YarisAtiv2020.svg';

const NavBarComponent = ({ history, itemCount }) => {
    const [isBurgerToggled, setIsBurgerToggled] = useState(false);

    // Maybe this should be moved out and made reusable instead of passing in
    const [itemCountInCart, setItemCountInCart] = useState(itemCount)
    const { width } = useWindowSize();

    // If the window is greater than 768, unToggle the Burger.
    useEffect(() => {
        if (width > 768) {
            setIsBurgerToggled(false);
        }
    }, [width]);

    // Update when the cart item count changes
    useEffect(() => {
        setItemCountInCart(1.2)
    }, [itemCountInCart])

    // Not sure if this is the correct way to prevent scrolling when modal is open.
    // From Answer #2 of https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open
    useEffect(() => {
        if (isBurgerToggled) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isBurgerToggled]);

    const [isLoggedIn] = useState(false)
    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         setIsLoggedIn(user?.uid ? true : false)
    //     })
    // }, [isLoggedIn])

    function onClickDisableBurger() {
        // disable burger so user can scroll
        setIsBurgerToggled(false)
    }

    return (
        <header>
            <nav className={styles.navBar}>
                <Logo onClick={() => history.push('/')} />
                <ul className={`${styles.navLinks} ${isBurgerToggled ? styles.navActive : styles.navInactive}`}>
                    <li>
                        <a href="http://www.toyotabara.com" onClick={onClickDisableBurger}>หน้าแรก</a>
                    </li>
                    <li>
                        <a href="http://www.toyotabara.com/home/promotionbara" onClick={onClickDisableBurger}>โปรโมชั่น</a>
                    </li>
                    <li className={styles.dropdown}>
                        <button className={styles.dropbtn} onClick={onClickDisableBurger}>แคมเปญ</button>
                        <div className={styles.dropdownContent}>
                            <div className={styles.boxCar}>
                                <h3>แคมเปญ</h3>
                                <div className={`${styles.containerRow}`}>
                                    <a href="/toyota-yaris">
                                        <img className={styles.preview} src={yaris2020} alt="yaris2020" />
                                        <p>Yaris/Ativ</p>
                                    </a>
                                    <a href="/toyota-revo">
                                        <img className={styles.preview} src={yaris2020} alt="YarisAtiv2020" />
                                        <p>Revo</p>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="http://www.toyotabara.com/home/contact" onClick={onClickDisableBurger}>ติดต่อเรา</a>
                    </li>
                </ul>

                <div className={`${styles.burger} ${isBurgerToggled ? styles.toggle : ""}`}
                    onClick={e => setIsBurgerToggled(!isBurgerToggled)}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </nav>
        </header>
    );
};


export default withRouter(NavBarComponent);