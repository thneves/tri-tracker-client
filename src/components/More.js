import React from 'react';
import Logout from '../containers/Logout';
import Navbar from './Navbar';
import '../styles/components/More.scss';

const More = () => (
  <>
    <Logout text="support us :)" />
    <div className="more-div">
      <h3>
        Design idea by
        {' '}
        <a rel="noreferrer" href="https://www.behance.net/gregoirevella" target="_blank">Gregoire Vella</a>
      </h3>
      <br />
      <br />
      <h4>
        Developed by
        {' '}
        <a rel="noreferrer" href="https://github.com/thneves" target="_blank">Me</a>
      </h4>
    </div>
    <Navbar />
  </>
);

export default More;
