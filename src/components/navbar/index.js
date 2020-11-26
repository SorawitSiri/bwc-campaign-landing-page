import React from "react";
import { withRouter } from 'react-router';
import styles from './index.module.scss';
import { ReactComponent as Logo } from './logo.svg';

import yaris2020 from '../register/yaris2020.svg';
import YarisAtiv2020 from '../register/YarisAtiv2020.svg';

const NavBarComponent = () => {
    return (
        <header>
            <div className={styles.navBar}>
                <Logo/>
                <ul>
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
            </div>            
        </header>
    )
};

export default withRouter(NavBarComponent);