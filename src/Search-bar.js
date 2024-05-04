import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
function Searchbar(props){
    const {setarr}=props;
    const [value,setvalue]=useState("");
    let datafetch=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            let result= json.filter(user=>{
            return (user.name.toLowerCase().includes(value));
           });
           setarr(result);
           console.log(result)
    })
    }
    let handlechange=(event)=>{
         setvalue(event.target.value);
         datafetch();
    }
    return(
         <div className="search">< BiSearchAlt id='icon'/><input type="search" value={value} onChange={handlechange} placeholder='type to seach.....'/></div>
    );
}
export default Searchbar;