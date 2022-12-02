import { Typography, FormControl, FormGroup, InputLabel,Input , Button,styled} from "@mui/material";
import { useState } from "react";
import {addUser} from "../Service/api";
import {useNavigate} from "react-router-dom"
const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Contain= styled(FormGroup)`
width:50%;
margin:5% 0 0 25%;
& > div {
    margin-top: 20px;
`

const AddUser =()=>{
    const [user, setUser] = useState(initialValue);
    const navigate =useNavigate();
    const onValueChange=(e)=>{
       
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    const addUserDetails= async()=>{
       await addUser(user);
       navigate('/all');
    }
    return(
        <Contain>
            <Typography variant="h4">Add User</Typography>
          <FormControl>
            <InputLabel>name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}  name="name"/>
          </FormControl>
          <FormControl>
            <InputLabel>username</InputLabel>
            <Input onChange={(e) =>onValueChange(e)} name="username"  id="my-input"/>
          </FormControl>
          <FormControl>
            <InputLabel>email</InputLabel>
            <Input onChange={(e) =>onValueChange(e)} name="email"  id="my-input" />
          </FormControl>
          <FormControl>
            <InputLabel>phone</InputLabel>
            <Input onChange={(e) =>onValueChange(e)} name="phone"  id="my-input" />
          </FormControl>
          <FormControl>
            <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
          </FormControl>
            </Contain>
    )
}
export default AddUser;