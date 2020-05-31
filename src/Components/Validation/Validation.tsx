import * as yup from 'yup';
export const  ValidationLogic = (values: any) => {
    let errors: any = {}
    errors.betchName = !values.betchName  && 'BetchName is Required!'
    errors.category = !values.category  && 'Category is Required!'
    errors.from = !values.from  && 'Choose Start Date!'
    errors.to = !values.to  && 'Choose End Date!'
    errors.subject = !values.subject  && 'Subject is Required!'
    errors.nosOfLiveSession = !values.nosOfLiveSession  && 'Nos of LiveSession is Required!'
    errors.details = !values.details  && 'Details is Required!'
    return errors;
}

export const validationSchema = yup.object({
    betchName: yup.string().required('BetchName is Required!'),
    category: yup.string().required('Category is Required!'),
    from: yup.string().required('Start Date is Required!'),
    to: yup.string().required('End Date is Required!'),
    subject: yup.string().required('Subject is Required!'),
    nosOfLiveSession: yup.string().required('Nos Of Live Session is Required!'),
    details: yup.string().required('Details it is Required!'),
})