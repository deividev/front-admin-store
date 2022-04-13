import React from 'react'
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
            <li>
                <NavLink to="/users">Users</NavLink>
            </li>
            <li>
                <NavLink to="/products">Productos</NavLink>
            </li>
        </ul>
    </div>
  )
}
