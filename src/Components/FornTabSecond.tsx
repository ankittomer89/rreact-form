import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useStyles from './common/CommonCss';
import logo from '../download.jpg';
import Countery from './Extra/Extra.json';
import { validationSchema } from './Validation/Validation';

const initialValues = {
    betchName: '',
    category: '',
    from: '',
    to: '',
    subject: '',
    nosOfLiveSession: '',
    details: '',

}


const onSubmit = (values: any) => {
    //Call submit form data API if there is no error
    console.log('-----Form values---->', values)
}
let options = Countery.map((data, id) =>
    <option
        key={id}
        value={data.Cname}
    >
        {data.Cname}
    </option>
);

export default function FormSecondFields() {
    const classes = useStyles();
    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="form-group">
                    <br />
                    <Typography variant="h5" component="h2" align={"left"}>
                        Formik FORM
                    </Typography>
                    <br />
                    <div className='row'>
                        <div className='col-12 col-md-8'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <label htmlFor='betchName'> Batch Name*</label>
                                    <Field type='text' id='betchName' className="form-control" name='betchName' />
                                    <ErrorMessage name='betchName' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='category'> Category*</label>
                                    <Field name="category" id='category' as="select" className="form-control" placeholder="Favorite Color">
                                        {options}

                                    </Field>
                                    <ErrorMessage name='category' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>

                                <div className='col-sm-6'>
                                    <label htmlFor='from'> From*</label>
                                    <Field type='date' id='from' className="form-control" name='from' />
                                    <ErrorMessage name='from' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>
                                <div className='col-sm-6'>
                                    <label htmlFor='subject'> Subject*</label>
                                    <Field type='text' id='subject' className="form-control" name='subject' />
                                    <ErrorMessage name='subject' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor='to'> To*</label>
                                    <Field type='date' className="form-control datepicker" id='to' name='to' />
                                    <ErrorMessage name='to' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor='nosOfLiveSession'> Nos Of Live Session*</label>
                                    <Field type='text' className="form-control" id='nosOfLiveSession' name='nosOfLiveSession' />
                                    <ErrorMessage name='nosOfLiveSession' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>
                                <div className='col-md-12'>
                                    <label htmlFor='details'> Details*</label>
                                    <Field type='text' as="textarea" className="form-control" id='details' name='details' />
                                    <ErrorMessage name='details' >
                                        {ErrorMessage => <div className={classes.errorClass}> {ErrorMessage} </div>}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <img className={classes.img} alt="complex" src={logo} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className='col'>
                            <button className='btn btn-primary' type='submit'> SAVE AND CONTINUE</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div >
    );
}