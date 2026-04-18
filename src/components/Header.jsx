import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <span className="fw-bold fs-4">⚡ ENTORNOS UIS</span>
        </NavLink>
    );
}