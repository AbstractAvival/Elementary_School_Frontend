"use client"

// ** React Imports
import { useState } from "react"

// ** MUI Components Imports
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import TextField from "@mui/material/TextField"

// ** Icon Imports
// import Icon from "src/@core/components/icon"

export default function PasswordTextField( props ) {
  const { InputProps, ...textFieldProps } = props

  // ** States
  const [ showPassword, setShowPassword ] = useState( false )

  return (
    <TextField
        slotProps={{
            input: { ...InputProps },
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={ () => setShowPassword( !showPassword ) }
                      onMouseDown={ e => e.preventDefault() }
                      tabIndex={ -1 }
                    >
                        {/* <Icon icon={ showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline" } /> */}
                    </IconButton>
                </InputAdornment>
            )
        }}
        type={ showPassword ? "text" : "password" }
        { ...textFieldProps }
    />
  )
}