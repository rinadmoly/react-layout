import React, { Component } from 'react'
import s from "./Section.module.css"
import question from "./images/question.jpg"

export default class Section extends Component {
    render() {
        return (
            <div className={s.container__section}>
                <img className={s.question} src={question}/ >
                <img className={s.question__image} src={question}/ >
                <img className={s.question} src={question}/ >
                <img className={s.question__image2} src={question}/ >
                <img className={s.question} src={question}/ >
            </div>
        )
    }
}
