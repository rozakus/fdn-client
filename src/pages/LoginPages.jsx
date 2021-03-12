import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'
import FacebookLogin from 'react-facebook-login'
// UI
import { Box, SimpleGrid, Button, Text, VStack, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

export default function LoginPage() {
  // settings
  const history = useHistory()

  // state
  const [isLoggedIn, SetIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [baseURL, setBaseURL] = useState('http://localhost:3000')

  const componentClicked = () => {
    console.log('clicked')
  }

  const responseFacebook = (response) => {
    console.log(response)
    
    // still error
    // SetIsLoggedIn(true)
    // setEmail(response.email)
  }

  // handling
  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) { return null }

    const { data } = await axios.post(baseURL + '/login', { email: loginEmail, password: loginPassword })

    if (data === true) {
      history.push('/order')
    }

    if (data !== true) {
      console.log('email / password salah')
    }
  }

  return (
    <Box maxW='full' >
      <SimpleGrid columns={2} spacing={2}>
        <Box bg='white' height='100vh'></Box>
        <Box bg='white' height='100vh' p='10'>
          <VStack bg='#CBD5E0' height='100%' borderRadius='20' p='5' spacing={4}>
            <Text fontSize="3xl">Welcome to Female Daily Network</Text>
            <VStack spacing={4}>
              <InputGroup>
                <InputLeftAddon children="Email" w={100} />
                <Input type="text" placeholder="user@email.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="password" w={100} />
                <Input type="password" placeholder="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              </InputGroup>
              <Button
                onClick={() => { handleLogin() }}
              >
                Login
              </Button>
              {
                isLoggedIn ? '' :
                  <FacebookLogin
                    appId="433869427918677"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={() => componentClicked()}
                    callback={() => responseFacebook()} />
              }
            </VStack>
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}