import React from 'react'
import {v4 as uuidv4} from 'uuid'
import User from './User'
const Users = (props) => {
  return (
    <section className="users">
       {props.users.map((user)=>{
            // console.log(user.name);
        const userNew= {user, id: uuidv4()}    
        //  console.log(userNew);    
        return <User {...userNew} key={userNew.id} onRemoveUser={props.onRemoveUser}/>
      })}
      </section>
  )
}

export default Users