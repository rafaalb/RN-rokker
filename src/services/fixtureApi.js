import { getRandomImage } from './../services/get_random_image';

const products = require('./../fixtures/products.json');

export default {
  // Functions return fixtures
  getProducts: () => {
    return products.slice(0, 20).map((prod) => {
      const image = getRandomImage(); //random image
      return {
        ...prod,
        image,
        enabled: true,
      };
    });
  },
  getProduct: (id) => {
    return products.find((prod) => (prod.id) === (id));
  },
};
