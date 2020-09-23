import React from 'react';
import { produce } from 'immer';
import axios from 'axios';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const nextState = produce(this.state, draft => {
            draft.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onAgeChange = e => {
        const nextState = produce(this.state, draft => {
            draft.person.age = parseInt(e.target.value);
        });
        this.setState(nextState);
    }

    onSubmit = async () => {
            await axios.post('/api/peopleCar/addPerson', this.state.person);
            this.props.history.push('/');
        }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="col-md-6 offset-3 card card-body card-light">
                    <input className="form-control" type="text" placeholder="First Name"
                        onChange={this.onTextChange} name='firstName' />
                    <br />
                    <input className="form-control" type="text" placeholder="Last Name"
                        onChange={this.onTextChange} name='lastName' />
                    <br />
                    <input className="form-control" type="text" placeholder="Age"
                        onChange={this.onAgeChange} name='age' />
                    <br />

                    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    
                </div>
            </div>
        )
    }
}

export default AddPerson;