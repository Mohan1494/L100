let displayData = (
    id: number, 
    name: string, 
    field: string) : string => {
          return (id + " - " + name + " - " + field);
}

console.log(displayData(1 , "Mohan", "IT"));