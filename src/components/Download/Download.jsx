import React, { Component } from 'react'
import s from "./Download.module.css"
import android from "./images/android.png"
import qr from "./images/icon.png"


export default class About extends Component {
    render() {
        return (
            <div className={s.download}>
                <h3 className={s.title__download}>Скачать</h3>
                <div className={s.download__block}>
                    <img className={s.download__images} src={android}/>
                    <img className={s.download__images} src={qr}/>
                </div>
                <p className={s.text__download}>Курс для начинающих предпринимателей, 
                направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы 
                и профессионалы в своем деле помогают участникам 
                на всех этапах развития их бизнеса: от разработки идеи до ее реализации.</p>
            </div>
        )
    }
}
