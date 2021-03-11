import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import LoginPage from './pages/LoginPages'
import OrderPage from './pages/OrderPage'
import PivotPage from './pages/PivotPage'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' component={LoginPage} exact />
          <Route path='/order' component={OrderPage} />
          <Route path='/pivot' component={PivotPage} />
          <Route path='*' component={LoginPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
