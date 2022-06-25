import React from 'react';
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties } from 'react';
import { InitialValues, onChangeArgs, ProdcutContextProps, Product, ProductCardhandlers } from '../interfaces/product.interfaces';

export const ProductContext = createContext({} as ProdcutContextProps)
const { Provider } = ProductContext


export interface Props {
  children: ( args: ProductCardhandlers ) => JSX.Element ;
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;   
  value?: number
}


export const ProductCard = ({ children,  className, initialValues, onChange, product, style, value }: Props) => {

  const { counter, isMaxCountReached, increaseBy, maxCount, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      maxCount,
      product
    }}>
      <article 
        className={` ${styles.productCard} ${className}`} 
        style={ style }
      >
        { 
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product: product,
            
            increaseBy,
            reset,
          }) 
        }
      </article>
    </Provider>
  )
};

