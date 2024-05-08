let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

for(let i = 0; i < num.length; i++){
console.log (`${i} x ${num[i]} = ${i*num[i]}`)
}

for(let v = 0; v < 100; v++){
    if (v % 2 ==! 0)
        console.log(v)
}
for(let v = 0; v < 100; v++){
    if (v % 2 === 0)
        console.log(v)
}
// for(let v = 2; v < 100; v++){
//     if(v % 1 === v)
//         console.log(v)
// }

let randomNum = Math.random() * 50000
console.log (Math.floor(randomNum))

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.pop()
shoppingCart.push('Sugar')
shoppingCart.splice(3, 1, 'Greentea')

  console.log(shoppingCart)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
  } else(webTechs.push('Sass'))
  console.log(webTechs)
  

   