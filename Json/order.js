module.exports = () => {
  const order = { orderno: [], restaurantname: [], itemname: [], customer: [], add: [], contactdetail: [], paymentopt: [], delivery: [] }
  
  order.orderno.push({ orderno: "1", waiting: "5 Minute" })
  
  order.restaurantname.push({ restaurantn: "Mcdonalds" })
  
  order.itemname.push({ item1: "Coffe", qty1: "2", item2: "Mcsaver", qty2: "1", item3: "McMaharaja", qty3: "5" })
  
  order.customer.push({ Cname: "Nishchay", Lname: "Gajera" })
  
  order.add.push({ add1: "201", add2: "River view", state: "Gujarat", city: "surat", pincode: "395006" }) 
  
  order.contactdetail.push({ countrycode: "91", number: "468646835", email: "abc@abc.com" })  
  
  order.paymentopt.push({ paymentoption: "Cash on delivery" })
  
  order.delivery.push({ deliveryboy: "Ramukaka", deliveryboyno: "5485647985", deliverytime: "within 15 minutes" })
  
    return order
}