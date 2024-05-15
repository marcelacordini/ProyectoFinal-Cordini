import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Link as ChakraLink,
  Flex,
  Stack,
} from '@chakra-ui/react'

import { ArrowForwardIcon, DeleteIcon, EmailIcon} from '@chakra-ui/icons'

const Cart = () => {
    
  const { cart, getTotal, removeItem, clearCart } = useContext(Context)



  return (
    <Flex justify={'center'} align={'center'} mt={12}>
   
    <TableContainer w={'40%'}>
  <Table variant='striped' colorScheme='brown'>
    <TableCaption>El mejor café</TableCaption>
    <Thead>
      <Tr>
        <Th>Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio</Th>
        <Th>Subtotal</Th>
        <Th>Eliminar</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        cart.map((prod) => (
            <Tr key={prod.id}>
              <Td>{prod.title}</Td>
              <Td>{prod.quantity}</Td>
              <Td>${prod.precio}</Td>
              <Td>${prod.precio * prod.quantity}</Td>
              <Td>
              <Button onClick={() => removeItem(prod.id)}>
                  <DeleteIcon/>
                </Button>
              </Td>
          </Tr>
        ))
      }
      
    </Tbody>
    <Tfoot>
      <Tr>
        <Th Text fontSize={'3x1'} color={'teal'}>Total: ${getTotal()}</Th>
        
        <Stack direction='row' spacing={4}>
        <Button onClick={() => clearCart()} leftIcon={<DeleteIcon />} colorScheme='teal' variant='solid'>
          Vaciar Carrito
        </Button>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'> <ChakraLink as={Link} to = '/checkout'   >
          Finalizar Compra </ChakraLink>
        </Button>
      </Stack>


        
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Flex>
  )
}

export default Cart