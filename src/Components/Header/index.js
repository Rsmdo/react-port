import React from 'react';
import Nav from '../Nav';
import snow from '../../images/header-background.jpg';

function Header(props) {
    const { currentCategory, setCurrentCategory } = props;
    return (
        <header className='d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end p-2' style={{backgroundImage: `url(${snow})`, backgroundSize: 'cover'}}>
            <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        </header>
    );
}

export default Header;