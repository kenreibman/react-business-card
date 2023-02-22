import React from 'react';
import '../Card.css';
import { FaLinkedin,  } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function CardBody() {
    return (
        <div className="c-card__body">
            <div className="c-card__details flex">
                <h2 className="c-card__name">Laura Smith</h2>
                <p className="c-card__position">Frontend Developer</p>
                <span className="c-card__email">laurasmith.website</span>
            </div>
            <ul className="c-card__links flex" role="list">
                <li className="c-card__link">
                    <a href="/" className='c-card__link-button c-card__link-button--email' aria-label='Email'>
                        <HiMail />
                        <span>Email</span>
                    </a>
                </li>
                <li className="c-card__link">
                    <a href="/" className='c-card__link-button c-card__link-button--linkedin' aria-label='LinkedIn'>
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                </li>
            </ul>
            <div className="c-card__teaser flex">
                <h3 className="c-card__teaser-title">About</h3>
                <p className="c-card__teaser-description">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="c-card__teaser-title">Interests</h3>
                <p className="c-card__teaser-description">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}