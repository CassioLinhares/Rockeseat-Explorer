const patients = [
    {name: 'cassio', age: 23, weigth: 75,heigth:1.80},
    {name: 'Thailliny', age: 23, weigth: 65,heigth:1.70},
    {name: 'Eduarda', age: 22, weigth: 72,heigth:1.72},
    {name: 'Alessandra', age: 26, weigth: 75,heigth:1.65},
    {name: 'Valmor', age: 57, weigth: 100,heigth:1.85},
    {name: 'Marcia', age: 55, weigth: 77,heigth:1.60}
]
//imc = peso / altura ** 2
function imc(weigth, heigth){
    let imc = (weigth / (heigth ** 2)).toFixed(2)
    return imc
}

function printDescription(patient) {
    return `O paciente ${patient.name} tem IMC de: ${imc(patient.weigth, patient.heigth)}`
}

for (const obj of patients) {
    alert(printDescription(obj))
}

