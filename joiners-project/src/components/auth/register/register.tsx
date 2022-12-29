import UserModel from '../../../models/userModel';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from '../../../services/authService';
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

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function Register() {
    const { register, handleSubmit, formState } = useForm<UserModel>();
    const navigate = useNavigate();
	const sendRegister = async (userInfo:UserModel) =>{
        console.log(userInfo);
		await authService.register(userInfo);
        navigate('/create-project')
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(sendRegister)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Username"
                  name="Username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  {...register('username',
                    {
                        required: { value: true, message: "Missing  username", },
                        minLength: { value: 2, message: 'Username too short' },
                        maxLength: { value: 20, message: "Username too long!" }
                    }
                    )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register('email',
                    {
                        required: { value: true, message: "Missing  email", },
                        minLength: { value: 2, message: 'email too short' },
                        maxLength: { value: 20, message: "email too long!" }
                    }
                    )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password',
                    {
                        required: { value: true, message: "Missing  password", },
                        minLength: { value: 2, message: 'password too short' },
                        maxLength: { value: 20, message: "password too long!" }
                    }
                    )}
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="linkedinProfile"
                  label="Linkedin Profile"
                  name="linkedinProfile"
                  autoComplete="linkedinProfile"
                   {...register('linkedinProfile',
                    {
                        required: { value: true, message: "Missing linkedin profile", },
                        minLength: { value: 2, message: 'Linkedin Profile short' },
                        maxLength: { value: 60, message: "Linkedin Profile long!" }
                    }
                    )} 
                />
              </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                   {...register('phone',
                    {
                        required: { value: false, message: "Missing  phone", },
                        minLength: { value: 2, message: 'Phone too short' },
                        maxLength: { value: 20, message: "Phone too long!" }
                    }
                    )} 
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}