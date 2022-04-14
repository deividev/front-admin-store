import axios from "axios";
import { useEffect, useState } from "react";
 
axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
  timeout: 10000
});

const initialForm = {
    email: "",
    password: "",
}


const LoginComponent = () => {
    const urlProducts: string = 'https://api-shopping-online.herokuapp.com/products';
    const urlLogin: string = 'https://api-shopping-online.herokuapp.com/auth/signin';
    const [form, setForm] = useState(initialForm);
    const GET = (url: string) => {
        return axios.get(url)
            .then(response => response.data);
    }

    const POST = (url: string, data: any) => {
        return axios.post(url, data)
            .then(response => response.data);
    }

    useEffect(() => {
        const products = GET(urlProducts);
    });
    
   

  

    const handleChange = ($event: any) => {
        console.log($event.target.value);
        const { name, value } = $event.target;
        setForm({
            ...form,
            [name]: value,
        })
        console.log(form);
    };
    const handleSubmit = (e: any) => {
        debugger
        if (form.email) {
            POST(urlLogin, form)
            e.preventDefault();
            setForm(initialForm);
        }
        else{
            e.preventDefault();
            setForm(form);
        }
    };

    const handleBlur = (e: any) => {
        handleChange(e);
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
        <div className="mb-4">
            <input 
                className="text-black"
                onChange={handleChange} 
                onBlur={handleBlur}
                type="email" 
                required
                name="email"
                id="email"
            />
        </div>
        <div className="form__control">
            <input 
                className="text-black"
                onChange={handleChange} 
                onBlur={handleBlur}  
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