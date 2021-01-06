import React, { Component } from 'react'
import s from "./Project.module.css"

export default class Project extends Component {
    render() {
        return (
            <div className={s.project}>
                <h3 className={s.title__project}>О проекте</h3>
                <p className={s.text__project}>Курс для начинающих предпринимателей, 
                направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы 
                и профессионалы в своем деле помогают участникам 
                на всех этапах развития их бизнеса: от разработки идеи до ее реализации.</p>
            </div>
        )
    }
}
