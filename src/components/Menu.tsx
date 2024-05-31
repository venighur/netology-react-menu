import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  const setActive = (isActive: boolean) => {
    return `menu__item ${isActive ? 'menu__item-active' : ''}`;
  }

  return (
    <nav className="menu">
      <NavLink className={({ isActive }) => setActive(isActive)} to="/">Главная</NavLink>
      <NavLink className={({ isActive }) => setActive(isActive)} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={({ isActive }) => setActive(isActive)} to="/timeattack">Time Attack</NavLink>
      <NavLink className={({ isActive }) => setActive(isActive)} to="/forza">Forza Karting</NavLink>
    </nav>
  );
}

export default Menu;
