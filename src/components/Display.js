import React, { useState } from "react";

function Display(props) {
  // const [displays,setdisplays] = useState([{name:"sachin",age:22}]);
  const { displays } = props;
  return (
    <div>

<h1> Person details</h1>

             

        <h1>
        name:{displays.name}

        </h1>
        <h1>
        age:{displays.age}

        </h1>

      
    </div>
  );
}

export default Display;
