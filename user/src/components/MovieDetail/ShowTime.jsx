import React, { useState } from "react";

const ShowTime = ({ time, seats, setOpenModal }) => {
    return (
        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5 text-center">
            <a className="showtimes btn default" onClick={setOpenModal} >{time}</a>
            <div className="font-smaller padding-top-5">{seats}  ghế trống</div>
        </div>
    );
};

export default ShowTime;