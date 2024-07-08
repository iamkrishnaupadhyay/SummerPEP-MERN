import { useParams } from "react-router-dom";
import useGetProductById from "../hooks/useGetProductsById";
import Navbar from "../components/navbar";

const ProductInfo = ({ setSearchText }) => {
    const params = useParams();

    const productInfo = useGetProductById(params.id);
    console.log(productInfo)
    const openSearchPage = () => {
        Navigate("/search");
    };
    return (
        <div>
            <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
            <h1>{productInfo.title}</h1>
            <img src={productInfo.thumbnail}></img>
            <h1>{productInfo.price}</h1>
        </div>
    )

};

export default ProductInfo;
