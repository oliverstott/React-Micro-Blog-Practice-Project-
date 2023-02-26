import { Link } from "react-router-dom";

const notFound = () => {
  return ( 
    <div className="not-found">
      <h2>OOps!</h2>
      <p>Sorry, this page cannot be found. </p>
      <Link to='/'>Back to homepage...</Link>
    </div>
   );
}
 
export default notFound;