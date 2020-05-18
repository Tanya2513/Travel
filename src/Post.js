import React from "react";
import {Link} from "react-router-dom";

export default function Post(props) {
    return (
        <div className="post">
            <div className="border-picture">
                <img src={props.img} alt=""/>
                <div className="city-date">
                    {props.country}, {props.city} {props.year}
                </div>
            </div>
            <div className="description">
                {props.description}
            </div>
            <div className="likes">
                <i className="fa fa-heart"></i>
            </div>
            <div className="comments"><i className="fa fa-comment"></i></div>
            {/*{         <div class="share"><i class="fa fa-share"></i></div> }*/}
            <Link to="/country" className="btn">Read all</Link>
        </div>
    )
}