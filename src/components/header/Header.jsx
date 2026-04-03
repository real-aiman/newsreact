import Nav from "./Nav"
import { useState } from "react"
export default function Header({ getKeywords }) {

   const [active, setActive] = useState(false);
   const [keywords, setkeywords] = useState("");
   const onChangeHandler = (event) => {
     const value = event.target.value;
     setkeywords(value);
     setActive(value === '' ? false : true);
     
     if(getKeywords) {
        getKeywords(event);
     }
   }

   return (
       <>
       {/* 3. Style conditional template literal se handle ki */}
       <header style={{ background: active ? "#FA8112" : " #FFCDB2" }}>
           <div className="logo"
            onClick={() => console.log("logo clicked")}
            onPointerEnter={(e) => console.log("Pointer Entered")} 
           >
            AWESOME NEWS
           </div>
           <input 
             type="text" 
             onChange={onChangeHandler} 
             value={keywords} 
           />

           <Nav />
       </header>
       </>
   )
}