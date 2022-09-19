const generatepassword=require('generate-password')
var password=generatepassword.generate({
    length:20,
    numbers:true,
})
console.log(password);