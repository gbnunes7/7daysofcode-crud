document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('submit');
    const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
    const nameValue = document.getElementById('name');
    const birthDate = document.getElementById('birth-date');
    const div = document.getElementById('teste');


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const pessoa = {
            name: nameValue.value,
            birthday: birthDate.value,
        };

        const index = form.dataset.index;
        if (index !== undefined) {

            pessoas[index] = pessoa;
        } else {

            pessoas.push(pessoa);
        }
        
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
        createElement(pessoas);
        form.reset(); 
        delete form.dataset.index; 
    });

    function createElement(pessoas) {
        const tableHTML = `
        <table class="min-w-full divide-y divide-gray-200 rounded">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birth Date</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" colspan='2'>Actions</th>

                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                ${pessoas.map((pessoa, index) => `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${pessoa.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${pessoa.birthday}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button class="edit-button bg-yellow-500 text-white font-bold py-1 px-2 rounded" data-index="${index}">Edit</button>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button class="delete-button bg-red-600 text-white font-bold py-1 px-2 rounded data-index="${index}">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        `;
        
        div.innerHTML = tableHTML;

        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                const pessoa = pessoas[index];
                nameValue.value = pessoa.name;
                birthDate.value = pessoa.birthday;
                form.dataset.index = index; 
            });
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                pessoas.splice(index, 1); 
                localStorage.setItem('pessoas', JSON.stringify(pessoas)); 
                createElement(pessoas); 
            });
        });

    }

    createElement(pessoas);
});
