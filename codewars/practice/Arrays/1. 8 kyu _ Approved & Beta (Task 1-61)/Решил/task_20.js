// 20. 

// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
    return [...new Set(a)]
  }

// При помощи Set() создается объект из уникальных значений. Неявное использование 
// этого объекта позволяет удалить дубликаты из массива.
// Мы можем воспользоваться этим методом, только нужно будет еще преобразовать 
// Set в новый массив.