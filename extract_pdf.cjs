const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('public/Krishiv_Modi_Resume.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('public/resume_text.txt', data.text);
}).catch(e => {
    fs.writeFileSync('public/resume_text.txt', e.toString());
});
