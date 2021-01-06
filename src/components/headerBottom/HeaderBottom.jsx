import React, { Component } from 'react'
import s from "./HeaderBottom.module.css"
import image__first from "./images/image__first.png"

export default class HeaderBottom extends Component {
    render() {
        return (
            <div className={s.header__bottom}>
               <div className={s.header__block}>
                   <img className={s.header__image} src={image__first}/ >
                   <h2 className={s.text__image}>
                   Часто ли Вы опаздываете на работу (учёбу)?
                   </h2>
               </div> 
               <div className={s.header__block}>
                  
                   <img className={s.header__image} src={image__first}/ >
                   <h2 className={s.text__image}>
                   Часто ли Вы опаздываете на работу (учёбу)?
                   </h2>
               </div> 
               <div className={s.header__block}>
                   <img className={s.header__image} src={image__first}/ >
                   <h2 className={s.text__image}>
                   Часто ли Вы опаздываете на работу (учёбу)?
                   </h2>
               </div> 
            </div>
        )
    }
}
