import { User, Product } from "./model";
import { fetchData } from "./api.js";
// Fetch user
async function getUser() {
  const user = await fetchData<User>(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log(user.name.toUpperCase()); 
}

// Fetch product
async function getProduct() {
  const product = await fetchData<Product>(
    "https://fakestoreapi.com/products/1"
  );

  console.log(product.price); 
}

getUser();
getProduct();
