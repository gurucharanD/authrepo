const sha256 = require('sha256');
const uuid = require('uuid/v1');
const fs = require('fs');
const excel = require('exceljs');
const workbook = new excel.Workbook();
workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);
const worksheet = workbook.addWorksheet('userDetails');
worksheet.columns = [
    { header: 'username', key: 'username', width: 10 },
    { header: 'password', key: 'password', width: 32 },
    { header: 'uuid', key: 'uuid', width: 32 },
    { header: 'hash', key: 'hash', width: 10, outlineLevel: 1 }
];


function generateHash(username, password) {
    // const randomNumber=Math.random()*10;
    const uniqueId = uuid().split('-').join('');
    const stringToGenerateHash = username + password + uniqueId;
    const hash = sha256(stringToGenerateHash);
    worksheet.addRow({username: username, password: password, uuid:uuid,hash:hash});

    // fs.writeFile('./userdetails.txt',()=>{

    // });
    console.log(uniqueId, stringToGenerateHash, hash,workbook._worksheets[1].rows,workbook._worksheets[1].columns);
}

generateHash('guru', 'charan');