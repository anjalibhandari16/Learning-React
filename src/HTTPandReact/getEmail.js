import React, { Component } from 'react';
import axios from 'axios';

class GetEmail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailList: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                console.log(response)
                this.setState({ emailList: response.data })
            })
            .catch(error => {
                console.log('ITs Errorrr');
                this.setState({ errorMessage: 'ITs Errorrr' })
            })

    }
    render() {
        const { emailList, errorMessage } = this.state
        return (
            <>
                {emailList.length ?
                    emailList.map(item => <div key={item.id}>{item.email}</div>)
                    : null}
                {errorMessage ?
                    <div>Sorry Unable to Retirve Emails</div>
                    : null}
            </>
        )
    }
}

export default GetEmail