interface Provider {
    betchName: string,
}

export default function ValidationLogic(values: any) {
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