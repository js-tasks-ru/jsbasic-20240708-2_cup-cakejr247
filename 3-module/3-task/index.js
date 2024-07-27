function camelize(str) {
  let splited = str.split("-")
  
  for(let i = 1; i < splited.length; i++) {
    splited[i] = splited[i][0].toUpperCase() 
      + splited[i].slice(1).toLowerCase()
  }
  return splited.join('')
}