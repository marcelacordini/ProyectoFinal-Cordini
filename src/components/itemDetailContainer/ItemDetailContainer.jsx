import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asynkMock'
import ItemDetail from '../itemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { ClimbingBoxLoader } from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [ loading, setLoading ] = useState(true)
  const { productoId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async() => {
      
      const queryRef = doc(db, 'productos', productoId)
      const response = await getDoc(queryRef)
      const newItem = {
        ...response.data(),
        id: response.id
      }
      setProducto(newItem)
      setLoading(false)
     
    }
    getProduct()

  }, [productoId])

   
  return (
  <>
    { loading ?
    <Flex>
      <ClimbingBoxLoader color="#36d7b7" />
    </Flex>
    :
    <div>
      <ItemDetail {...producto} />
    </div>

    }

  </>
  )
  
}
export default ItemDetailContainer