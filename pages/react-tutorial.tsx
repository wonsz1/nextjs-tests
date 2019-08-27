import Layout from '../components/MyLayout';
import React from 'react';

class ShoppingList extends React.Component {
  render() {
    return (
      <Layout>
        <div className="shopping-list">
          <h1>Shopping lift</h1>
          <ul>
            <li>Tv</li>
            <li>PS4</li>
            <li>Some games</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default ShoppingList;