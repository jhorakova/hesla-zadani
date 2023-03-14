const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};

/*Napište funkci createAccount, která se bude tvářit, že zakládá nový uživatelský účet. Funkce bude mít dva parametry user a generatePassword. 
První bude uživatelské jméno a druhý bude funkce, pomocí které se má vygenerovat heslo pro tento účet. 
Funkce createAccount vrátí řetězec, který bude obsahovat jméno uživatele a heslo vygenerované voláním funkce generatePassword. 
Funkci generatePassword při volání předejte číslo 9 jako délku hesla.

Na konci javascriptového kódu vyzkoušejte založit více různých účtů s různými typy hesel. Například:

document.body.innerHTML += `
  <p>${createAccount('Míša', weakPassword)}</p>
  <p>${createAccount('Řízek', mediumPassword)}</p>
  <p>${createAccount('Hustodémon', strongPassword)}</p>
`
by mělo vepsat do stránky něco jako:

Uživatel Míša s heslem 012345678
Uživatel Řízek s heslem 074031827
Uživatel Hustodémon s heslem mwwf9epts*/

const createAccount = (user, generatePassword) => {
  return `Uzivatel ${user} s heslem ${generatePassword}`
}

//console.log(createAccount(user, generatePassword))

document.body.innerHTML = `
  <p>${createAccount('Míša', weakPassword(9))}</p>
	<p>${createAccount('Řízek', mediumPassword(9))}</p>
	<p>${createAccount('Hustodémon', strongPassword(9))}</p>
`

