import { useSelector } from "react-redux";

// Styles
import * as Styles from "./styles";

import CartItem from "../cart-item/index";
import { selectProductsPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(!isVisible);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
const productsTotalPrice = useSelector(selectProductsPrice)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => <CartItem product={product}/> )}
        <Styles.CartTotal>TOTAL <br/>R${productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
