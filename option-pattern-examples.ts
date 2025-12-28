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

//Alterando para Promise (um equivalente a um 'Option' utilizado em Scala)
async function getUser(uid: number): Promise<User | null> {
  if (uid === 123) return Promise.resolve({ name: "João" });  // equivalente ao "Some" - Scala
  return Promise.resolve(null);                               // equivalente ao "None" - Scala
}

// Utilizando "Pattern Matching" (if/else ou switch)
async const processUser = () => {
  const result = await getUser(999);  // usuario inexistente possivel null

  if (result) {                    // "Some" - 'pode' ter valor presente
    console.log(`Usuario: ${result.name}`);
  } else {                         // "None" - sem valor, evitando de usar Null, Sendo None um tipo em Scala
    console.log("Usuario não encontrado");
  }
}
