// alias allowas you to provide a new name for existing data type to your program.
// declaring the employee properties first and annotating the employee properties when declaring the employe
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employe: Employee = {
  id: 1,
  name: "irene",
  retire: (date: Date) => {
    console.log(date);
  },
};
