
function noParamAlert() {
    alert('This alert is caused by noParmAlert function!')
}

function parmFunction(param) {
    console.log(param)
}

noParamAlert()
parmFunction(44)

function combinedString(firstName, lastName, age) {
    return firstName + lastName + age;
}

alert(combinedString('Duje','Slavic',26))

