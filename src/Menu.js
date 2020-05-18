import React from "react";

export default function Menu(props) {
    return (
        <div className="list-menu">
            <ul className="item-menu">
                <li className="news"><a href="">News</a></li>
                <li className="friends"><a href="">Followers</a></li>
                <li className="photos"><a href="">Mail</a></li>
                <li className="search"><a href="">Search</a></li>
            </ul>
        </div>
    )
}