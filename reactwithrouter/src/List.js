import React from 'react';
import {Link} from 'react-router';

class List extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            jsonData: props.route.propsdata
        }
    }
    render() {

        var users = this.state.jsonData.users;

        const line = users.map ((user, index) => {
            return (
                <tr key={index}>
                    <td><img src={user.picture.thumbnail}/></td>
                    <td>{user.first + " "+ user.last}</td>
                    <td><Link to={"/details/"+index}>
                        <button>Details</button>

                    </Link></td>
                </tr>
            )
        });


        return (
            <div>
                 {line}
            </div>
        )
    }



}

export default List;