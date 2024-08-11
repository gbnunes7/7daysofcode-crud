const form = document.getElementById('submit')

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    const nameValue = document.getElementById('name').value
    const birthDate = document.getElementById('birth-date').value

    const pessoa = {
        name: nameValue,
        birthday: birthDate,
    }

    pessoas.push(pessoa)
    localStorage.setItem('pessoas',JSON.stringify(pessoas))

    console.log('submited')
})