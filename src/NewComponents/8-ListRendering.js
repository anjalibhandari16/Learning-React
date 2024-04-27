import React, { Component } from "react";

class ListRendering extends Component {
    render() {
        const names = ["Bruce", "Clark", "Diana"];
        const person =
            [

                {
                    id: 1,
                    name: "Bruce",
                    age: 27,
                    skill: 'React'
                },
                {
                    id: 2,
                    name: "Clark",
                    age: 21,
                    skill: 'JS'
                },
                {
                    id: 3,
                    name: "Diana",
                    age: 30,
                    skill: 'JSX'
                }
            ]

        const nameList = names.map(i => <h2 key={i}>{i}</h2>);
        const personList = person.map(i => <div key={i.id}>
            <h2>{i.name}</h2> is <i>{i.age}</i> years old, with talent in <b>{i.skill}</b>
        </div>)

        return (<div>{personList}</div>);
    }
}

export default ListRendering;
