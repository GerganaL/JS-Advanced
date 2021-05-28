const {describe} = require('mocha');
const {assert} = require('chai');

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
};



describe("Tests", function() {
    it('make order', function(){
        let pizaa = {orderedPizza : 'pizza', orderedDrink : 'drink'};
        let pizaa1 = { orderedDrink : 'drink'};
        let pizaa2 = {orderedPizza : 'pizza'};
        let pizaa3 = {};

        assert.throw(()=> pizzUni.makeAnOrder(pizaa1),'You must order at least 1 Pizza to finish the order.');
        assert.throw(()=> pizzUni.makeAnOrder(pizaa3),'You must order at least 1 Pizza to finish the order.');

        assert.equal(pizzUni.makeAnOrder(pizaa2), `You just ordered ${pizaa2.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizaa), `You just ordered ${pizaa.orderedPizza} and ${pizaa.orderedDrink}.`);
     });
     it('remaining work', () =>{

        let statusArr = [{pizzaName: 'pizza', status: 'ready'},
        {pizzaName: 'pizza2', status: 'ready'},
        {pizzaName: 'pizza3', status: 'preparing'},
        {pizzaName: 'pizza4', status: 'preparing'}];

        let statusArr2 = [{pizzaName: 'pizza', status: 'ready'},
        {pizzaName: 'pizza2', status: 'ready'}];

        let statusAr3r = [
        {pizzaName: 'pizza3', status: 'preparing'},
        {pizzaName: 'pizza4', status: 'preparing'}];

        assert.equal(pizzUni.getRemainingWork(statusArr2),'All orders are complete!' );

        assert.equal(pizzUni.getRemainingWork(statusArr),'The following pizzas are still preparing: pizza3, pizza4.' );
        assert.equal(pizzUni.getRemainingWork(statusAr3r),'The following pizzas are still preparing: pizza3, pizza4.' );

     });
     it('order type', () =>{
        let orderTypeDelivery = 'Delivery';
        let orderTypeCary = 'Carry Out';
        let totalSum = 100;
        let totalSum1 = -100;
        let totalSum2 = 0;

        assert.equal(pizzUni.orderType(totalSum, orderTypeDelivery), 100);
        assert.equal(pizzUni.orderType(totalSum, orderTypeCary), 90);

        assert.equal(pizzUni.orderType(totalSum1, orderTypeDelivery), -100);
        assert.equal(pizzUni.orderType(totalSum1, orderTypeCary), -90);

        assert.equal(pizzUni.orderType(totalSum2, orderTypeDelivery), 0);
        assert.equal(pizzUni.orderType(totalSum2, orderTypeCary), 0);
    });
});
