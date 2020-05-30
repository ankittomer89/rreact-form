import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from '../download.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 800,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        textArea: {
            width: 'auto',
        }
    }),
);

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}><TextField
                                        id="outlined-read-only-input"
                                        label="Batch Name*"
                                        defaultValue=""
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}><TextField
                                        id="outlined-read-only-input"
                                        label="Category*"
                                        defaultValue=""
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}><TextField
                                        id="date"
                                        label="FROM*"
                                        type="date"
                                        defaultValue=""
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}><TextField
                                        id="outlined-read-only-input"
                                        label="Subject*"
                                        defaultValue=""
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}><TextField
                                        id="date"
                                        label="TO*"
                                        type="date"
                                        defaultValue=""
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.paper}><TextField
                                        id="outlined-read-only-input"
                                        label="NOS of Live Session*"
                                        defaultValue=""
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                    /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Paper className={classes.paper}><TextareaAutosize className={classes.textArea} aria-label="Details*" rowsMin={5} placeholder="DETAILS*" /></Paper>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                <Button variant="contained" color="primary">
                                    Primary
                                </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={logo} />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}