document.addEventListener('DOMContentLoaded', () => {
    // Ambil parameter dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');

    // Definisikan data produk
    const products = {
        1: {
            image: 'images/WhatsApp Image 2024-08-31 at 21.23.05_b2b37c15.jpg',
            name: 'Real Madrid Home',
            price: '$15.00',
            material: '100% Cotton',
            size: 'S, M, L, XL',
            color: 'White',
            brand: 'Adidasss'
        },
        2: {
            image: 'images/WhatsApp Image 2024-08-31 at 21.14.25_0f342c4c.jpg',
            name: 'Real Madrid Away',
            price: '$15.00',
            material: '100% Cotton',
            size: 'M, L, XL, XXL',
            color: 'Black',
            brand: 'Adidasss'
        },
        3: {
            image: 'images/WhatsApp Image 2024-08-31 at 21.14.25_3209e55e.jpg',
            name: 'Real Madrid Third',
            price: '$15.00',
            material: '100% Cotton',
            size: 'S, M, L, XL',
            color: 'Orange',
            brand: 'Adidasss'
        }
    };

    // Update halaman dengan data produk
    if (productId && products[productId]) {
        const product = products[productId];
        const imgElement = document.getElementById('productImage');
        imgElement.src = product.image;
        imgElement.width = 250; // Mengatur lebar gambar
        imgElement.height = imgElement.naturalHeight * (400 / imgElement.naturalWidth);
        document.getElementById('productImage').src = product.image;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('productMaterial').textContent = product.material;
        document.getElementById('productSize').textContent = product.size;
        document.getElementById('productColor').textContent = product.color;
        document.getElementById('productBrand').textContent = product.brand;
    } else {
        document.querySelector('.product-detail').innerHTML = '<p>Product not found.</p>';
    }
});
