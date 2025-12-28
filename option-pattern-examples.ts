//Padrão 'Option' - Evitando NullPointerExceptions

interface User {
  name: string;
}

// caso original onde pode trazer erro de runtime
const getUserFromDB = (uid: number): User | null => {
  if (uid === 123) return { name: "João" };
  return null;  // pode retornar null!
}

const user = getUserFromDB(999);  // um caso imaginario onde pode trazer null
// console.log(user!.name);  //  erro de runtime
