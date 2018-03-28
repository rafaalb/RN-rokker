import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { getProducts } from './../actions/products';
import ProductDetail from './../components/product_detail';
import Money from './../services/money';

const isCart = true;

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      swipeToClose: false,
    };
  }
    componentWillMount() {
      this.props.getProducts();
    }
    renderList = () => {
      return this.props.products.map((product) => {
        return <ProductDetail product={product} key={product.id} isCart={false} />
      });
    }
    renderCart = () => {
      return this.props.cart.map((product) => {
        return <ProductDetail product={product} key={product.id} isCart={isCart} />
      });
    }
    render() {
        const {
            container,
            productsContainer,
            cartContainer,
            buttonCart,
            buttonProducts
        } = styles;
        const numberProds = this.props.products.filter(prod => prod.enabled !== false).length;
        const totalPrices = this.props.cart.reduce((ac, prod) => {
          return ac + Money(prod.price)
        }, 0);
        return (
            <View style={container}>
            <Modal
              swipeToClose={this.state.swipeToClose}
              isOpen={this.state.modalVisible}
              onClosed={() => this.setState({ modalVisible: false })}
              ref={"modal1"}
            >
                <View style={{ flex: 1, marginTop: 100, }}>
                 <TouchableOpacity
                    style={{ position: 'absolute', top: 0, right: 20, zIndex: 999 }}
                    onPress={() => this.refs.modal1.close()}
                 >
                   <Text style={{ fontSize: 15 }}>
                      Close
                    </Text>
                 </TouchableOpacity>
                 <ScrollView>
                    {this.renderCart()}
                  </ScrollView>
                  {this.props.cart.length > 0 &&
                    <View style={{ width: '100%', height: 30 }}>
                    <View style={{ position: 'absolute', right: 20, top: 0 }}>
                    <Text>
                      Total: ${totalPrices}
                    </Text>
                    </View>
                  </View>}
                </View>
            </Modal>
                <ScrollView style={productsContainer}>
                  {this.renderList()}
                </ScrollView>
                <View style={cartContainer}>
                  <TouchableOpacity
                      style={buttonCart}
                      onPress={() => this.refs.modal1.open()}
                  >
                    <Text style={styles.textCart}>
                      Cart: {this.props.cart.length}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={buttonProducts}
                  >
                    <Text style={styles.textCart}>
                      Products: {numberProds}
                    </Text>
                  </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = {
    container: {
      flex: 1,
    },
    productsContainer: {
      flex: 1,
      flexDirection: 'column',
      height: '90%'
    },
    cartContainer: {
      height: '10%',
      justifyContent: 'flex-end'
    },
    buttonCart: {
      width: 100,
      height: 30,
      borderRadius: 10,
      backgroundColor: '#9AC361',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: 10,
      top: 30,
    },
    buttonProducts: {
      width: 100,
      height: 30,
      borderRadius: 10,
      backgroundColor: '#9AC361',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: 10,
      top: 30,
    },
    textCart: {
      color: 'white',
      fontSize: 13,
    }
};

export default connect((state) => state, { getProducts })(ProductsList);
