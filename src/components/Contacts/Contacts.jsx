import React, { Component } from 'react'
import s from "./Contacts.module.css"
import vk from "./images/vk.png"
import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"

export default class Contacts extends Component {
    render() {
        return (
            <div className={s.contacts}>
            <p className={s.title__contact}>SOME</p>
            <div className={s.contacts__social}>
                <img className={s.social} src={vk}/ >
                <img className={s.social} src={instagram}/ >
                <img className={s.social} src={facebook}/ >
            </div>
            <div className={s.footer}>
            <div className={s.contact__footer}>
                <p className={s.title__footer}>Контакты</p>
                <p className={s.text__footer}>Tel.: +996 (312) 915000 + Еxt.
Fax: +996 (312) 915 028</p>
            </div>
            <div className={s.contact__footer}>
                <p className={s.title__footer}>Адреса</p>
                <p className={s.text__footer}>American University of Central Asia
7/6 Aaly Tokombaev Street
Bishkek, Kyrgyz Republic 720060</p>
            </div>
            <div className={s.contact__footer}>
                <p className={s.title__footer}>Помощь</p>
                <p className={s.text__footer}>Помощь</p>
                <p className={s.text__footer}>Помощь</p>
                <p className={s.text__footer}>Помощь</p>
            </div>
            </div>
            </div>
        )
    }
}
