import React, { Component } from 'react';
import Person from "./Person";

export default class PersonList extends Component {
    render() {
        const people = [
            {
                img: 1,
                name: "Bob",
                job: "Designer"
            }, 
            {
                img: 2,
                name: "Oktan",
                job: "Project Manager"
            },
            {
                img: 3,
                name: "Luke",
                job: "HR-Manager"
            },
            {
                img: 4,
                name: "Ted",
                job: "Programmer"
            },
            {
                img: 5,
                name: "Tony",
                job: "Programmer"
            },
            {
                img: 6,
                name: "Kayle",
                job: "Project Manager"
            },
            {
                img: 7,
                name: "Peter",
                job: "HR-Manager"
            },
            {
                img: 8,
                name: "Michael",
                job: "Boss"
            }
        ];
        return (
            <section className="row mx-auto">
                {people.map(item => {
                    return (
                        <Person 
                            img={item.img}
                            name={item.name}
                            job={item.job}
                        />
                    )})
                }
            </section>
        )
    }
};