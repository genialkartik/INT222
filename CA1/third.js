// navigate to this (CA1) directory 
// run: node third

const fs = require('fs')
const prompt = require('prompt-sync')()

var writeStream = fs.createWriteStream("excel.xls")
if(writeStream){
var header = "Student Name" + "\t" + "Phy" + "\t" + "Che" + "\t" + "Comp" + "\t" + "Mth" + "\t" + "Bio" + "\t\t" + "CGPA" + "\n"
writeStream.write(header)

while (1) {
    var name = prompt('Student Name: ')
    console.log("Enter Student's Marks: (1 - 100) ")
    var phy = Number(prompt('Physics: '))
    var che = Number(prompt('Chemistry: '))
    var com = Number(prompt('Computer: '))
    var math = Number(prompt('Maths: '))
    var bio = Number(prompt('Bio: '))
    if (!name || !phy || !che || !com || !math) {
        console.log('wrong input')
        break;
    }
    else {
        var cgpa = (phy + che + com + math + bio) / 50
        var marks = name + "\t" + phy + "\t" + che + "\t" + com + "\t" + math + "\t" + bio + "\t\t" + cgpa + "\n"
        console.log('CGPA of ' + name + ' :' + cgpa);
        writeStream.write(marks)
        console.log('saved')
    }
    var flag = prompt('Enter another student mark? (Y/N) ')
    if (flag === 'n' || flag === 'N') break;
}

writeStream.close()
}
else{
    console.log('file does not exist.')
}