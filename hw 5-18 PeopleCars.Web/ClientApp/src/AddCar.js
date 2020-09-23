import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddCar extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: ''
        },
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
        }
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`/api/peopleCar/getPersonById?id=${this.props.match.params.personId}`);
        this.setPersonId(data.id);
        this.setState({ person: data });
    }

    setPersonId = id => {
        const nextState = produce(this.state, draft => {
            draft.car.personId = id;
        });
        this.setState(nextState);
    }

    onTextChange = e => {
        const nextState = produce(this.state, draft => {
            draft.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onYearChange = e => {
        const nextState = produce(this.state, draft => {
            draft.car.year = parseInt(e.target.value);
        });
        this.setState(nextState);
    }

    onSubmit = async () => {
        await axios.post('/api/peopleCar/addCar', this.state.car);
        this.props.history.push('/');
    }
   
    render() {
        const {firstName, lastName} = this.state.person
        return (
            <div className="container" style={{ marginTop: 60 }}>

                <h1 style={{textAlign: "center"}}> Add a car for {firstName} {lastName}</h1>


                <div className="col-md-6 offset-3 card card-body card-light">
                    <input className="form-control" type="text" placeholder="Make"
                        onChange={this.onTextChange} name='make' />
                    <br />
                    <input className="form-control" type="text" placeholder="Model"
                        onChange={this.onTextChange} name='model' />
                    <br />
                    <input className="form-control" type="text" placeholder="Year"
                        onChange={this.onYearChange} name='year' />
                    <br />

                    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

                </div>

            </div>

        )
    }
}

export default AddCar;