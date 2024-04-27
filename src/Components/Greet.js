import React from 'react';

// function Greet(){
//     return <h1>Hellooo Lousy World</h1>
// }


// const Greet = () =>
// {
//     return(
//         // React.createElement('div',null,'Hello World 1234')
//         React.createElement('div',null,
//         React.createElement('h1',null,'hellooo world1234'))

// )
// }


const Greet = props =>{
    console.log(props);
    return(
        <div>
            <h1>Hellooo111 {props.name}</h1>
            {props.children}
        </div>
    )
}






export default Greet;