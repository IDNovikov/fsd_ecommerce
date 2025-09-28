import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setProducts } from "./productsSliceStore";

export function useGetProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: "iPhone 14",
          price: 799,
          category: "phones",
          image: "https://via.placeholder.com/200",
          description: "Новейший iPhone",
        },
        {
          id: 2,
          name: "Samsung Galaxy S23",
          price: 699,
          category: "phones",
          image: "https://via.placeholder.com/200",
          description: "Флагман Samsung",
        },
        {
          id: 3,
          name: "MacBook Pro",
          price: 1999,
          category: "laptops",
          image: "https://via.placeholder.com/200",
          description: "Мощный ноутбук Apple",
        },
        {
          id: 4,
          name: "Dell XPS 13",
          price: 1299,
          category: "laptops",
          image: "https://via.placeholder.com/200",
          description: "Премиум ноутбук Dell",
        },
        {
          id: 5,
          name: "iPad Air",
          price: 599,
          category: "tablets",
          image: "https://via.placeholder.com/200",
          description: "Планшет Apple",
        },
        {
          id: 6,
          name: "Samsung Galaxy Tab",
          price: 399,
          category: "tablets",
          image: "https://via.placeholder.com/200",
          description: "Планшет Samsung",
        },
      ];
      dispatch(setProducts(mockProducts));
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);
}
