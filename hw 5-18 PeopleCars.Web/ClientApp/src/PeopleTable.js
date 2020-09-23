import React from 'react';
import PersonRow from './PersonRow';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PeopleCars extends React.Component {

    state = {
        people: [],
        filter: ''
    }

    componentDidMount = async () => {
        const response = await axios.get('/api/peopleCar/getPeople');
        this.setState({ people: response.data });
    }


    render() {

        const { people, filter } = this.state;
        const filteredPeople = people.filter(p => p.firstName.includes(filter) || p.lastName.includes(filter))

        return (
            <div className="container" style={{ marginTop: 60 }}>

                <input className="form-control" type="text" placeholder="Enter Filter Request"
                    onChange={e => this.setState({ filter: e.target.value })} /><br />

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
                        {filteredPeople.map(p => <PersonRow
                            key={p.id}
                            person={p} />)}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default PeopleCars;