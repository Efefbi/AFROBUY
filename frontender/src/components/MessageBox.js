/*import React from "react";
export default function MessageBox(probs){
    return(
     <div className = {`alert alert-${probs.variant || 'info'}`}>
         {probs.children}
     </div>
    );
}*/
import React from 'react';

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}