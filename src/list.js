
import React from "react";

const List=({todos,deletHandler})=>{
 return(
    <div >
        {todos.map((item,index)=>
            <div  id="items-of-todo" key={index}>
          {item !== "" ? <h3 ><span id="disc-symbol">&#x2022;</span> {item} &nbsp;  <button onClick={()=>deletHandler(index)}>Delete</button></h3>:""}
            </div>
        )}
    </div>
 )
}
export default List;

