import { Link } from "react-router-dom";

const Blogs = ( { blogs } ) => {
  return (
    <div className="blog">
      {blogs.map( blog => (
        <article className="blog__article" key={blog.id}>
          <Link className="blog__anchor" to={`/blogs/${blog.id}`}>
            <h3 className="blog__title">{blog.title}</h3>
            {/* <p className="blog__body">{blog.description}</p> */}
            <p className="blog__author">Author: {blog.author}</p>
          </Link>
        </article>
      ) )
      }
    </div >
  );
}

export default Blogs;