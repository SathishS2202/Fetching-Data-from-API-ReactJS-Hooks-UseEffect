import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css'
function UserDemo()
{
    const[users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data=>
        {
            setUsers(data);
            setLoading(false);
        })
            
       
        .catch(error => {
            console.log("if it is not loading, will be error message");
            setLoading(false);
        });
    },[])
    if(loading)
    {
        return <p>Loading</p>
    }
    return(
        <div className="container">
            <h1>List the users in API</h1>
            <ul>
                {users.map(user =>
                    (
                        <li key ={user.name}>{user.name}</li>
                    )
                )}
            </ul>
        </div>
    )
}
ReactDOM.render(<UserDemo/>,document.getElementById("root"));