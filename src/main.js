import React from 'react';

const Main = ({ adds, resta }) => <h1 className="text-danger">Hello <i className="fas fa-globe fa-5x"></i> world {adds(5, 5)} {resta(23, 6)}</h1>;

export default Main;