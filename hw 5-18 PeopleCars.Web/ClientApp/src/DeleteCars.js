import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class DeleteCars extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            cars: []
        }
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`/api/peopleCar/getPersonById?id=${this.props.match.params.personId}`);
        this.setState({ person: data });
    }

    onDelete =  async () => {
            await axios.post('/api/peopleCar/deleteCars', this.state.person);
            this.props.history.push('/');
        }

    render() {
        const { firstName, lastName } = this.state.person
        return (
            <div className="container" style={{ marginTop: 60 }}>

                <h1 style={{ textAlign: "center" }}> Cars belonging to {firstName} {lastName}</h1>

                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.person.cars.map((p, i) =>
                            <tr key={i}>
                                <td>{p.make}</td>
                                <td>{p.model}</td>
                                <td>{p.year}</td>
                            </tr>)}
                    </tbody>
                </table>

                <h1>Are you sure you want to delete all of these cars?</h1>
                <button className="btn btn-danger" onClick={this.onDelete}>YES</button>
                <Link to='/'><button className="btn btn-info">NO</button></Link>

            </div>

        )
    }

}

export default DeleteCars;