const form = document.getElementById('submit');
const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const nameValue = document.getElementById('name').value
    const birthDate = document.getElementById('birth-date').value
    
    const pessoa = {
        name: nameValue,
        birthday: birthDate,
    }
    
    pessoas.push(pessoa)
    localStorage.setItem('pessoas',JSON.stringify(pessoas))
    createElement(pessoas)
    console.log('submited')
})

function createElement(pessoas) {
    const div = document.getElementById('teste');
    
    const teste = 
        `
    <table class="min-w-full divide-y divide-gray-200 rounded">
        <thead class="bg-gray-50">
            <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birth Date</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            ${pessoas.map(pessoa => `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${pessoa.name}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${pessoa.birthday}</td>
                </tr>
                `).join('')}
        </tbody>
    </table>
      `;

      div.innerHTML = teste
}