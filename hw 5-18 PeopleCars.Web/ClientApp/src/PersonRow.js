import React from 'react';
import { Link } from 'react-router-dom';

function PersonRow(props) {
    const { id, firstName, lastName, age } = props.person;
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>//Display amount of cars</td>
            <td><Link to={`/addCar/${id}`}><button className="btn btn-success">Add Car</button></Link></td>
            <td><Link to={`/deleteCars/${id}`}><button className="btn btn-danger">Delete Cars</button></Link></td>
        </tr>
    )
}

export default PersonRow;