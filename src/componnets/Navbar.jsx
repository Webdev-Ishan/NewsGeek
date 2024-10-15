import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [search,setsearch]= React.useState("");
  function handlesubmit(e) {
   e.preventDefault();
    alert('The search functionality is still under development phase.');
setsearch("");
  }


  return (
    <nav class="navbar navbar-expand-lg  bg-primary mb-50 bg-primary text-white " data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://newsapi.org/"><span class="badge text-bg-light">NewsGeek</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to={"/Science"}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Science
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to={"/Business"}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Business
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to={"/Sports"}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Sports
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              to={"/Acting"}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Entertainment
            </NavLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2 bg-white text-dark" type="search" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Search" 
          
          aria-label="Search"  />
          <button class="btn btn-outline-success bg-success text-white" type="submit" onClick={handlesubmit}>Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;