import {useState} from 'react'
import axios from 'axios'

const Register = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.table({name, email, password});
        const {data} = await axios.post(`http://locahost:8000/api/register`, {name, email, password});
        console.log('Response to register', data)
    }

    return(
        <>
            <h1 className="jumbotron text-center bg-primary round-corner"> Register</h1>

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input type="name" className="form-control mb-4 p-3" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" required/>
                    <input type="email" className="form-control mb-4 p-3" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" required/>
                    <input type="password" className="form-control mb-4 p-3" value={password} onChange={e => setPassword(e.target.value)} placeholder="Set a Password" required/>
                    <button type='submit' className="btn w-100 btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}
export default Register;