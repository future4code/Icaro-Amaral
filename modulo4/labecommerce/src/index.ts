import { app } from "./app";

import { addNewProduct } from "./API/Product/addNewProduct";
import { getAllProducts } from "./API/Product/getAllProducts";
import { addRegisterPurchase } from "./API/Purchases/addRegisterPurchase";
import { deleteProductById } from "./API/Product/deleteProductById";
import { changeProductPriceWithId } from "./API/Product/changeProductPriceWithId";
import { getAllPurchases } from "./API/Purchases/getAllPurchases";
import { deletePurchaseById } from "./API/Purchases/deletePurchadeById";


app.get('/purchases', getAllPurchases)
app.post('/purchases', addRegisterPurchase)
app.delete('/purchages/:purchase_id', deletePurchaseById) 
app.get('/products', getAllProducts)
app.post('/products', addNewProduct)
app.put('/products/editprice/:product_id', changeProductPriceWithId)
app.delete('/products/:id', deleteProductById)