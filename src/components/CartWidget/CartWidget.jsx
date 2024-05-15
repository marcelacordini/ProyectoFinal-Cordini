import React, { useContext } from 'react'
import { Badge, Flex } from '@chakra-ui/react';
import { PiShoppingCartBold } from "react-icons/pi";
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity} = useContext(Context)
  return (
    <Flex mr={4}>
    <PiShoppingCartBold className='cartIcon'/>
    <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'} >
      <Badge borderRadius={'50%'}  color={'#c86f43'} fontSize={'xl'}>{getQuantity()}</Badge>
    </Flex>
  </Flex>
  )}
   
export default CartWidget



