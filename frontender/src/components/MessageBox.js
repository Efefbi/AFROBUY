import React from "react";
export default function MessageBox(probs){
    return(
     <div className = {`alert alert-${probs.variant || 'info'}`}>
         {probs.children}
     </div>
    );
}