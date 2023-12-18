import React from 'react'

const User = (props) => {
  const {name, email, phone, id} = props.user;
  const handleDelete= (id) =>{
    props.onRemoveUser(id);
  }
  
  return (
    <article className="user">
     <h3>{props.user.id}</h3>
     <h3 className="user__name">{name}</h3>
      <p className="user__email">{email}</p>
      <a className="user__phone" href={'tel:+' +phone}>
        {phone}
      </a>
      <button onClick={()=>{
        handleDelete(id);
      }}>Delete</button>
    </article>
  )
}

export default User