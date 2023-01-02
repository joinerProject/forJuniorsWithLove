import {  useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { Alert } from "@mui/material";
import authService from "../../services/authService";

const theme = createTheme();

export type NewPassword = {
    password:string;
    confirmPassword:string
}

const ChangePassword = (props:any) =>{
    const {state} = useLocation()
    console.log("state", state);
    const navigate = useNavigate();
    const {register, handleSubmit, formState} = useForm<NewPassword>()
    const [error, setError] = useState(false)
    const change = async (newPassword:NewPassword) =>{
    if(newPassword.password !== newPassword.confirmPassword) return setError(true);
    else {
        await authService.changePassword(state.userId, newPassword.password);
        navigate('/home')
        }
    }

    return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
         
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(change)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              autoFocus
                {...register('password',
                    {
                        required: { value: true, message: "Missing  password", },
                        minLength: { value: 2, message: 'password too short' },
                        maxLength: { value: 20, message: "password too long!" }
                    }
                    )}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Confirm Password"
              label="Confirm Password"
              type="Confirm Password"
              id="Confirm Password"
               {...register('confirmPassword',
                    {
                        required: { value: true, message: "Missing  confirm Password", },
                        minLength: { value: 2, message: 'Confirm Password too short' },
                        maxLength: { value: 20, message: "Confirm Password too long!" }
                    }
                )}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Change Password
            </Button>
            {error &&       
                <Alert severity="error">Passwords are not equal</Alert>
            }
            <Grid container>
              <Grid item>
                <Link variant="body2" href='/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}
export default ChangePassword;