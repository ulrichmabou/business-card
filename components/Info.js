import React from 'react'

export default function Info() {
    return (
        <div className="info">
            <div className="info--img">
                <img  className="info--img-pic" src="../assets/profile-pic.jpeg" alt="Ulrich's profile picture" />
            </div>
            <h3>Ulrich Mabou</h3>
            <p>Technologist & Product Manager</p>
            <a href="https://ulrich.bearblog.dev/" target="_blank">ulrich.bearblog.dev</a>
            <div className="info-btns">
                <a href="mailto:ulrichmabou@gmail.com" target="_blank">
                    <button className="email-btn">
                        <img src="../assets/Mail.svg" />
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/ulrichmabou/" target="_blank">
                    <button className="linkedin-btn">
                        <img src="../assets/Linkedin.svg" />
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}