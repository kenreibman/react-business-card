import React from "react";
import '../Card.css';
import ProfileImg from '../images/profile.jpg';

export default function Profile() {
    return (
        <div className="c-card__profile">
            <img className="c-card__profile-image" src={ProfileImg} alt="Profile" />
        </div>
    )
}