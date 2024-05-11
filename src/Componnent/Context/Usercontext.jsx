

import { useState, useEffect, createContext} from "react";
import { jwtDecode } from 'jwt-decode'

export let UserContext = createContext();

export default function UserContextProvider(props) {
    let[Usertoken,Settoken]=useState(null)
    let[Usertoken1,Settoken1]=useState(null)
 /////////////////////////////
  const [email, setEmailuser] = useState("");
    //   let data=null
    // useEffect(()=>{
    //     if(Usertoken!=null){
    //    data= jwtDecode(Usertoken)
    //       console.log(data);
    //     }
        
    //     },[])
   
  return (
    <UserContext.Provider
      value={{
        Usertoken,
        Settoken,
        email,
        setEmailuser,
        // data,
        Usertoken1,
        Settoken1
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
