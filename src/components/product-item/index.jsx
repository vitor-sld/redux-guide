import { useDispatch } from 'react-redux'
import { BsCartPlus } from "react-icons/bs";
// Components
import CustomButton from "../custom-button/index";
import {addCart} from '../../redux/cart/actions'

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const addToCart = () =>{
    dispatch(addCart(product))
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl} onClick={addToCart}>
        <CustomButton startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
