import React, {createContext, useState} from "react";

const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newProduct = {
            ...productToAdd,
            quantity
        }
        if (isInCart(newProduct.id)) {
            const updateCart = cart.map((el) => {
                if(el.id === newProduct.id) {
                    return {...el, quantity: el.quantity + newProduct.quantity }
                }
                return el
            })
            setCart(updateCart)
        } else {

            setCart([...cart, newProduct])
        }
    
        
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter((prod) => prod.id !== id)
        setCart([...deleteItem])
    }

    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
        return total

    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.quantity
        })
        return total
    }

    return (
        <Context.Provider

            value ={{
                cart,
                addItem,
                removeItem,
                getTotal,
                clearCart,
                getQuantity
            }}
        >
            {children}
        </Context.Provider>
    )

}

export default Context