import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContextprovider } from '../Context/Contex';

const Book = () => {
    const {bedType} = useParams();
    const {loggedInUser,setLoggedInUser}=UserContextprovider()
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hellow {loggedInUser.name} Let's book a {bedType} Room.</h1>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;