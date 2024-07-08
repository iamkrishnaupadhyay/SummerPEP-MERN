import { useEffect, useState } from "react";

const useGetProductById = (id) => {
    const [productInfo, setProductInfo] = useState([]);

    const getProductById = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProductInfo(data);
    }

    useEffect(() => {
        getProductById();
    }, []);

    return productInfo;
};

export default useGetProductById;
