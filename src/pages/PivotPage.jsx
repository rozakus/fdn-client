import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPivots, getProducts } from '../store/actions/mainActions'

// components
import Header from '../components/Header'

// UI
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react'

export default function PivotPage() {
  // settings
  const dispatch = useDispatch()

  // state
  const { pivots, products } = useSelector((state) => state.MainReducers)
  console.log(pivots)
  console.log(products)

  // useEffect
  useEffect(() => {
    dispatch(getPivots())
    dispatch(getProducts())
  }, [])

  return (
    <Box maxW='max-content' p='12'>
      <Header />
      <Table maxW='max-content' variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th textAlign='center'>Fullname</Th>
            <Th textAlign='center'>Email</Th>
            {
              products ?
                <>
                  {
                    products.map(product => { return <Th textAlign='center'>{product.item}</Th> })
                  }
                </>
                : ''
            }

          </Tr>
        </Thead>
        <Tbody>
          {
            pivots ?
              pivots.map(pivot => {
                return (
                  <Tr key={pivot.id}>
                    <Td>{pivot.firstname} {pivot.lastname}</Td>
                    <Td>{pivot.email}</Td>
                    {
                      pivot.Products.map(product=> {
                        return <Td textAlign='center'>{product.totalQuantity}</Td>
                      })
                    }
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