import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/data';


describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {

    const wrapper = renderer.create(
      <ProductTitle title='custom product' className='custom-class'/>
    )

   expect( wrapper.toJSON() ).toMatchSnapshot();
  })

  test('Debe de mostrar el componente con el nombre del producto',() => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>

    )

   expect( wrapper.toJSON() ).toMatchSnapshot();

  })
})