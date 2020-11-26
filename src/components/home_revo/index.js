import React from "react";
// import { withRouter } from 'react-router';
import { ReactComponent as Banner } from './banner.svg';
import RegisterComponent from "../register";
import PromotionComponent from "../promotion";
import CalculaterComponent from "../calculater";
import CheckInformationComponent from "../check_information";
import FooterComponant from "../footer";
// import ReactGA from 'react-ga';
import styles from './index.module.scss';

// Data of Toyota Yaris
import RevoData from './revo.json';

// const ga = 'G-PBBL9S80RC';
// ReactGA.initialize(ga);
// // Disable file protocol checking (so that GA will work on Android devices)
// ReactGA.ga('set', 'checkProtocolTask', null);
// ReactGA.pageview('/home_yaris');

const HomeRevoComponent = () => {
    return (
        <>
            <main>
                {/* Banner */}
                <Banner className={styles.banner} />

                {/* RegisterComponent */}
                <div className={styles.goldText} id="Register">
                    <RegisterComponent dataContent={RevoData} />
                </div>
                <section className={styles.registerSection} id="Register"> 
                    <RegisterComponent dataContent={RevoData} />
                </section>

                {/* Promotion */}
                <section className={styles.section1}>
                    <PromotionComponent />
                </section>
                
                {/* Calculate installment */}
                <section className={styles.section2} id="Calculate">
                    <CalculaterComponent dataContent={RevoData}/>
                </section>

                {/* Check Infomation of Car */}
                <section className={styles.section3}>
                    <CheckInformationComponent dataContent={RevoData}/>
                </section>
                
                {/* Check Infomation of Car */}
                <section>
                    <FooterComponant />
                </section>
            </main>
        </>
    )
};
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PBBL9S80RC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PBBL9S80RC');
</script> */}
export default HomeRevoComponent;