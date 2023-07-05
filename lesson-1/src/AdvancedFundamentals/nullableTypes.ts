// allows extra value null to be owned by a form.
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hello friend!");
}
greet(null);
