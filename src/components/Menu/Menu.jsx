import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import s from "./Menu.module.css"


export default class Menu extends Component {
    render() {
        return (
            <div>
            <div className={s.container__menu}>
                <div className={s.menu__menu}>
              <div className={s.nav__items}>
          <Link to={'/Home' } className={s.nav__link}>Главная</Link>
          <Link to={'/About' } className={s.nav__link}>О приложении</Link>
          <Link to={'/Project' } className={s.nav__link}>О проекте</Link>
          <Link to={'/Download'} className={s.nav__link}>Скачать</Link>
          <Link to={'/Contacts'}className={s.nav__link}>Контакты</Link>
          </div>
          </div>
          </div>
          </div>
        )
    }
}
