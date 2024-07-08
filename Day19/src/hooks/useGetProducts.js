import { useEffect, useState } from "react";
import AppContext from "../context/appContext";
import { useContext } from "react"

const useGetProducts = () => {
    const { searchText } = useContext(AppContext);
    const [products, setProducts] = useState([]);

    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getData();
    }, [searchText]);

    return products;
};

export default useGetProducts;
