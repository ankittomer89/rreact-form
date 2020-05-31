import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './common/CommonCss';
import FormBody from './FormBody';
import Countery from './Extra/Extra.json';
import { ValidationLogic } from './Validation/Validation';

export default function FormPropsTextFields() {
    const [inputValue, setInputValue] = useState({ betchName: '', category: '', from: '', to: '', nosOfLiveSession: '', subject: '', details: '' });
    const [error, setError] = useState({ betchName: '', category: '', from: '', to: '', nosOfLiveSession: '', subject: '', details: '' })
    const classes = useStyles();

    const changeFun = (e: any, selectvalue?: string, selectLabel?: string) => {
        let { name, value } = e.target;
        const formVal =
            selectvalue && selectvalue.length > 0
                ? selectvalue
                : value && value.length > 0
                    ? value
                    : undefined;
        setInputValue({
            ...inputValue,
            [name ? name : selectLabel]: formVal,
        });
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        setError(ValidationLogic(inputValue))

        //Call submit form data API if there is no error

        console.log('-------------Form Values------------->', inputValue)
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h5" component="h2" align={"left"}>
                    Material-UI FORM
                </Typography>
                <br />
                <FormBody error={error} Countery={Countery} changeFun={changeFun} classes={classes} submitForm={onSubmit} />
            </Paper>
        </div>
    );
}