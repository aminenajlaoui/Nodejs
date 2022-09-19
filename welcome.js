var fs = require('fs');

try {  
    var data = fs.readFileSync('./welcome.txt', 'utf8');
    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}