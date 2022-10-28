import React from "react";

const Posts = ({posts, loading})=>{
    if(loading){
        return <h2> Loading...</h2>
    }
    return(
        <table id="my-table">
            <colgroup>
                <col className="col01"/>
                <col className="col02"/>
                <col className="col03"/>
            </colgroup>
            <thead>
                <tr>
                   <th>ID</th>
                   <th>title</th>
                   <th>body</th>
               </tr>
            </thead>
            <tbody>
                {posts.map(post=>{
                    return(
                        <tr key={post.id}>
                            <td className="tdId">{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    )
                })}
               </tbody>
        </table>
    )
};export default Posts;