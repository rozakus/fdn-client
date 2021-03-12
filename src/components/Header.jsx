import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

// UI
import { Box, Button, HStack, Center } from '@chakra-ui/react'

export default function Header() {
  // settings
  const history = useHistory()
  const { pathname } = useLocation()

  // handlers
  const toOrderPage = () => { history.push('/order') }
  const toPivotPage = () => { history.push('/pivot') }

  return (
    <Box>
      <Center>
        <HStack>
          <Button
            onClick={() => { toOrderPage() }}
            size='sm'
            colorScheme="teal"
            variant={pathname === '/order' ? 'solid' : 'outline'}
          >Order</Button>
          <Button
            onClick={() => { toPivotPage() }}
            size='sm'
            colorScheme="teal"
            variant={pathname === '/pivot' ? 'solid' : 'outline'}
          >Pivot</Button>
        </HStack>
      </Center>
    </Box>
  )
}