const knex = require('knex');

const db = knex({
  client:'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: '123456',
    database:'dvdrental'
  }
});

const getAllProducts = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('name')
}

const getProduct = (product_id) => {
  return db('products')
  .select('id','name','price')
  .where({id:product_id})
}

const searchProduct = (product_name) => {
  return db('products')
  .select('id','name','price')
  .whereILike('name', `${product_name}%`)
}

const insertProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}

const putProduct = (product_id, product) => {
  return db('products')
  .update(product)
  .where({id:product_id})
  .returning('*')
}

const delProduct = (product) => {
  return db('products')
  .del('*')
  .where(product)
}

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct,
  insertProduct,
  putProduct,
  delProduct
}
