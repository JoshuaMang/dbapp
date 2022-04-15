import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
      <h1>Museum Database</h1>
      <br></br>
    <li>
      <Link to="/artpiece">Art Piece</Link>
    </li>
    <li>
      <Link to="/artpiece">Art Piece Archive</Link>
    </li>
    <li>
      <Link to="/Customer">Customer</Link>
    </li>
    <li>
      <Link to="/department">Department</Link>
    </li>
  </div>
  );
}
export default Navbar;