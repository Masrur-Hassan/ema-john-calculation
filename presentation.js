// explore priviso work / class, log, nav, css, hover, shop, product, cart, evnthadelar, useState, useEffect, distructuring,   state lift up, share state , fontawosme, diploy 

// 49.3 calculate total shopping cart price, shipping and tax with to fixed
// make css in card section + make CART components + remove all text + send state in CART + check by click +  see CART.JS and SHOP.JS // cart.js a position kore dibo 
//then dustructuring + console.log(cart) = array + arry ob object ke loop korte pari = ageo dekhci
//let total = 0    + forOf loop ==   for(const product of cart){total = total + product.price} + show the Total in html Dynamicly 
//console.log(cart) = prottekta shoe er shipping price ace so shipping willbe same as privious = let shipping = 0 ...... shipping = shipping + product.shipping;
//tax == after the lloop ==  ( 10/100 = 0.1 )  const tax = parseFloat((total * 0.1).toFixed(2)); //  koyekta buttton a clik korle tax er . er pore onek number asbe so ==== google javasxritp two decimal number == javasctipt toFiexed = toFixed(0)

// 49.4 Setting the cart data on the localstoreage for the future retrieve
//grandTotal =   const grandTotal = total + shipping + tax; == grand taotla number ar strign jog hoye gece  == man thik nai ===== tex ke parsseFloat a conver korte hbe ==   const tax = parseFloat((total * 0.1).toFixed(2)); + to fixed to in Html()== <h5>Grand Total: {grandTotal.toFixed(2)}</h5>

// user website ta reload dile sob ses // kicudin pore jodi abar ase se ager kon kon product select korce seta pabe na // database thake seta easyly save kore rakha jaito but amader onno kon way dekhte hbe 
// data ta ke browser a localstore a save kore rakhbo =
// local storge = reload korle data jai na but sesion storege = reload korele browser theke data remove hoye jai
//go SHOP.js in handleAddToCart call at the last in function addToDb()

// addToDb(product) for fist time = enspect + application + localstore + click on button on ui cart + addToDb(id) this is the right + enspect + see

// 49.5 load cart from local storage, find product  == see shop.js with fackDb.js


// 49.7 quantity = cart.js = see cart.js   + product price upadate + shipping update hoteo pare nao pare + quntity error solve



