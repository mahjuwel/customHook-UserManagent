import { useEffect, useState } from 'react';
import './index.css';
import Users from './components/Users';
import Search from './components/Search';
import useFetch from './components/useFetch';


const App = () =>{

const {data, isLoading, error}=useFetch("https://jsonplaceholder.typicode.com/users");
const [filteredUsers, setFilteredUsers]= useState([]);
const handleRemoveUser= (id) =>{
  const filter= filteredUsers.filter((filteredUser) => filteredUser.id!==id);  
  setFilteredUsers(filter);
 
}
useEffect(() => {

setFilteredUsers(data); 
  
}, [data])

const handleSearch = (searchText) => {
  let value= searchText.toLowerCase();
  const newUsers = data.filter((user)=>{
    const userName= user.name.toLowerCase();
    return userName.startsWith(value);
  });
  setFilteredUsers(newUsers);


};
  

  return (
    <div className="container">
    <h1>Users Management</h1>
    
    <Search onSearch={handleSearch}/>
   {error && <h2>{error}</h2>}
   {isLoading && <p>Data is Loading... Please wait.</p>}

    {filteredUsers.length > 0 && <Users users={filteredUsers} onRemoveUser={handleRemoveUser} />}
    
    </div>
  );
}

export default App;
