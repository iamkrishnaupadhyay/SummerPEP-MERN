import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import useGetProducts from "../hooks/useGetProducts";

const SearchPage = () => {
   
    const products = useGetProducts();

    return (
        <>
            <Navbar />
            <CategoryBar />
            <div>
                {products.map((elem) => {
                    return (
                        <p key={elem.id}>
                            {elem.title}
                            <img src={elem.thumbnail} ></img></p>)
                })}
            </div>
        </>
    );
};

export default SearchPage;
