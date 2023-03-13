import React from 'react';

const MovieInfo = ({ label, content}) => {
    return (
        <div className="row font-lg font-family-san font-xs-14">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-6">
                <span className="bold font-transform-uppercase"> {label} </span>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-xs-10"> {content} </div>
        </div>
    );
};

export default MovieInfo