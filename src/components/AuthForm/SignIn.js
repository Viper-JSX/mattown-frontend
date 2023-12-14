const SignIn = ({values, handleChange}) => {
    return (
        <div>
            <input type="email" name="email" value={values.email} onChange={handleChange}/>
            <input type="password" name="email" value={values.password} onChange={handleChange}/>
        </div>
    )
}


export default SignIn;