import React from "react";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Autocomplete } from '@material-ui/lab';
import logo from '../download.jpg';

export default function FormBody({ error, submitForm, classes, changeFun, Countery }) {
    return (
        <form onSubmit={submitForm}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}><TextField
                                    id="outlined-read-only-input-1"
                                    label="Batch Name*"
                                    defaultValue=""
                                    fullWidth
                                    name='betchName'
                                    size="small"
                                    onChange={changeFun}
                                    variant="outlined"
                                /></Paper>
                                {error.betchName && <p className={classes.errorClass}>{error.betchName}</p>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <Autocomplete
                                        key={1}
                                        id='autocomplete'
                                        size="small"
                                        onChange={(e, selectvalue: any) =>
                                            changeFun(e, selectvalue && selectvalue.Cname, 'category')
                                        }
                                        options={Countery}
                                        getOptionLabel={(option?: any) => option.Cname}
                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                name='category'
                                                placeholder="Category*"
                                                label="Category"
                                                variant="outlined"
                                            />
                                        )}
                                    />
                                </Paper>
                                {error.category && <p className={classes.errorClass}>{error.category}</p>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <TextField
                                        id="date"
                                        label="FROM*"
                                        InputLabelProps={{ shrink: true }}
                                        type="date"
                                        fullWidth
                                        name='from'
                                        size="small"
                                        onChange={changeFun}
                                        className={classes.textField}
                                        variant="outlined"
                                    />
                                </Paper>
                                {error.from && <p className={classes.errorClass}>{error.from}</p>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}><TextField
                                    id="outlined-read-only-input-2"
                                    label="Subject*"
                                    defaultValue=""
                                    fullWidth
                                    name='subject'
                                    size="small"
                                    onChange={changeFun}
                                    variant="outlined"
                                /></Paper>
                                {error.subject && <p className={classes.errorClass}>{error.subject}</p>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}><TextField
                                    id="date"
                                    label="TO*"
                                    InputLabelProps={{ shrink: true }}
                                    type="date"
                                    name='to'
                                    fullWidth
                                    size="small"
                                    onChange={changeFun}
                                    className={classes.textField}
                                    variant="outlined"
                                /></Paper>
                                {error.to && <p className={classes.errorClass}>{error.to}</p>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}><TextField
                                    id="outlined-read-only-input-3"
                                    label="NOS of Live Session*"
                                    defaultValue=""
                                    fullWidth
                                    name='nosOfLiveSession'
                                    size="small"
                                    onChange={changeFun}
                                    variant="outlined"
                                /></Paper>
                                {error.nosOfLiveSession && <p className={classes.errorClass}>{error.nosOfLiveSession}</p>}
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Paper className={classes.paper}><TextareaAutosize className={classes.textArea} aria-label="Details*" name='details' onChange={changeFun} rowsMin={6} placeholder="DETAILS*" /></Paper>
                            </Grid>
                            {error.details && <p className={classes.errorClass}>{error.details}</p>}

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <ButtonBase className={classes.image} onChange={changeFun}>
                        <img className={classes.img} alt="complex" src={logo} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button type='submit' variant="contained" color="primary">
                        SAVE AND CONTINUE
                                </Button>
                </Grid>
            </Grid>
        </form>
    );
}