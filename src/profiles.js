import React from "react";
import {user} from "./users.js";
import {Link} from "react-router-dom";

const profilePages= ()=>{
return(
    <>
    <div>
        <h1>Profile Pages Of Users</h1>
    </div>
    <div>
        <ul>
            {
              user.map(myUsers=>(
                <li key={myUsers.id}>
                    <Link to={`profiles/${myUsers.id}`}>{myUsers.name}</Link>
                </li>
                
              ))  
            }
        </ul>
    </div>
    </>
)
}




export default profilePages;