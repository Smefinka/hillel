import { useState } from 'react';


function User({name, onChangeName}){
    const [userName, setUserName] = useState(name);
function changeName(){
    if(userName === name){
        setUserName('Vasya')
    }else{
        setUserName(name)
    }
   
}
    return(
        <>
        <div>
            <h3>User name: {userName}</h3> 
            <button onClick={changeName}>Change Name</button>
            <button onClick={onChangeName}>ParentChangeName</button>
        </div>
        </>
    )
}
export default User;