import { useState, useMemo } from "react";
import { useGetProducts } from "./productAPI";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectProducts } from "./productsSliceSelectors";
import { addToCart } from "../cart/cartSliceStore";
import { productFilter } from "./utiils/productFilter";

export default function ProductList() {
  useGetProducts();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectIsLoading);

  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedCategory: "all",
    sortBy: "name",
    showFilters: false,
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredProducts = useMemo(() => {
    return productFilter(products, filters);
  }, [products, filters.searchTerm, filters.selectedCategory, filters.sortBy]);

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>;
  }

  return (
    <div className="product-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={filters.searchTerm}
          onChange={(e) => updateFilter("searchTerm", e.target.value)}
        />

        {filters.showFilters && (
          <div className="filter-controls">
            <select
              value={filters.selectedCategory}
              onChange={(e) => updateFilter("selectedCategory", e.target.value)}
            >
              <option value="all">Все категории</option>
              <option value="phones">Телефоны</option>
              <option value="laptops">Ноутбуки</option>
              <option value="tablets">Планшеты</option>
            </select>

            <select
              value={filters.sortBy}
              onChange={(e) => updateFilter("sortBy", e.target.value)}
            >
              <option value="name">По названию</option>
              <option value="price">По цене</option>
            </select>
          </div>
        )}

        <button
          onClick={() => updateFilter("showFilters", !filters.showFilters)}
        >
          {filters.showFilters ? "Скрыть фильтры" : "Показать фильтры"}
        </button>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <button onClick={() => dispatch(addToCart(product))}>
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
