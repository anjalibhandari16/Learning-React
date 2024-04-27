import React,{useState} from 'react';

function IncrementFunctionComponent (){

    const [val=0,setVal] = useState();

    const increment = () => {
        setVal(val+1);
    }

    console.log(val,'val')

    return(
        <div>
            Hello There
            <br/>
            <button onClick={()=>increment()}>Click Me</button>
            <br/>{val}
        </div>
    )
}

export default IncrementFunctionComponent;