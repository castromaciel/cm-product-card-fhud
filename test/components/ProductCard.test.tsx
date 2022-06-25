import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/data';

const { act } = renderer;

describe('ProductCard', () => {

  test('debe mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <h1>ProductCard</h1>
          )
        }
      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot()

  })

  test('debe incrementar el contador', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          ({count, increaseBy}) => (
            <>
              <h1>ProductCard</h1>
              <span>{count} <p>hola</p></span>
              <button onClick={ () => increaseBy(1)}></button>
            </>
          )
        }
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    console.log(tree);

    expect( tree ).toMatchSnapshot();

    act( () => {
      (tree as any).children[2].props.onClick();
    })

    tree = wrapper.toJSON();
    
    expect((tree as any).children[1].children[0]).toBe('1');
    
    expect( tree ).toMatchSnapshot()
  }
)

})