const SignIn = ({values, handleChange}) => {
  
  return (
    <div>
      <input type="email" name="email" onChange={handleChange}/>
      <input type="password" name="email" onChange={handleChange}/>
    </div>
  )
}


export default SignIn;