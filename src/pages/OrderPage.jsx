import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/mainActions'

// components
import Header from '../components/Header'

// UI
import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react'

export default function OrderPage() {
  // settings
  const dispatch = useDispatch()

  // state
  const { orders } = useSelector((state) => state.MainReducers)
  console.log(orders)

  // useEffect
  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <Box maxW='full' p='12'>
      <Header />
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th textAlign='center'>ID</Th>
            <Th textAlign='center'>Full Name</Th>
            <Th textAlign='center'>Email</Th>
            <Th textAlign='center'>Item</Th>
            <Th textAlign='center'>Quantity</Th>
            <Th textAlign='center'>Total Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            orders ?
              orders.map(order => {
                return (
                  <Tr key={order.id}>
                    <Td textAlign='center'>{order.id}</Td>
                    <Td>{order.User.firstname}  {order.User.lastname}</Td>
                    <Td>{order.User.email}</Td>
                    <Td>{order.Product.item}</Td>
                    <Td textAlign='center'>{order.quantity}</Td>
                    <Td textAlign='center'>{order.total_price}</Td>
                  </Tr>
                )
              })
              : 'noting to display'
          }
        </Tbody>
      </Table>
    </Box>
  )
}