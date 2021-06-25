import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export interface ErrorMessage {
    fullName: string,
    email: string,
    mobile: string,
    city: string,
    gender: string,
    departmentId: string,
    hireDate: string,
    isPermanent: string
}

export function useForm(initialFValues, validateOnChange = false, validate) {
    let initialErrorMessage = {} as ErrorMessage;
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState(initialErrorMessage);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors(initialErrorMessage)
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
