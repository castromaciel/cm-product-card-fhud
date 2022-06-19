import React from 'react';
import styles from '../styles/styles.module.css'
import { CSSProperties, useContext } from "react";
import noimg from '../assets/no-image.jpg'
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  img?: string
  style?: CSSProperties;
  title?: string;
}

export const ProductImage = ({ title = '', img, className, style }: Props) => {

  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noimg;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt={title ? title : product.title}
      style={ style }
    />
  )
}

