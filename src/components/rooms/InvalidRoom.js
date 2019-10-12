import React from 'react';

const InvalidRoom = () => {
    return (
        <div className="container center-align">
            <i className="material-icons large">broken_image</i>
            <h3>Oops, looks like this room doesn't exist...</h3>
            <h5>Star over by clicking <a href="/createUser">here.</a></h5>
        </div>
    )
}

export default InvalidRoom