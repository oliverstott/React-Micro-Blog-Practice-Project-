import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/blogs/${id}`;
  const { data: blog, error, isPending } = useFetch( url );

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="blog-details__title">{blog.title}</h2>
          <p className="blog-details__author">Written by {blog.author}</p>
          <div className="blog-details__description">{blog.description}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;