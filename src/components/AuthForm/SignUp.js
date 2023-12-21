const SignUp = ({ values, handleChange }) => {
    return (
        <div>
            <input type="text" name="firstname" value={values.firstname} onChange={handleChange}/>
            <input type="text" name="lastname" value={values.lastname} onChange={handleChange}/>
            <input type="email" name="email" value={values.email} onChange={handleChange}/>
            <input type="password" name="password" value={values.password} onChange={handleChange}/>
        </div>
    )
}


export default SignUp;