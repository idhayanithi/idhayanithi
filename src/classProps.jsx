import React from "react";

class ClassProps extends React.Component{
    render()
    {
        let name2 = {name:"Bharathi",age:28}
        return(
            <div>
                <h1>Your name is{this.props.name}</h1>
                {<classProps2/>}
            </div>
        );
    }
}
export default ClassProps