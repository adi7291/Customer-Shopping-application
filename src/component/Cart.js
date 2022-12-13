import React from 'react'
import { ContextCart } from '../Context'
import SingleProduct from './SingleProduct'

import './style.css'
function Cart() {

    const { cart, setCart } = React.useContext(ContextCart)
    const [total, setTotal] = React.useState()

    React.useEffect(() => {
        setTotal(cart.reduce((total, current) =>

            total = total + Number(current.price)

            , 0))
    }, [cart])

    return (
        <>
            <span style={{ fontSize: "35px" }}>Cart</span>
            <br></br>
            <span style={{ fontSize: "35px" }}>Total Cart Value={total}</span>
            <div className='productcontainer'>
                {cart.map(product => <SingleProduct product={product} key={product.id} cart={cart} setCart={setCart} />)}
            </div>
        </>
    )
}

export default Cart