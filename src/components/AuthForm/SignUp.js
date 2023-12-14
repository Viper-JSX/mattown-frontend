const SignUp = ({ values, handleChange }) => {
    return (
        <div>
            <input type="email" name="email" value={values.email} onChange = {handleChange}/>
            <input type="password" name="password" value={values.password} onChange = {handleChange}/>
        </div>
    )
}


export default SignUp;