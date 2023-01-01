import {  useForm } from "react-hook-form";
import { useNavigate, useSubmit } from "react-router-dom";
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

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        For Juniors With Love
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export interface ConfirmUser {
    username:string;
    mail:string;
}
const theme = createTheme();

export default function ForgotPassword() {
    const {register, handleSubmit, formState} = useForm<ConfirmUser>()
    const [error, setErroe] = useState(false)
    const navigate = useNavigate()
    	const confirm = async (confirmInfo:ConfirmUser) =>{
            console.log("ConfirmUser", confirmInfo);
            const response = await authService.confirmUser(confirmInfo);
            if(response.username) navigate('/change-password');
            else return setErroe(true);
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
          <Box component="form" onSubmit={handleSubmit(confirm)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Username"
              label="Username"
              name="Username"
              autoComplete="Username"
              autoFocus
                {...register('username',
                    {
                        required: { value: true, message: "Missing  username", },
                        minLength: { value: 2, message: 'username too short' },
                        maxLength: { value: 20, message: "username too long!" }
                    }
                    )}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="mail"
              label="mail"
              type="mail"
              id="mail"
               {...register('mail',
                    {
                        required: { value: true, message: "Missing  mail", },
                        minLength: { value: 2, message: 'mail too short' },
                        maxLength: { value: 20, message: "mail too long!" }
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
              Validate User
            </Button>
             {error &&       
          <Alert severity="error">Username or mail are worng! Please try again</Alert>
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
