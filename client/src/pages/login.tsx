import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
}));

function Login() {

    const classes = useStyles();
    return (
        <>
        <Container>
        <Grid container direction="column" justify="center" alignItems="center">
            <h2>Login</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField 
                        error 
                        id="standard-error-helper-text" 
                        label="User name" 
                        defaultValue="Hello World" 
                        helperText="Incorrect entry."
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Email"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Password"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                </div>
            </form>
            </Grid>
        </Container>
        </>
    );
}

export default Login;
