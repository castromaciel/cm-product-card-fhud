import React from 'react'
import { product2 } from '../data/data'
import renderer from 'react-test-renderer';
import { ProductImage } from '../../src/components/ProductImage';
import { ProductCard } from '../../src/components/ProductCard';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {

    const wrapper = renderer.create(
      <ProductImage img={'https://hola.com.ar'} title={'Title'}/>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot()
  })

  test('Debe de mostrar el componente correctamente con la imagen del producto', () => {

    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot()
    
  })

})