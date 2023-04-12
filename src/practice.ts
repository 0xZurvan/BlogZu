
type Customer = {
  name: string;
  age: number;
  balance: number;
}

type Product = {
  name: string;
  price: number;
  category: "makeup" | "groceries";
}


type Complete = {
  user: Customer;
  product: Product;
}

let value: Complete;

value = {
  user: {
    name: "Isaac",
    age: 10,
    balance: 100000
  },
  product: {
    name: "Mac",
    price: 10,
    category: "groceries"
  }
}

const a: any = "value";
let b = a as string;
b = "new value";

console.log(b);