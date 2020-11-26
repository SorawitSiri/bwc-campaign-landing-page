import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router';
import styles from './index.module.scss';
import { withFormik, Form, Field, useFormikContext } from 'formik';

import yaris2020 from './yaris2020.svg';
import yarisAtiv2020 from './YarisAtiv2020.svg';
import yaris2020_img from './yaris2020.png';

import dataToyotaYaris from '../home/yaris.json';
import dataToyotaRevo from '../home_revo/revo.json';
import { ReactComponent as IconArrow } from './icon-arrow.svg';

function currencyFormat(num) {
    num = parseFloat(num);
    return (num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
}

const CalculaterComponent = (props) => {
    const imageCars = [yaris2020, yarisAtiv2020, yarisAtiv2020]
    const { values, setFieldValue } = useFormikContext();
    const [ masterData, setMasterData ] = useState(props.dataContent.yaris);

    useEffect(() => {
        const setPriceCar = () => {
            var pathname = window.location.pathname;
            var dataToyota = {};
            if (pathname === "/toyota-revo") {
                dataToyota = dataToyotaRevo;
                if (values.series === dataToyota.model[0] && values.model !== "0" && values.color !== "0") {
                    console.log("values.series", values.series);
                    console.log("dataToyota.model[0]", dataToyota.model[0]);
                    setMasterData(props.dataContent.yaris);
                    let _price = 549000.00;
                    if (values.model === dataToyota.yaris.subModel[0]) { _price = dataToyota.yaris.price[0] }
                    else if (values.model === dataToyota.yaris.subModel[1]) { _price = dataToyota.yaris.price[1] }
                    else if (values.model === dataToyota.yaris.subModel[2]) { _price = dataToyota.yaris.price[2] }
                    else if (values.model === dataToyota.yaris.subModel[3]) { _price = dataToyota.yaris.price[3] }
                    else if (values.model === dataToyota.yaris.subModel[4]) { _price = dataToyota.yaris.price[4] }
                    else if (values.model === dataToyota.yaris.subModel[5]) { _price = dataToyota.yaris.price[5]}
                    else { _price = dataToyota.yaris.price[6] }
                    let _installments = setInstallments(_price)
                    setMonth(_price, _installments)
                    setFieldValue("price", _price + " บาท", false);
                }
                else if (values.series === dataToyota.model[1] && values.model !== "0" && values.color !== "0") {
                    setMasterData(props.dataContent.yarisAtiv);
                    console.log("values.series", values.series);
                    console.log("dataToyota.model[1]", dataToyota.model[1]);
                    console.log("subModel[0]", values.model);
                    console.log("dataToyota.yarisAtiv.subModel[0]", dataToyota.yarisAtiv.subModel[0]);
                    let _price = 539000.00;
                    if (values.model === dataToyota.yarisAtiv.subModel[0]) { _price = dataToyota.yarisAtiv.price[0] }
                    else if (values.model === dataToyota.yarisAtiv.subModel[1]) { _price = dataToyota.yarisAtiv.price[1] }
                    else if (values.model === dataToyota.yarisAtiv.subModel[2]) { _price = dataToyota.yarisAtiv.price[2] }
                    else if (values.model === dataToyota.yarisAtiv.subModel[3]) { _price = dataToyota.yarisAtiv.price[3] }
                    else if (values.model === dataToyota.yarisAtiv.subModel[4]) { _price = dataToyota.yarisAtiv.price[4] }
                    else if (values.model === dataToyota.yarisAtiv.subModel[5]) { _price = dataToyota.yarisAtiv.price[5]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[6]) { _price = dataToyota.yarisAtiv.price[6]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[7]) { _price = dataToyota.yarisAtiv.price[7]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[8]) { _price = dataToyota.yarisAtiv.price[8]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[9]) { _price = dataToyota.yarisAtiv.price[9]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[10]) { _price = dataToyota.yarisAtiv.price[10]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[11]) { _price = dataToyota.yarisAtiv.price[11]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[12]) { _price = dataToyota.yarisAtiv.price[12]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[13]) { _price = dataToyota.yarisAtiv.price[13]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[14]) { _price = dataToyota.yarisAtiv.price[14]}
                    else if (values.model === dataToyota.yarisAtiv.subModel[15]) { _price = dataToyota.yarisAtiv.price[15]}
                    else { _price = dataToyota.yarisAtiv.price[16] }
                    let _installments = setInstallments(_price)
                    setMonth(_price, _installments)
                    setFieldValue("price", _price + " บาท", false);
                }
                else {
                    setFieldValue("installments", "- บาท", false);
                    setFieldValue("installments_per_month", "- บาท/เดือน", false);
                    setFieldValue("price", "- บาท", false);
                }
            }
            else {
                dataToyota = dataToyotaYaris;
                if (values.series === dataToyota.model[0] && values.model !== "0" && values.color !== "0") {
                    let _price = 549000.00;
                    setMasterData(props.dataContent.yaris);
                    if (values.model === "Entry") { _price = 549000.00 }
                    else if (values.model === "Sport") { _price = 609000.00 }
                    else if (values.model === "Sport Premium") { _price = 679000.00 }
                    else { _price = 684000.00 } // Sport Premium (Black Roof)
                    let _installments = setInstallments(_price)
                    setMonth(_price, _installments)
                    setFieldValue("price", _price + " บาท", false);
                }
                else if (values.series === dataToyota.model[1] && values.model !== "0" && values.color !== "0") {
                    let _price = 539000.00;
                    setMasterData(props.dataContent.yarisAtiv);
                    if (values.model === "Entry") { _price = 539000.00 }
                    else if (values.model === "Sport") { _price = 599000.00 }
                    else { _price = 674000.00 }// Sport Premium
                    let _installments = setInstallments(_price)
                    setMonth(_price, _installments)
                    setFieldValue("price", _price + " บาท", false);
                }
                else {
                    setFieldValue("installments", "- บาท", false);
                    setFieldValue("installments_per_month", "- บาท/เดือน", false);
                    setFieldValue("price", "- บาท", false);
                }
            }

            
        }

        const setInstallments = (_price) => {
            let _installments = 0
            if (values.installments_percent === "10%") {
                _installments = _price * 0.1
                setFieldValue("installments", _installments + " บาท", false);
            }
            else if (values.installments_percent === "15%") {
                _installments = _price * 0.15
                setFieldValue("installments", _installments + " บาท", false);
            }
            else if (values.installments_percent === "20%") {
                _installments = _price * 0.2
                setFieldValue("installments", _installments + " บาท", false);
            }
            else if (values.installments_percent === "25%") {
                _installments = _price * 0.25
                setFieldValue("installments", _installments + " บาท", false);
            }
            else if (values.installments_percent === "30%") {
                _installments = _price * 0.3
                setFieldValue("installments", _installments + " บาท", false);
                return _installments;
            }
            else {
                _installments = _price
                setFieldValue("installments", _installments + " บาท", false);
            }
            return _installments;
        }

        const setMonth = (_price, _installments) => {
            let _balance_price = _price - _installments;
            let _installments_per_month = 0;
            if (values.month === "48 เดือน") {
                _installments_per_month = _balance_price/48;
                setFieldValue("installments_per_month", _installments_per_month + " บาท", false);
            }
            else if (values.month === "60 เดือน") {
                _installments_per_month = _installments/60;
                setFieldValue("installments_per_month", _installments_per_month + " บาท", false);
            }
            else if (values.month === "72 เดือน") {
                _installments_per_month = _installments/72;
                setFieldValue("installments_per_month", _installments_per_month + " บาท", false);
            }
            else if (values.month === "84 เดือน") {
                _installments_per_month = _installments/84;
                setFieldValue("installments_per_month", _installments_per_month + " บาท", false);
            }
            return _installments_per_month;
        }
        setPriceCar();

    }, [values.series, values.installments_percent, values.month, values.model, values.color])
    
    return (
        <div className={`${styles.containerCol}`}>
            <h2 style={{padding: "20px 20px"}}>คำนวณเงินผ่อน </h2>
            <div className={styles.boxCalculater}>
                <Form className={`${styles.containerRow}`}>
                    {/* Col #1 */}
                    <div className={styles.containerRowDiv} style={{flexGrow: 1}}>
                        <div className={styles.containerCol}>
                            <div className={`${styles.widthFormInput}`}>
                                <div className={styles.dropdownSelect}>
                                    <label htmlFor="stickerConfiguration">รุ่นรถ</label>
                                    <SelectBox name="series" values={values} options={
                                        props.dataContent.model.map((_modelCar, index) => {
                                            return ( { image: imageCars[index], name: _modelCar } )
                                        })
                                    } />
                                </div>
                                <div className={styles.dropdownSelect}>
                                    <label htmlFor="stickerConfiguration">โมเดล</label>
                                    {console.log("masterData", masterData)}
                                    <SelectBoxNoImg name="model" values={values} options={
                                        masterData.subModel.map((_modelCar) => {
                                            return ( { name: _modelCar } )
                                        })
                                    } />
                                </div>
                                <div className={styles.dropdownSelect}>
                                    <label htmlFor="stickerConfiguration">สี</label>
                                    <SelectBoxNoImg name="color" values={values} options={
                                        masterData.colorName.map((_colorCar) => {
                                            return ( { name: _colorCar } )
                                        })
                                    } />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col #2 */}
                    <div className={styles.containerRowDiv} style={{flexGrow: 1}}>
                        <div className={styles.containerCol}>
                            <div className={`${styles.widthFormInputCol2} ${styles.textPrice}` }>
                                <h1 htmlFor="stickerConfiguration" className={styles.key}>ราคา</h1>
                                <label htmlFor="stickerConfiguration" className={styles.value} style={{padding: "0 0 0 20px"}}>{currencyFormat(values.price)}</label>
                            </div>
                            <div className={`${styles.widthFormInputCol2} ${styles.textPrice}`} style={{padding: "0 0 20px 0"}}>
                                <h1 htmlFor="stickerConfiguration" className={styles.key}>ดาวน์</h1>
                                <label htmlFor="stickerConfiguration" className={styles.value} style={{padding: "0 0 0 20px"}}>{currencyFormat(values.installments)}</label>
                            </div>
                            <div className={`${styles.widthFormInputColDownMonth}`}>
                                <div className={styles.dropdownSelectPercent}>
                                    <SelectBoxNoImg name="installments_percent" values={values} options={[
                                            { name: "0%" },
                                            { name: "10%" },
                                            { name: "15%" },
                                            { name: "20%" },
                                            { name: "25%" },
                                            { name: "30%" }
                                        ]
                                    } />
                                </div>
                                <div className={styles.containerRowNoWrap} >
                                    <div className={`${styles.widthFormInputColDownMonth} ${styles.textPrice}`} style={{padding: "0 0 20px 0", margin: "0px"}}>
                                        <h1 htmlFor="stickerConfiguration" className={styles.key} style={{padding:"15px 10px 0 0"}}>จำนวนเดือน</h1>
                                    </div>
                                    <div className={styles.dropdownSelect}>
                                        <SelectBoxNoImg name="month" values={values} options={[
                                                { name: "48 เดือน" },
                                                { name: "60 เดือน" },
                                                { name: "72 เดือน" },
                                                { name: "84 เดือน" },
                                            ]
                                        } />
                                    </div>
                                </div>
                                <div className={styles.containerRow}>
                                    <div className={`${styles.widthFormInputColDownMonth} ${styles.textPrice}`} style={{padding: "0 0 20px 0", margin: "0px"}}>
                                        <h1 htmlFor="stickerConfiguration" className={styles.key} style={{padding:"15px 10px 0 0"}}>ราคาผ่อนเพียง</h1>
                                    </div>
                                    {/* <label htmlFor="stickerConfiguration" className={styles.boxHighlightKey}>ราคาผ่อนเพียง</label> */}
                                    <div className={styles.boxHighlight}>
                                        <h4>{isNaN(parseFloat(values.installments_per_month).toFixed(2)) ? "-":currencyFormat(values.installments_per_month)} บาท/เดือน</h4>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col #3 */}
                    <div className={styles.containerRowDiv} style={{flexGrow: 8}}>
                        <div className={styles.containerCol}>
                            <div className={`${styles.containerRowCenter}`}>
                                <img src={yaris2020_img} alt="." className={styles.previewCar} />
                            </div>
                            <div className={styles.groupContact}>
                                <div className={`${styles.containerRowRight}`}>
                                    <div className={styles.boxHighlightRed} style={{padding: "10px"}}>โทร 02-095-3222</div>
                                </div>
                                <div className={`${styles.containerRowRight}`}>
                                    <a href={"#Register"} className={styles.boxHighlightRed}>ลงทะเบียน</a>
                                    <div className={styles.boxHighlightKeyOr}>หรือ</div>
                                    <div className={styles.boxHighlightGreen}>Add line@</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
};

const SelectBox = ({ values, name, options }) => {
    const { setFieldValue } = useFormikContext();
    return (
        <div className={styles.selectBox}>
            <div className={styles.selectBoxCurrent} tabIndex="1">
                {options.map((list, index) => {
                    let lastIndex = index + 1;
                    return (
                        <div className={styles.selectBoxValue} key={`${lastIndex}`}>
                            <Field name={name} type="radio" className={styles.selectBoxInput} value={list.name} id={`${name}-${lastIndex}`}
                                checked={`${values[name]}` === `${list.name}` ? true : false} />
                            <p className={styles.selectBoxInputText}>
                                <img src={yaris2020_img} alt="." />
                                {list.name.substr(0, list.name.length-4)}
                            </p>
                        </div>
                    )
                })}
                {/* <div className={styles.selectBoxValue} key={0}>
                    <Field name={name} type="radio" className={styles.selectBoxInput} value="0" id={`${name}-0`}
                        checked={`${values[name]}` === `${0}` ? true : false} />
                    <p className={styles.selectBoxInputText} style={ {margin: "0 0 0 10px"} }>กรุณาเลือก</p>
                    <IconArrow />
                </div> */}
            </div>
            <ul className={styles.selectBoxList}>
                {options.map((list, index) => {
                    let lastIndex = index + 1;
                    return (
                        <li onClick={() => setFieldValue("showImageUrl", list.image, false)} key={`${lastIndex}`}>
                            <label className={styles.selectBoxOption} htmlFor={`${name}-${lastIndex}`}>
                                <img src={list.image} alt="." width="60px" style={{ marginRight: "10px" }} />
                                {list.name.substr(0, list.name.length-4)}
                            </label>
                        </li>
                    )
                })}
                {/* <li key={0}>
                    <label className={styles.selectBoxOption} htmlFor={`${name}-0`}>กรุณาเลือก</label>
                </li> */}
                
            </ul>
        </div>
    )
};

const SelectBoxNoImg = ({ values, name, options }) => {
    const { setFieldValue } = useFormikContext();
    return (
        <div className={styles.selectBox}>
            <div className={styles.selectBoxCurrent} tabIndex="1">
                {options.map((list, index) => {
                    let lastIndex = index + 1;
                    return (
                        <div className={`${styles.selectBoxValue}`} key={`${lastIndex}`} >
                            <Field name={name} type="radio" className={styles.selectBoxInput} value={list.name} id={`${name}-${lastIndex}`}
                                checked={`${values[name]}` === `${list.name}` ? true : false} />
                            <p className={styles.selectBoxInputText} style={ {margin: "0 0 0 10px"} }>
                                {list.name}
                            </p>
                        </div>
                    )
                })}
                <div className={`${styles.selectBoxValue} `} key={0} >
                    <Field name={name} type="radio" className={styles.selectBoxInput} value="0" id={`${name}-0`}
                        checked={`${values[name]}` === `${0}` ? true : false} />
                    <p className={styles.selectBoxInputText} style={ {margin: "0 0 0 10px"}}>กรุณาเลือก</p>
                    <IconArrow />
                </div>
            </div>
            <ul className={styles.selectBoxList}>
                {options.map((list, index) => {
                    let lastIndex = index + 1;
                    return (
                        <li onClick={() => setFieldValue("showImageUrl", list.image, false)} key={`${lastIndex}`} >
                            <label className={styles.selectBoxOption} htmlFor={`${name}-${lastIndex}`}>
                                {list.name}
                            </label>
                        </li>
                    )
                })}
                <li key={0}>
                    <label className={styles.selectBoxOption} htmlFor={`${name}-0`}>กรุณาเลือก</label>
                </li>
                
            </ul>
        </div>
    )
};

var pathname = window.location.pathname;
var dataToyota = {};
if (pathname === "/toyota-revo") {
    dataToyota = dataToyotaRevo;
}
else {
    dataToyota = dataToyotaYaris;
}

export const EnhancedCalculaterComponent = withFormik({
    mapPropsToValues: () => ({
        series: dataToyota.model[0], //"Yaris 2020",
        model: dataToyota.yaris.subModel[0],
        color: dataToyota.yaris.colorName[0],
        price: dataToyota.yaris.price[0],
        installments: 0,
        installments_percent: "30%",
        month: "84 เดือน",
        installments_per_month: "-"
    }),
    validate: values => {
        const errors = {};
        
        if (values.series === "") {
            errors.series = "i18.required";
        }


        return errors;
    },
    handleSubmit: (values, { props }) => {
        // alert("Donut")
        alert(JSON.stringify(values, null, 2));
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 0);
    },
    displayName: 'RegisterComponentForm',
})(withRouter(CalculaterComponent));

export default withRouter(EnhancedCalculaterComponent);