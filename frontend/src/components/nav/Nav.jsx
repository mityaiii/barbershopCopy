import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import React, { useState } from 'react';
import style from './Nav.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <NavLink onClick={ () => setNav(false) } to={ '/#info-point' }>Информация</NavLink>
            <NavLink onClick={ () => setNav(false) } to={ '/news-list' }>Новости</NavLink>
            <NavLink onClick={ () => setNav(false) } to={ '/price-list' }>Прайс-лист</NavLink>
            <NavLink onClick={ () => setNav(false) } to={ '/market' }>Магазин</NavLink>
            <HashLink onClick={ () => setNav(false) } to={ '/#contacts-point' }>Контакты</HashLink>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
