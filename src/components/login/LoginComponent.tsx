const LoginComponent = () => {

    const form = {
        email: "",
        password: "",
    }

    const handleChange = () => {};
    const handleSubmit = () => {}


    return (
        <form className="form" onSubmit={handleSubmit}>
        <div className="mb-4">
            <input 
                onChange={handleChange} 
                value={form.email} 
                type="email" 
                required
                name="email"
                id="email"
            />
        </div>
        <div className="form__control">
            <input 
                onChange={handleChange} 
                value={form.password}  
                type="password" 
                required
                name="password"
                id="password"
            />
        </div>
        {/* TODO crear pagina para register */}
        {/* <Link className="resgiter-link" to='/register'>   
        Registrate si no lo has hecho aun!
        </Link> */}
        <button  type="submit" color="success" >Login</button>
    </form>
    )
}
export default LoginComponent;