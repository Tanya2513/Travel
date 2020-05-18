import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import PostsData from "./repository/posts";
import Post from "./Post";

export default function ProfilePage(props) {
    return (
        <div className="page">
            <div className="profile">
                <Header/>
                <Menu/>
                <div className="posts">

                    {PostsData.map(function (post) {
                        return <Post
                            img={post.img}
                            country={post.country}
                            city={post.city}
                            year={post.year}
                            description={post.description}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}