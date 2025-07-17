const BlogId=({params,searchParams})=>{
    const {blog:id1}=params;
    const {img,title,summary}=searchParams;
    return(
        <div className="card-cont1">
        <div className="card-cont">
            <div>Blog No : {id1}</div>
            <div><img src={img} className="img1"></img></div>
            <div><h2>{title}</h2></div>
            <div><h3>{summary}</h3></div>
        </div>
        </div>
    )
}
export default BlogId;