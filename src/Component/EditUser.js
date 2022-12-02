import { Typography, FormControl, FormGroup, InputLabel,Input , Button,styled} from "@mui/material";
import { useState, useEffect } from "react";
import {getUser,editUser} from "../Service/api";
import {useNavigate,useParams} from "react-router-dom"
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

const EditUser =()=>{
    const [user, setUser] = useState(initialValue);
    const navigate =useNavigate();
    const {id}= useParams();

useEffect(()=>{
   getUserData();
},[])

const getUserData =async()=>{
 const response= await getUser(id);
 console.log(response)
 setUser(response.data);
}
    const onValueChange=(e)=>{
       
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
        
    }
    const addUserDetails= async()=>{
       await editUser(user,id);
       navigate('/all');
    }
    return(
        <Contain>
            <Typography variant="h4">Edit User</Typography>
          <FormControl>
            <InputLabel>name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}  name="name" value={user.name}/>
          </FormControl>
          <FormControl>
            <InputLabel>username</InputLabel>
            <Input onChange={(e) =>onValueChange(e)} name="username" value={user.username} id="my-input"/>
          </FormControl>
          <FormControl>
            <InputLabel>email</InputLabel>
            <Input onChange={(e) =>onValueChange(e)} name="email" value={user.email} id="my-input" />
          </FormControl>
          <FormControl>
            <InputLabel>phone</InputLabel>
            <Input onChange={(e) =>onValueChange(e)} name="phone"  value={user.phone} id="my-input" />
          </FormControl>
          <FormControl>
            <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
          </FormControl>
            </Contain>
    )
}
export default EditUser;