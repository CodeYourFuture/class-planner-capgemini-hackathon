import React from "react";


const Navbar = () => {
  return (
    <header className="navbar">
            
      <div>
                
        <img className="logo" src="cyf-logo.png" alt="Logo" />
              
      </div>
            
      <div>
                
        <input className="search-bar" type="text" placeholder="SEARCH"></input>
              
      </div>
            
      <div className="add-edit-delete">
                <button>Add/Edit/Delete</button>
              
      </div>
          
    </header>
  );
};
export default Navbar;
