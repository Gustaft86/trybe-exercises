const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => `Olá ${order.order.delivery['deliveryPerson']}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`


console.log(customerInfo(order));

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  
  const newOrder = {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 15,
      },
      calabresa: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Pedro Motoboy',
      price: 5,
    }
  };

  order.order = newOrder;

  const priceOrder = order.order.pizza.muzzarella['price'] + order.order.pizza.calabresa['price'] + order.order.drinks.coke['price'] + order.order.delivery['price'];

  const newTotal = {
    total: priceOrder,
  };

  order.payment = newTotal;
  
  return `\nOlá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
}

console.log(orderModifier(order));
