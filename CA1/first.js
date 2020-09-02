// navigate to this (CA1) directory 
// run: node first

const prompt = require('prompt-sync')()

function TaxCheck(name, salary) {
    this.Name = name,
        this.Salary = salary
}

while (1) {

    var name = prompt('Enter Your Name: ')
    if (name == '') {
        console.log('Seriouly! is that your name! ')
        break;
    }
    var salary = parseInt(prompt("What's your Salary?: "))
    if (isNaN(salary)) {
        console.log('Seriouly! was that your salary! ')
        break;
    }

    var employee = new TaxCheck(name, salary)
    if (employee.Salary < 50000)
        console.log('Tax is not applicable for ' + employee.Name)
    else if (employee.Salary >= 50000 && employee.Salary < 100000)
        console.log('Tax is applicable upto 10% (' + Number(employee.Salary * 0.1) + ') for ' + employee.Name)
    else if (employee.Salary >= 100000 && employee.Salary < 150000)
        console.log('Tax is applicable upto 20% (' + Number(employee.Salary * 0.2) + ') for ' + employee.Name)
    else if (employee.Salary >= 150000)
        console.log('Tax is applicable upto 30% (' + Number(employee.Salary) * 0.3 + ') for ' + employee.Name)

    var flag = prompt('Want to check Tax Applicablility again? (Y/N) ')
    if (flag == 'n' || flag == 'N') break;
}