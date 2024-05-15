export const productos = [
    {
        id: 1,
        title: "Americano",
        precio: 900,
        stock : 5,
        categoria:"Americano",
        description: "Con un sabor similar al café negro, el americano consiste en un trago de espresso diluido con agua caliente.",
        ingredients: "Espresso y agua caliente",
        img: "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "Espresso",
        categoria:"Espresso",
        precio: 900,
        stock : 5,
        description: "Un trago de espresso se puede servir solo o usarse como base para la mayoría de las bebidas de café, como lattes y macchiatos.",
        ingredients: "Espresso solamente",
        img: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        title: "Macchiato",
        categoria:"Americano",
        precio: 1200,
        stock : 5,
        description: "Macchiato es otra bebida a base de espresso que tiene una pequeña cantidad de espuma encima. Es el feliz término medio entre un capuchino y un doppio.",
        ingredients: "Espresso y espuma",
        img: "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "Mocha",
        categoria:"Espresso",
        precio: 1250,
        stock : 5,
        description: "Para todos los amantes del chocolate, un moca se enamorará. Mocha es una bebida de chocolate espresso con leche al vapor y espuma.",
        ingredients: "Espresso, leche al vapor y chocolate",
        img: "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        id: 5,
        title: "Hot Chocolate",
        categoria:"Especiales",
        precio: 1200,
        stock : 5,
        description: "Durante los fríos días de invierno, una taza de chocolate caliente te hace sentir cómodo y feliz. También te hace sentir bien porque contiene cafeína energizante.",
        ingredients: "Chocolate y leche",
        img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
        
    },
    {
        id: 6,
        title: "Chai Latte",
        categoria:"Especiales",
        precio: 1500,
        stock : 5,
        description: "Si buscas una bebida caliente sabrosa en pleno invierno, elige el chai latte. La combinación de cardamomo y canela crea un sabor maravilloso",
        ingredients: "Te, leche, jengibre, cardamomo y canela",
        img: "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
        
    },
    {
        id: 7,
        title: "Matcha Latte",
        categoria:"Especiales",
        precio: 1700,
        stock : 5,
        description: "Matcha latte es una bebida de café verde y saludable con té matcha finamente triturado y leche, que ofrece un dulzor suave, un sabor único y un suave toque de cafeína.",
        ingredients: "Matcha, leche, azucar",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D"
      
    }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.categoria === (category)
    );
    setTimeout(() => {
      resolve(productosFiltrados);
    }, 1000);
    
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      resolve(productoFiltrado);
    }, );
  });
};

