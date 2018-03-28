import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  addToCart,
  removeFromCart
} from './../actions/cart';

class ProductDetail extends Component {
  addToCart() {
    this.props.addToCart(this.props.product);
  }
  removeFromCart() {
    const { id } = this.props.product;
    this.props.removeFromCart(id);
  }
  render() {
    console.log(this.props);
    if (this.props.product.enabled) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.product.image }} style={styles.productImage} />
        <View style={{ width: '80%' }}>
          <View style={styles.description}>
            <Text style={styles.nameProduct}>
              {this.props.product.name}
            </Text>
            <Text style={styles.quantity}>
              Stock: {this.props.product.quantity}
            </Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.priceText}>Price: {this.props.product.price}</Text>
            {!this.props.isCart ?
              <TouchableOpacity style={styles.buyButton} onPress={() => this.addToCart()}>
                <Text style={styles.buttonText}>
                  Buy
                </Text>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.buyButton} onPress={() => this.removeFromCart()}>
                <Text style={styles.buttonText}>
                  Delete
                </Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    width: '100%',
    padding: 20,
  },
  productImage: {
    height: 50,
    width: 50,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  quantity: {
    fontSize: 15,
  },
  nameProduct: {
    paddingLeft: 15,
    fontSize: 20,
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: 14,
    paddingLeft: 20,
  },
  buyButton: {
    backgroundColor: '#9AC361',
    borderRadius: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  }
};

export default connect(state => state, { addToCart, removeFromCart })(ProductDetail);
