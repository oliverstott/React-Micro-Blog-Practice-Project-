import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/blogs/${id}`;
  const { data: blog, error, isPending } = useFetch(url);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2 className="blog-details__title">{blog.title}</h2>
          <p className="blog-details__author">Written by {blog.author}</p>
          <div className="blog-details__description">{blog.description}</div>
          <button
            onClick={handleClick}
          >Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;