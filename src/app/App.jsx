import { Provider } from "react-redux";
import { store } from "@/app/store/store";

import "@/app/App.css";
import UserInfo from "@/features/user/UserInfo";
import Header from "@/shared/components/Header";
import ProductList from "../features/shop/products/ProductList";
import Cart from "../features/shop/cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header>
          <UserInfo />
        </Header>
        <div className="main-content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
