import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <a className="twitter-link" href="https://twitter.com/_umabou" target="_blank">
                <img className="twitter-icon" src="../assets/Twitter-Icon.svg" alt="twitter icon with hyperlink" />
            </a>
            <a className="instagram-link" href="https://www.instagram.com/ulrich_mabou/" target="_blank">
                <img className="instagram-icon" src="../assets/Instagram-Icon.svg" alt="instagram icon with hyperlink" />
            </a>
            <a className="github-link" href="https://github.com/ulrichmabou" target="_blank">
                <img className="github-icon" src="../assets/GitHub-Icon.svg" alt="github icon with hyperlink" />
            </a>
        </div>
    )
}