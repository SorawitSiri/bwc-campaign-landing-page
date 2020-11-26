import React from "react";
// import { ReactComponent as Promotion } from './pomotion.svg';
import styles from './index.module.scss';
import remoPomote from './pomotion_revo.gif';
import yarisPomote from './pomotion_yaris.gif';

const PromotionComponent = (props) => {
    const Pomoter = [yarisPomote, remoPomote];
    var pathname = window.location.pathname;
    var index = 0;
    if (pathname === "/toyota-revo") {
        index = 1;
    }
    else {
        index = 0;
    }
    return (
        <div className={styles.sectionPromotion}>
            <h2 style={{padding: "20px 20px"}}>ดูข้อมูลรถ</h2>
            {/* <Promotion className={styles.promotion}/> */}
            <img src={Pomoter[index]} alt="." className={styles.promotion} />
        </div>
    )
};

export default PromotionComponent;