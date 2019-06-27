import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = (props) => {
    return(
        <div>
            <Link to = {`/exercises/${props.exercises.id}`}>
                <h1>{props.exercises.name}</h1>
            </Link>
        </div>
    )
}

export default Exercise;