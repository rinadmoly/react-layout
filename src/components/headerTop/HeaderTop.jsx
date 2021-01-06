import React, { Component } from 'react'
import s from "./HeaderTop.module.css"
import logo__first from "./images/logo__first.png"




export default class HeaderTop extends Component {
    render() {
        return (
            <div className={s.container__header}>
                <img className={s.logo} src={logo__first}/ >
                <h1>SLOGAN SLOGAN SLOGAN</h1>
            </div>
        )
    }
}
