"use client"

// React Imports
import { useState } from "react"

// Authentication
import { useAuthentication } from "@/components/contexts/AuthenticationContext"

// Custom Components
import PasswordTextField from "@/components/PasswordTextField"
import Translations from "@/components/Translations"

// MUI components
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"

export default function LoginForm() {
    const [ username, setUsername ] = useState( "" )
    const [ password, setPassword ] = useState( "" )
    const [ errors, setErrors ] = useState( null )
    const [ error, setError ] = useState( "" )

    const authentication = useAuthentication()

    const handleSubmit = event => {
        event.preventDefault()
        setErrors( null )
        setError( "" )
        authentication.login( { username, password, setErrors, setError } )
    }

    return (
        <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { maxWidth: "80%" } }>
            {
                error &&
                <Alert severity="error" sx={ { mb: 4 } }>
                    { error }
                </Alert>
            }
            <FormControl fullWidth sx={ { mb: 4 } }>
                <TextField
                    autoFocus
                    id="username"
                    label={ <Translations text="username" /> }
                    onChange={ event => setUsername( event.target.value ) }
                    value={ username }
                    error={ Boolean( errors?.username ) }
                    helperText={ errors?.username && errors.username[ 0 ] }
                />
            </FormControl>
            <FormControl fullWidth sx={ { mb: 4 } }>
                <PasswordTextField
                    inputProps={ { maxLength: 255 } }
                    label={ <Translations text="password" /> }
                    onChange={ event => setPassword( event.target.value ) }
                    value={ password }
                    error={ Boolean( errors?.password ) }
                    helperText={ errors?.password && errors.password[ 0 ] }
                    InputProps={ {
                      startAdornment: (
                        <InputAdornment position="start">
                          {/* <Icon icon="mdi:key-outline" /> */}
                        </InputAdornment>
                      )
                    } }
                />
            </FormControl>
            <Button loading={ authentication.loading } fullWidth size="large" type="submit" variant="contained">
              <Translations text="login" />
            </Button>
        </Box>
    )
}