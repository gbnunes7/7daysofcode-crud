const btn = document.getElementById('submit')

btn.addEventListener('submit',(event) => {
    event.preventDefault();
    const nameValue = document.getElementById('name').value
    const birthDate = document.getElementById('birth-date').value
    console.log('submited' + birthDate + nameValue)
})