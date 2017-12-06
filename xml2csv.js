/**
 * XML2CSV Script
 *
 * Author: Jae Han Kim
 */

const DOMParser = require('xmldom').DOMParser;
const xml2rec = require('xml2rec');
const json2csv = require('json2csv');
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2));

if (argv.i == true || argv.i == undefined || argv.i == ''){
    throw new Error('-i (input filepath) argument missing.');
}

if (argv.o == true || argv.o == undefined || argv.o == ''){
    throw new Error('-o (output filepath) argument missing.');
}

if (argv.x == true || argv.x == undefined || argv.x == ''){
    throw new Error('-x (xpath to element) argument missing.');
}

var jsonArray = [];
var xmldoc = new DOMParser().parseFromString(fs.readFileSync(argv.i, 'utf-8'));
var elementCount = xmldoc.getElementsByTagName("Product").length;
var counter = 0;

xml2rec(argv.i, [argv.x], {format:'json'}, (err, rec) => {
    ++counter;

    jsonArray.push(rec);
    
    if (counter == elementCount) {
        var csv = json2csv({data: jsonArray});
        fs.writeFileSync(argv.o, csv);
    }
});
