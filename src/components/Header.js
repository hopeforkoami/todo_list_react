import React from 'react';
import { HiRefresh } from 'react-icons/hi';

const Header = () => (
  <Header class="todoelement title_div">
    <span className="div_text">Todays To Do </span>
    <div className="refresh_div" />
    <HiRefresh />
  </Header>

);

export default Header;
