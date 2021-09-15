import React from 'react';
import PropTypes from 'prop-types';
import photo from 'src/assets/Idphoto.png';
import Typed from 'react-typed';

import './styles.scss';


const NavBar = ({
}) => (
  <>
    <div className="main">
      <div className="main_container">
      <div className="main_text">
      <p className="main_text_prez">Bienvenue, je m'appelle Antoine Noix,</p>
      <Typed 
                strings={[
                    'Je suis développeur fullstack JS',
                    'Je suis intégrateur']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                </div>
        <img className="main_img" src={photo} alt=""/>
      </div>
      <h1>salut a tous</h1>

    </div>
  </>
);

NavBar.propTypes = {
};

export default NavBar;
