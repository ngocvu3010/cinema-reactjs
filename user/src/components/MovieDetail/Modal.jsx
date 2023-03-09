import React from 'react';
import { useState } from 'react';
import './modal.scss'

const Modal = ({ open, onClose ,  movie }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer">
          <div className="modal-header">
              <h3 className="no-padding no-margin">
                  BẠN ĐANG ĐẶT VÉ XEM PHIM
              </h3>
          </div>
          <div className="modal-body">
            <h1 className="color1 text-center"> {movie.name} </h1>
            <table className="table table-striped table-hover">
              <thead>
                  <tr>
                      <th className="text-center">
                          <h4>Rạp chiếu</h4>
                      </th>
                      <th className="text-center">
                          <h4>Ngày chiếu</h4>
                      </th>
                      <th className="text-center">
                          <h4>Giờ chiếu</h4>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-center font-lg bold">
                          <h3 className="font-xs-small">
                            <span><span className="bold">Beta Thái Nguyên</span></span>
                          </h3>
                      </td>
                      <td className="text-center font-lg bold">
                          <h3 className="font-xs-small">
                            <span><span className="bold">13/03/2023</span></span>
                          </h3>
                      </td>
                      <td className="text-center font-lg bold">
                          <h3 className="font-xs-small"><span><span className="bold">17:15</span></span>
                          </h3>
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="btn btn-2"> ĐỒNG Ý </button>
            <button onClick={onClose} className="btn btn-2"> ĐÓNG</button>
          </div>
      </div>
    </div>
  );
};

export default Modal;
