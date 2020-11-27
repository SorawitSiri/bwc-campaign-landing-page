import React, { useState, useEffect} from "react";
import { withRouter } from 'react-router';
import styles from './index.module.scss';
import { withFormik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import axios from "axios";

import yaris2020 from './yaris2020.svg';
import yarisAtiv2020 from './YarisAtiv2020.svg';

import dataToyotaYaris from '../home/yaris.json';
import dataToyotaRevo from '../home_revo/revo.json';
import CONFIG_API from '../../config.json';

const RegisterComponent = (props) => {
    const { values } = useFormikContext();
    const imageYaris = [yaris2020, yarisAtiv2020, yarisAtiv2020];

    const [typeCar, setTypeCar] = useState("yaris");
    useEffect(() => {
        var pathname = window.location.pathname;
        if (pathname === "/toyota-revo") { setTypeCar("revo"); }
        else { setTypeCar("yaris"); }
    }, [])

    
    return (
        <Form style={{width: "100%"}}>
            <h2 style={{margin:"30px 20px 10px 20px"}}>ลงทะเบียนรับสิทธ์พิเศษ </h2>
            <div className={styles.boxReister}>
                <div className={styles.containerRow}>
                    {/* Name */}
                    <div className={`${styles.formControl} ${styles.widthFormInput}`}>
                        <div className={styles.containerRow}>
                            <p>ชื่อ-นามสกุล</p>
                            <p className={styles.mustField}>&nbsp;*</p> 
                            <ErrorMessage name="name_surname" render={msg => <span className="error">{msg}</span>} />
                        </div>
                        <Field name="name_surname" style={{ height: "40px" }} type="text" placeholder="" />
                    </div>
                    
                    {/* Phone */}
                    <div className={`${styles.formControl} ${styles.widthFormInput}`}>
                        <div className={styles.containerRow}>
                            <p>เบอร์โทรศัพท์</p>
                            <p className={styles.mustField}>&nbsp;*</p> 
                            <ErrorMessage name="phone" render={msg => <span className="error">{msg}</span>} />
                        </div>
                        <Field name="phone" type="text" style={{ height: "40px" }} placeholder="" />
                    </div>
                    
                    {/* Zip Code */}
                    <div className={`${styles.formControl} ${styles.widthFormInput}`}>
                        <div className={styles.containerRow}>
                            <p>รหัสไปรษณีย์</p>
                            <p className={styles.mustField}>&nbsp;*</p> 
                            <ErrorMessage name="zip" render={msg => <span className="error">{msg}</span>} />
                        </div>
                        <Field name="zip" type="text" style={{ height: "40px" }} placeholder="" />
                    </div>
                    
                </div>
                <div className={styles.containerRow}>
                    <div className={` ${styles.carSelect}`}>
                        <p>รุ่นรถที่สนใจ*</p>
                    </div>
                    <SelectCar name="select_car" id="select_car" values={values} options={
                        props.dataContent.model.map((_modelCar, index) => {
                            return ({ value: _modelCar, name: _modelCar, imageCar: imageYaris[index] })
                        })
                    } />
                </div>
                {typeCar === "revo" &&
                    <>
                        <div className={styles.containerRow}>
                            <div className={` ${styles.carSelect}`}>
                                <p>ลูกค้าองค์กร</p>
                            </div>
                            <div style={{padding: "2px 10px"}} >
                                <Field name="is_company" type="checkbox" />
                            </div>
                        </div>
                    </>
                }
                <div className={styles.containerRowEnd}>
                    <a href="#Calculate" className={styles.buttonCalInstallment} style={{margin: "0 10px", fontSize:"12px"}}><b>คำนวณเงินผ่อน</b></a>
                    <button type="submit" className={styles.buttonRegister} style={{margin: "0 10px", fontSize:"12px"}}><b>ลงทะเบียน</b></button>
                </div>
            </div>
        </Form>
    )
};

const SelectCar = ({ values, name, options }) => {
    return (
        <div className={styles.containerCol}>
            {options.map((list, index) => {
                return (
                    <div className={`${styles.boxRadiusSmall} ${styles.selectBoxInput}`} key={`${name}-${index + 1}`}>
                        <Field name={name} type="radio" value={list.value} id={`${name}-${index + 1}`}
                            checked={`${values[name]}` === `${list.value}` ? true : false} />
                    </div>
                )
            })}

            <ul className={`${styles.containerRow}`}>
                {options.map((list, index) => {
                    return (
                        <li className={`${styles.optionShipping} ${styles.boxRadiusSmall} ${`${values.select_car}` === `${list.value}` ? styles.active : styles.deactive}`}  key={`${name}-${index + 1}`}>
                            <label className={styles.selectBoxOption} htmlFor={`${name}-${index + 1}`}>
                                <div className={styles.containerRow}>
                                    <div className={styles.containerColCar}>
                                        <img src={list.imageCar} alt="Cars" />
                                    </div>
                                </div>
                                <div className={`${styles.containerRow} ${styles.center}`}>
                                    <div className={styles.boxNameCar}>
                                        {list.name}
                                    </div>
                                </div>
                                <div className={`${styles.containerRow} ${styles.center}`}>
                                    <h4 className={`${styles.selectCar} ${`${values.select_car}` === `${list.value}` ? styles.activeHere : styles.deactiveHere}`} >
                                        คุณเลือกอันนี้
                                    </h4>
                                </div>
                                
                            </label>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
};

const postRegister = (values) => {
    let dataPost = {
        "name": values.name_surname,
        "mobile_no": values.phone,
        "zipcode": values.zip,
        "model": values.select_car,
        "model_no": window.data_customer.model_no,
        "finance_model": window.data_customer.finance_model,
        "finance_submodel": window.data_customer.finance_submodel,
        "finance_price": window.data_customer.finance_price,
        "finance_down_percent": parseInt(window.data_customer.finance_down_percent),
        "finance_down_amount": parseFloat(window.data_customer.finance_down_amount),
        "finance_period": parseInt(window.data_customer.finance_period),
        "finance_per_month": parseFloat(window.data_customer.finance_per_month),
        "is_company": 0
    }

    // alert(JSON.stringify(dataPost, null, 2));
    console.log("dataPost", dataPost)
    
    const resPOST = axios.post(CONFIG_API.API_HOST + `/api/register`, dataPost)
        .then(res => {
            console.log("Complete", res);
            alert("ส่งข้อมูลสำเร็จแล้ว");
        }).catch(function (err) {
            console.log("err", err);
            console.log(err.response.data);
            console.log(err.response.data.error);
            alert("ส่งข้อมูลไม่สำเร็จ");
        })
    console.log("resPOST",resPOST.data);
}


var pathname = window.location.pathname;
var dataToyota = {};
if (pathname === "/toyota-revo") {
    dataToyota = dataToyotaRevo;
}
else {
    dataToyota = dataToyotaYaris;
}

export const EnhancedRegisterComponent = withFormik({
    mapPropsToValues: () => ({
        name_surname: '',
        phone: '',
        zip: '',
        is_company: '',
        select_car: dataToyota.model[0]
    }),
    validate: values => {
        const errors = {};
        window.data_customer.name = values.name_surname;
        window.data_customer.mobile_no = values.phone;
        window.data_customer.zipcode = values.zip;
        window.data_customer.model = values.select_car;
        // window.data_customer.model_no = "";

        // console.log("data_customer Validate", window.data_customer);
        if (values.name_surname === "") {
            errors.name_surname = "กรุณากรอกหน่อยนะคร้าบ";
        }

        if (values.phone === "") {
            errors.phone = "กรุณากรอกหน่อยนะคร้าบ";
        }

        if (values.zip === "") {
            errors.zip = "กรุณากรอกหน่อยนะคร้าบ";
        }

        return errors;
    },
    handleSubmit: (values, { props }) => {
        // alert("Donut")
        // alert(JSON.stringify(window.data_customer, null, 2));
        postRegister(values);
    },
    displayName: 'RegisterComponentForm',
})(withRouter(RegisterComponent));

export default withRouter(EnhancedRegisterComponent);