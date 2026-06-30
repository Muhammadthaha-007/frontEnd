function placeOrder(callback) {
    setTimeout(() => {
        console.log("🛒 Order Placed");
        callback();
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("💳 Payment Successful");
        callback();
    }, 1000);
}

function shipOrder(callback) {
    setTimeout(() => {
        console.log("📦 Order Shipped");
        callback();
    }, 1000);
}

function deliverOrder(callback) {
    setTimeout(() => {
        console.log("🚚 Order Delivered");
    }, 1000);
}

placeOrder(()=>{
    makePayment(()=>{
        shipOrder(()=>{
            deliverOrder(()=>{
                
            });
        });
    });
});