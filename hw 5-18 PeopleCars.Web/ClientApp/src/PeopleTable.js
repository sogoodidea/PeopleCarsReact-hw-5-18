import React from 'react';
import PersonRow from './PersonRow';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PeopleCars extends React.Component {

    state = {
        people: []
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/peopleCar/getPeople');
        this.setState({ people: response.data });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <Link to='/AddPerson'>
                    <button className="btn btn-primary">Add Person</button>
                </Link><br /><br />

                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(p => <PersonRow
                            key={p.id}
                            person={p} />)}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default PeopleCars;