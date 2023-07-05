//  a process of searching and querying variables ,methods ,parameters ,that might be nil in existence
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

// let customer = getCustomer(0);
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthDate);
// }

// optional Chaining function
let customer = getCustomer(0);
console.log(customer?.birthday);
