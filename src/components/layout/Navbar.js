import React, { useEffect } from 'react'
import GuideCard from './GuideCard';
import M from 'materialize-css';

const Navbar = () => {

  useEffect(() => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
  })

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <div className="brand-logo brand-logo center">Planning Poker</div> 
      </div>
      <a className="modal-trigger right mr-20" href="#guide-card-modal" title="Getting Started">
          <i className="material-icons">help_outline</i>
      </a>

      <div id="guide-card-modal" className="modal">
        <div className="modal-content">
          <GuideCard />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;