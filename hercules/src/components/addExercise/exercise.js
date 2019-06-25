import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = (props) => {
    return(
        <div>
            <Link to = {`/exercises/${props.exercise.id}`}>
                <h1>{props.exercise.name}</h1>
            </Link>
        </div>
    )
}

export default Exercise;