import useFetch from '../useFetch';
import Blogs from './Blogs';

const Home = () => {
    const { data: blogs, isLoading, Error } = useFetch( 'http://localhost:8000/blogs' );

    return (
        <div className="home">
            {Error && <div>{Error}</div>}
            {isLoading && <div>Preparing to load posts...</div>}
            {blogs && <Blogs blogs={blogs} />}
            {/* <Blogs blogs={blogs.filter( ( blog ) => blog.author === 'Daniela Haiura' )} /> */}
        </div>
    );
};

export default Home;
