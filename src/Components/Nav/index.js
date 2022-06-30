import React from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = ({ setActivePage, activePage }) => {
  const handlePage = (e) => {
    if (e.target.innerText === 'About me') {
      setActivePage({ about: true });
    } else if (e.target.innerText === 'Portfolio') {
      setActivePage({ portfolio: true });
    } else if (e.target.innerText === 'Contact') {
      setActivePage({ contact: true });
    }
  };
  return (
    <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a data-testid="about" href="#About" onClick={() => handlePage(false)}>
          About me
        </a>
      </li>
      <li >
        <span onClick={() => handlePage(true)}>Contact</span>
      </li>
        <li
        >
          <span
          >
            {capitalizeFirstLetter(activePage.name)}
          </span>
        </li>
      ))
    </ul>
  </nav>
  );
};

export default Nav;