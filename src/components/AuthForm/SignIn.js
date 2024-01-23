const SignIn = ({values, handleChange}) => {
    return (
        <div>
            <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}/>
        </div>
    )
}


export default SignIn;