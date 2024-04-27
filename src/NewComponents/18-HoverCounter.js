import React, { Component } from 'react'

class HoverCounter extends Component {

    render() {
        const{count,clickHandle} = this.props;

        return (
        <h2 onMouseOver={clickHandle}>Hovered {count} Times</h2>
        )
    }
}

export default HoverCounter