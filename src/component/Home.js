import React from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './style.css'
import { ContextCart } from '../Context';

faker.seed(100)
function Home({ }) {

    const { cart, setCart } = React.useContext(ContextCart)


    const productList = [...Array(30)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
    }))
    const [products] = React.useState(productList)
    return (
        <div className='productcontainer'>
            {products.map((product) => {
                return <SingleProduct product={product} key={product.id} cart={cart} setCart={setCart} />
            })}
        </div>
    )
}

export default Home