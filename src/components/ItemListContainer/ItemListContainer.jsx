import { Box, Flex, Heading } from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { getProducts, getProductsByCategory, productos } from "../../data/asynkMock"
import { useParams } from "react-router-dom"
import ItemList from "../itemList/ItemList"
import Context from "../../context/CartContext"
import { db } from "../../config/firebase"
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore"
import { setLogLevel } from "firebase/app"


const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  const { cart } = useContext(Context)


  useEffect(() => {
    setLoading(true)
    
    const getData = async () => {
      const coleccion = collection(db, 'productos')

      const queryRef = !categoryId ?
      coleccion
      :
      query(coleccion, where('categoria','==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id

      }

      return newItem

    })
    setProducts(productos)
    setLoading(false)
  }
    getData()
  }, [categoryId])

  return (
    <Box>
      <Heading textAlign={'center'} mt={4} color={'#416d6d'}>{title}</Heading>
      
        <ItemList products={products} />
    </Box>
  )
};

export default ItemListContainer;