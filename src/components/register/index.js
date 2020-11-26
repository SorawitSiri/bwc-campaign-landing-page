import React from "react";
import { withRouter } from 'react-router';
import styles from './index.module.scss';
import { withFormik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import axios from "axios";

import yaris2020 from './yaris2020.svg';
import yarisAtiv2020 from './YarisAtiv2020.svg';

const RegisterComponent = (props) => {
    const { values } = useFormikContext();
    const imageYaris = [yaris2020, yarisAtiv2020]
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
                        <Field name="phone" type="number" style={{ height: "40px" }} placeholder="" />
                    </div>
                    
                    {/* Zip Code */}
                    <div className={`${styles.formControl} ${styles.widthFormInput}`}>
                        <div className={styles.containerRow}>
                            <p>รหัสไปรษณีย์</p>
                            <p className={styles.mustField}>&nbsp;*</p> 
                            <ErrorMessage name="zip" render={msg => <span className="error">{msg}</span>} />
                        </div>
                        <Field name="zip" type="number" style={{ height: "40px" }} placeholder="" />
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
        "model_no": "Yaris MC 2020",
        "finance_model": "-",
        "finance_submodel": "-",
        "finance_price": 0,
        "finance_down_percent": 0,
        "finance_down_amount": 0,
        "finance_period": 12,
        "finance_per_month": 0
    }

    axios.post(`localhost:5000/api/register`, dataPost)
        .then(res => {
            console.log("Complete")
            alert("Complete")
        }).catch(function (err) {
            console.log("err", err)
            alert("err", err)
        })
}

export const EnhancedRegisterComponent = withFormik({
    mapPropsToValues: () => ({
        name_surname: '',
        phone: '',
        zip: '',
        select_car: 'Yaris 2020'
    }),
    validate: values => {
        const errors = {};

        if (values.name_surname === "") {
            errors.name_surname = "required";
        }

        if (values.phone === "") {
            errors.phone = "required";
        }

        if (values.zip === "") {
            errors.zip = "required";
        }

        return errors;
    },
    handleSubmit: (values, { props }) => {
        // alert("Donut")
        alert(JSON.stringify(values, null, 2));
        // postRegister(values);
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 0);
    },
    displayName: 'RegisterComponentForm',
})(withRouter(RegisterComponent));

export default withRouter(EnhancedRegisterComponent);