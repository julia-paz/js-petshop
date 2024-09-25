// Função para salvar o produto na localStorage
function saveProduct(product, storageType) {
    let products = JSON.parse(localStorage. getItem(storageType)) || [];
    products.push(product);
    localStorage.setItem(storageType, JSON.stringify(products));
}

// FUnção para lidar com a submissão do formulário
document.getElementById('productForm').addEventListener('submit', (e) => {
// prevenir "falta de informação"
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productDate = document.getElementById('productDate').value;
    const storageType = document.getElementById('storageType').value;

    // variável p/ poder manipular objetos
    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        date: productDate
    };

    // salvar os produtos dentro do banco de dados (localStorage)
    saveProduct(product, storageType);
    // ``: para ser exibido na mesma linha
    alert(`Produto ${productName} adicionado em ${storageType}.`);

    // DOM "pega" o elemento do formulário e reseta
    document.getElementById('productForm').reset();
});  

// Simulando uma requisição a uma API externa
function fetchAnimals() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users') // API fictícia
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

// Função para exibir dados da API de "animais atendidos"
document.getElementById('fetchAnimals').addEventListener('click', () => {
    fetchAnimals()
    .then(animals => {
        const animalList = document.getElementById('animalList');
        animalList.innerHTML = '';

        animals.forEach(animal => {
            const li = document.createElement('li');
            li.textContent = `${animal.name} - ${animal.email}`;
            animalList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Erro: ', error);
    });
});
// (prova) redija o codigo em portugol, mdnweb