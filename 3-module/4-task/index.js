function showSalary(users, age) {

  let resultString = "";

  users.filter(user => user.age <= age)
 .map(user => `${user.name}, ${user.balance}`)
 .forEach(nameBalance => resultString += `${nameBalance}\n`);

  return resultString.trimEnd();
}
