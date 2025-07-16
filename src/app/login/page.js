import loginStyles from "./login.module.css"

// Custom Components
import LoginForm from "@/components/login/LoginForm"

export default function Login() {
    return (
        <div className={ loginStyles[ "main-column-placeholder" ] }>
            <div className={ loginStyles[ "top-horizontal-placeholder" ] }></div>
            <div className={ loginStyles[ "middle-horizontal-placeholder" ] }>
                <div className={ loginStyles[ "empty-column" ] }></div>
                <div className={ loginStyles[ "login-form-column" ] }>
                    <LoginForm />
                </div>
            </div>
            <div className={ loginStyles[ "bottom-horizontal-placeholder" ] }></div>
        </div>
    )
}