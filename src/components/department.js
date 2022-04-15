import React from "react";

function Department(props) {
  return (
    <main>
        <h1>Department</h1>
        <div>
        <label >Department Name</label>
        <input type="text"  id="Department Name"  />
        </div>
        <div>
        <label >Location </label>
        <input type="text"  id=" Location"  />
        </div>
        <div>
        <label >Supervisor ID</label>
        <input type="date"  id="Supervisor ID"  />
        </div>
        
       
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

export default Department;