import React from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
import {user} from "./users.js";

const UserProfile=()=>{
    const {id} = useParams();
    const myUser = user.find( myUser=> myUser.id === parseInt(id , 10));

    if(!myUser) return(
        <div > Unable to find user! </div>
    )

    return(
        <div>
            User Name: {myUser.name}
            <br></br>
            <Link to="/">Return to main page</Link>
        </div>
    )
}

export default UserProfile;