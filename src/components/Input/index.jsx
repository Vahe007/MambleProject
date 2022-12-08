import React from "react"
import { TextField } from "@mui/material"
import styles from './Input.module.css'
import { taskValidationSchema } from '../../validations.js'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const Input = (props) => {
    const { name, formik, placeholder, ...otherProps } = props
    const { input } = styles
    // const configTextField = {
    //     name,
    //     value: formik.values[name],
    //     onBlur: formik.handleBlur,
    //     touched: formik.errors[name],
    //     onChange: formik.handleChange,
    //     variant: "outlined",
    //     ...otherProps,
    // }
    // if (formik.touched[name] && formik.errors[name]) {
    //     configTextField.error = true;
    //     configTextField.helperText = formik.errors[name];
    // }


    return <input name={name} {...otherProps} placeholder={placeholder} className={input} />

    // return <TextField {...configTextField} />
};

export default Input;
