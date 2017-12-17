/**
 * Created by Bruger on 17-12-2017.
 */
import React from 'react';
import {Link} from 'react-router';

class Details extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            jsonData: props.route.propsdata
        }
    }
    render() {

        var person = this.state.jsonData.users[this.props.params.id];

        return (
            <div>

                <h1>Details for {person.first + " " + person.last}</h1>
                <table>
                    <tr>
                        <td>Gender</td>
                        <td>{person.gender}</td>
                    </tr>
                    <tr>
                        <td>First name</td>
                        <td>{person.first}</td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>{person.last}</td>
                    </tr>
                    <tr>
                        <td>Street</td>
                        <td>{person.street}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{person.city}</td>
                    </tr>
                    <tr>
                        <td>Zip code</td>
                        <td>{person.zip}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{person.phone}</td>
                    </tr>
                    <tr>
                        <td>Cell phone</td>
                        <td>{person.cell}</td>
                    </tr>
                    <tr>
                        <td>Email address</td>
                        <td>{person.email}</td>
                    </tr>
                    <tr>
                        <td><img src={person.picture.large}/></td>
                    </tr>
                </table>

                <Link to={"/list/"}>
                    <button>Back</button>
                </Link>

            </div>
        )
    }



}

export default Details;