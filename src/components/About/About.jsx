import React, { Component } from 'react'
import s from "./About.module.css"
import video from "./video/Keyboard.mp4"

export default class About extends Component {
    render() {
        return (
            <div className={s.about}>
                <h3 className={s.title__about}>О приложении</h3>
                <video  className={s.video__about} src={video} autoPlay loop muted></video>
            </div>
        )
    }
}
