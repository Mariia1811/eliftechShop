import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SideBar.module.scss';

function SideBar() {
  return (
    <aside className={s.sectionSidebar}>
      <div className={s.sidebarList}>
        <p className={s.title}>Shops:</p>
        <NavLink href="/" className={s.link}>
          MCDonald's
        </NavLink>
        <NavLink href="/" className={s.link}>
          CFS
        </NavLink>
        <NavLink href="/" className={s.link}>
          MacAfee
        </NavLink>
        <NavLink href="/" className={s.link}>
          McLaren
        </NavLink>
      </div>
    </aside>
  );
}

export default SideBar;
