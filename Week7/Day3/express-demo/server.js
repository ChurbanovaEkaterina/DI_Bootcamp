const express = require('express');
const {getProducts, setProducts} = require('./modules/data.js');

const app = express();

const products = getProducts()
console.log(products)
// CRUD
// Create : POST
// Read : GET
// Update : PUT
// Delete : DELETE

app.use('/',express.static(__dirname+'/public'));

// BodyParser - npm
// to get the body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(5002, ()=>{
  console.log('Server is running on port 5002');
})

// GET - Read
app.get('/api/products/search', (req,res)=>{

  const name = req.query.q;
  const filterProducts = products.filter(item=>{
    return item.name.toLowerCase().includes(name.toLowerCase())
  })
  if(filterProducts.length === 0){
    return res.status(201).json({msg:'Not Found'})
  }
  res.json(filterProducts);
})

// GET - Read
app.get('/api/products/:id',(req,res)=>{
  const pid = req.params.id;
  const product = products.find(item=>{
    return item.id==pid
  })
  if(!product){
    return res.status(404).json({msg:'ID Not Found'})
  }
  res.json(product)
});


// GET - Read all product
app.get('/api/products',(req,res)=>{
  res.json(products)
})

// POST - create a new product
app.post('/api/products',(req,res)=>{
  console.log(req.body);
  const newProduct = {
    id:products.length+1,
    name: req.body.name,
    price: req.body.price
  }
  products.push(newProduct);

  setProducts(products)
  res.json(products)
})

// PUT - Update
app.put('/api/products/:id', (req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item => {
    return item.id == id
  });
  const updateProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price
  }
  products[index] = updateProduct;

  setProducts(products);

  res.json(products)
})

// DELETE - delete a product
app.delete('/api/products/:id', (req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item=>{
    return item.id == id
  })
  products.splice(index,1);

  setProducts(products);

  res.json(products)
})





