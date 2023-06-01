import { NavLink } from 'react-router-dom';
import s from './SideBar.module.scss';

function SideBar() {
  return (
    <aside className={s.sectionSidebar}>
      <div className={s.sidebarList}>
        <p className={s.title}>Shops:</p>
         <NavLink href="/" className={s.link}>
          All Shops
        </NavLink>
        <NavLink href="/" className={s.link}>
          MCDonald's
        </NavLink>
        <NavLink href="/" className={s.link}>
          KFC
        </NavLink>
        <NavLink href="/" className={s.link}>
          Sushi Go
        </NavLink>
        <NavLink href="/" className={s.link}>
          NOA
        </NavLink>
      </div>
    </aside>
  );
}

export default SideBar;
