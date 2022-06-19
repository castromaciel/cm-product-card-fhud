# cm-product-card-fhud

Este es un paquete de pruebas de despliegue en npm

### Castro Maciel 2022

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'cm-product-card-fhud';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 2,
    // maxCount: 10
  }}
>
  {
    ({ reset, increaseBy, maxCount, isMaxCountReached }) => (
      <>
        <ProductImage />
        <ProductTitle  />
        <ProductButtons  />
      </>
    )
  }
</ProductCard>
```
