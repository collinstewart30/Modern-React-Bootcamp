import React, {Component} from "react";
import './Dog.css';
import puppy from './puppy.jpg'

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h1>Dog!</h1>
                <img className="Dog-img" src={puppy} alt="puppy" />
            </div>
        )
    }
}

export default Dog;