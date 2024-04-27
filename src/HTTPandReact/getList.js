import React, { Component } from 'react';
import axios from 'axios';

export class GetList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data })
                // console.log(this.state.posts)

            })
            .catch(error => console.log('What error', error))
    }

    render() {
        const { posts } = this.state

        return (
            <div>
            List Of items
            {posts.map(item => <div key={item.id}>{item.title}</div>)}
            </div>
        )
    }
}

export default GetList