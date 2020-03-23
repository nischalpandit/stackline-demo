import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home/Home';
import Layout from './components/common/Layout'
import Sales from './components/SalesDemo/Sales'

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/sales-demo' component={Sales} />
  </Layout>
);
