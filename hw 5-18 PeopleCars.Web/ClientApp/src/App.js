import React from 'react';
import { Route } from 'react-router';
import PeopleTable from './PeopleTable';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';

const App = () => {
    return (
        <div>
            <Route exact path='/' component={PeopleTable} />
            <Route exact path='/addPerson' component={AddPerson} />
            <Route exact path='/addCar/:personId' component={AddCar} />
            <Route exact path='/deleteCars/:personId' component={DeleteCars} />
        </div>
    )
}

export default App;