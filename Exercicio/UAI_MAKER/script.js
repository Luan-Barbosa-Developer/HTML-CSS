document.addEventListener("DOMContentLoaded", function() {
    const productTypeSelect = document.getElementById("productType");
    const productList = document.querySelector(".product-list");
  
    // Lista de produtos (exemplo)
    const products = [
      { name: "Impressora 3D Modelo A", type: "impressora" },
      { name: "Filamento PLA 1.75mm", type: "filamento" },
      { name: "Kit de Acessórios para Impressora 3D", type: "acessorio" },
      // Adicione mais produtos conforme necessário
    ];
  
    // Função para exibir os produtos com base no tipo selecionado
    function showProductsByType(type) {
      productList.innerHTML = "";
      const filteredProducts = products.filter(product => type === "" || product.type === type);
      filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>Tipo: ${product.type}</p>
        `;
        productList.appendChild(productItem);
      });
    }
  
    // Evento para filtrar os produtos ao alterar o tipo selecionado
    productTypeSelect.addEventListener("change", function() {
      const selectedType = this.value;
      showProductsByType(selectedType);
    });
  
    // Exibir todos os produtos inicialmente
    showProductsByType("");
  });
  