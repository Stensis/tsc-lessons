// data types with with fixed/related number of constants.

// pascal case
enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Large;
 
// more optimized code use const to declare enum values