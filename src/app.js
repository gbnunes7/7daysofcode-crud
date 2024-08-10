const btn = document.getElementById('submit')

btn.addEventListener('submit',(event) => {
    const nameValue = document.getElementById('name').value
    const birthDate = document.getElementById('birth-date').value
    event.preventDefault();
    console.log('submited' + birthDate + nameValue)
})