import React, {useState, useEffect} from "react";
import { withRouter } from 'react-router';
import styles from './index.module.scss';
import { ReactComponent as Logo } from './logo.svg';

import { Link } from "react-router-dom";
import yaris2020 from '../register/yaris2020.svg';
import YarisAtiv2020 from '../register/YarisAtiv2020.svg';
import useWindowSize from '../../hooks/useWindowSize';

const NavBarComponent = () => {
    const { width } = useWindowSize();
    const [isBurgerToggled, setIsBurgerToggled] = useState(false);

    // If the window is greater than 768, unToggle the Burger.
    useEffect(() => {
        if (width > 1000) {
            setIsBurgerToggled(false);
        }
    }, [width]);

    const clickBurger = () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    const hideBurger = () => {
        var x = document.getElementById("myLinks");
        x.style.display = "none";
    }
    
    return (
        <header>
            <nav className={styles.navBar}>
                <Logo/>
                <ul class={styles.ulNav}>
                    <li><a class="active" href="http://www.toyotabara.com">หน้าหลัก</a></li>
                    <li><a href="http://www.toyotabara.com/home/promotionbara">โปรโมชั่น</a></li>
                    <li className={styles.dropdown}>
                        <button className={styles.dropbtn}>แคมเปญ</button>
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
                    <li><a href="http://www.toyotabara.com/home/contact">ติดต่อเรา</a></li>
                </ul>

                {/* <!-- Top Navigation Menu --> */}
                <div className={styles.topnav} id={"myLinks"} >
                        <a href="http://www.toyotabara.com">หน้าหลัก</a>
                        <a href="http://www.toyotabara.com/home/promotionbara">โปรโมชั่น</a>
                        <Link to="/toyota-yaris" onClick={hideBurger}>แคมเปญ Yaris/Ativ</Link>
                        <Link to="/toyota-revo" onClick={hideBurger}>แคมเปญ Revo</Link>
                        <a href="http://www.toyotabara.com/home/contact">ติดต่อเรา</a>
                </div>
                
                <div className={`${styles.burger} ${isBurgerToggled ? styles.toggle : ""}`} onClick={clickBurger}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </nav>            
        </header>
    )
};

export default withRouter(NavBarComponent);