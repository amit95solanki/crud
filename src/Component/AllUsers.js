import { Table, TableBody, TableHead, TableRow,TableCell, styled, Button} from "@mui/material";
import {getUsers , deleteUser} from "../Service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


 const AllUsers =()=>{

    const [users, setUsers]= useState([])

      useEffect(()=>{
     getUserDetails(); 
      },[])
      
     const getUserDetails = async()=>{
        let response =await getUsers();
        console.log(response)
        setUsers(response.data)
    }

    const deleteUserData= async(id)=>{
        await deleteUser(id);
        getUserDetails()
    }
    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
                </TableHead>
                <TableBody>
                      {
                        users.map((user) => (
                            <TRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{marginRight:10}} component={Link}  to={`/edit/${user.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                                </TableCell>
                            </TRow>
                        ))
                      }
                </TableBody>
           
        </StyledTable>
    )
}
export default AllUsers ;