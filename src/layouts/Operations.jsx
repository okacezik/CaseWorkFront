import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {NavLink } from 'react-router-dom';

export default function Operations() {
    return (
        <div>
            <DropdownButton variant = "dark" id="dropdown-basic-button" title="İşlemler" className="operations">
                <Dropdown.Item as = {NavLink} to = "/">Hasta Listesi</Dropdown.Item>
                <Dropdown.Item as = {NavLink} to = "/add">Hasta Kayıt</Dropdown.Item>
                <Dropdown.Item as = {NavLink} to = "/delete" >Hasta Sil</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}
