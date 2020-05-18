import React from "react";

export default function Header(props) {
    return (
        <div className="header">
            <div className="personal-date">
                <div className="photo">
                    <img className="main-photo" src="/img/main-photo.jpg" alt=""/>
                </div>
                <div className="user-name">
                    <i className="name"><img src="/img/earth-icon.png"/></i>
                    <div className="name">tanni-traveller</div>
                    <div className="quantity">Visited: 4 countries</div>
                </div>
            </div>
            <div className="countries">
                <div className="country">
                    <img src="https://image.flaticon.com/icons/svg/197/197484.svg" alt=""/>
                </div>
                <div className="country">
                    <img src="https://image.flaticon.com/icons/svg/197/197485.svg" alt=""/>
                </div>
                <div className="country">
                    <img src="https://image.flaticon.com/icons/svg/197/197486.svg" alt=""/>
                </div>
                <div className="country">
                    <img src="https://image.flaticon.com/icons/svg/197/197487.svg" alt=""/>
                </div>
                <div className="country">
                    <img src="https://image.flaticon.com/icons/svg/197/197488.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}