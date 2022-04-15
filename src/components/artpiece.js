import React from "react";

function Art_Piece(props) {

  return (
    <main>
        <h1>Art Piece</h1>
        <div>
        <label >Art Piece ID</label>
        <input type="text"  id="Art Piece ID"  />
        </div>
        <div>
        <label >Art Piece Title</label>
        <input type="text"  id="Art Piece Title"  />
        </div>
        <div>
        <label >Date Created</label>
        <input type="date"  id="Date Created"  />
        </div>
        <div>
        <label >Medium</label>
        <input type="text"  id="Medium"  />
        </div>
        <div>
        <label >Creator First Name</label>
        <input type="text"  id="Creator First Name"  />
        </div>
        <div>
        <label >Creator Last Name</label>
        <input type="text"  id="Creator Last Name"  />
        </div>
        <div>
        <label >Art Piece Title</label>
        <input type="text"  id="Art Piece Title"  />
        </div>
        <div>
        <label >Being Refurbished</label>
        <input type="text"  id="Being Refurbished"  />
        </div>
        <div>
        <label >On Display</label>
        <select name="cars" id="cars">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        </select>
        </div>
        <div>
        <label >Year Acquired</label>
        <input type="date"  id="Year Acquired"  />
        </div>
        <div>
        <label >Culture</label>
        <input type="text"  id="Culture"  />
        </div>
        <div>
        <label >Piece Height</label>
        <input type="text"  id="Piece Height"  />
        </div>
        <div>
        <label >Piece Length</label>
        <input type="text"  id="Piece Length"  />
        </div>
        <div>
        <label >Piece Width</label>
        <input type="text"  id="Piece Width"  />
        </div>
        <div>
        <label >Gallery Location</label>
        <input type="text"  id="Gallery Location"  />
        </div>
        <div>
        <label >Exhibit ID</label>
        <input type="text"  id="Exhibit ID"  />
        </div>
    
        <button className="submit">Submit</button>
     
    </main>
  );
}


export default Art_Piece;
