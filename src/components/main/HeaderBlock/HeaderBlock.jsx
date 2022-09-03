import {NavLink} from "react-router-dom";

export default function HeaderBlock () {
    return (
        <header>
            <NavLink to="/"><h2>aperture</h2></NavLink>
            <NavLink to="business">Business areas</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
            <NavLink to="featuerdi">Featured images</NavLink>
            <NavLink to="gear">Gear cage</NavLink>
            <button>Get template</button>
        </header>
    )
}