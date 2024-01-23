const SignUp = ({ values, handleChange }) => {
    return (
        <div>
            <input type="text" name="firstname" placeholder="Firstname" value={values.firstname} onChange={handleChange}/>
            <input type="text" name="lastname" placeholder="Lastname" value={values.lastname} onChange={handleChange}/>
            <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange}/>
        </div>
    )
}


export default SignUp;