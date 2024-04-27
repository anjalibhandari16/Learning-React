import React from 'react'

function EventHandingClick() {

    const changeEvent = () => console.log('Button is pressed ---> Functional')

    return (
        <button onClick={changeEvent}>Click Me --{`>`} Functional</button>
    )
}

export default EventHandingClick