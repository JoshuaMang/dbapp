import React from "react";

function Customer_Info(props) {
  return (
    <main>
        <h1>Customer</h1>
        <div>
        <label >Customer ID</label>
        <input type="text"  id="Customer ID"  />
        </div>
        <div>
        <label >Customer First Name</label>
        <input type="text"  id="Customer First Name"  />
        </div>
        <div>
        <label >Customer Middle Name</label>
        <input type="date"  id="Customer Middle Name"  />
        </div>
        <div>
        <label >Customer Last Name</label>
        <input type="text"  id="Customer Last Name"  />
        </div>
        <div>
        <label >Membership Status</label>
        <input type="text"  id="Membership Status"  />
        </div>
        <div>
        <label >Customer Username</label>
        <input type="text"  id="Customer Username"  />
        </div>
        <div>
        <label >Customer Password</label>
        <input type="text"  id="Customer Password"  />
        </div>
        <div>
        <label >Customer Email</label>
        <input type="text"  id="Customer Email"  />
        </div>
       
    
        <button className="submit">Submit</button>
     
    </main>
  );
}

export default Customer_Info;