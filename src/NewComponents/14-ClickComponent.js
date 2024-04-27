import React, {Component} from 'react';
import WrappedComponent from './16-HigherOrderFunction';

class ClickComponent extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count : 0
    //     }
    //   }
  
    // countHandler = () => {
    //       this.setState( prevState => {
    //           return { count : prevState.count +1 }
    //       })
    //   }
  

    // clickHandler = () => {
    //     this.setState({clickCounter:this.state.clickCounter+1}
    //     )
    // }


    render(){
        const {count,countHandler} = this.props;
        return (
            <>
            {this.props.name}
            <button onClick={countHandler}>Clicked {this.props.count} Times</button><br/>
            </>
          )
    }
  
}

export default WrappedComponent(ClickComponent,10)