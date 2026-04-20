const products = [
   {
    id: 1,
    title: "Nike Air Max 270",
    price: 150,
    category: "men",
    variants: [
      { image: "https://i.pinimg.com/1200x/d3/8b/d8/d38bd8d372b26697e074e875ed0a3ef5.jpg", color: "#58bae8" },
      { image: "https://i.pinimg.com/1200x/bd/1b/e5/bd1be5cd9b0da8d088f63eca8995f156.jpg", color: "#5d1515" },
      { image: "https://i.pinimg.com/1200x/6c/50/45/6c504556c69ed36574076389d25c2a66.jpg", color: "#2c502d" }
    ],
    description: "Comfortable and stylish sneakers."
  },
  {
    id: 2,
    title: "Adidas Ultraboost",
    price: 180,
    category: "men",
    variants: [
      { image: "https://i.pinimg.com/736x/80/a6/93/80a693a3aa5b4a06374a258ba2c4799b.jpg", color: "#ff9501" },
      { image: "https://i.pinimg.com/736x/a1/6f/5e/a16f5e08971d78c25483a98f16516f37.jpg", color: "#bb4fce" },
      { image: "https://i.pinimg.com/736x/54/18/4d/54184d4c9e33126f9a300826a184d31f.jpg", color: "#fffb05" }
    ],
    description: "Running shoes with great comfort."
  },
  {
    id: 3,
    title: "Puma RS-X",
    price: 130,
    category: "men",
    variants: [
      { image: "https://i.pinimg.com/1200x/78/39/77/7839774467a6f22f0216fc427b0b1651.jpg", color: "#dc2626" },
      { image: "https://i.pinimg.com/736x/67/54/c2/6754c20b8b135788e915475f235c83dd.jpg", color: "#0700c5" },
      { image: "https://i.pinimg.com/1200x/0c/dd/4e/0cdd4ea0aaf4a3ff4d647d61eef771f8.jpg", color: "#16a34a" }
    ],
    description: "Sporty and bold sneakers."
  },
  {
    id: 4,
    title: "Nike Air Force 1",
    price: 120,
    category: "women",
    variants: [
      { image: "https://i.pinimg.com/1200x/0c/dd/4e/0cdd4ea0aaf4a3ff4d647d61eef771f8.jpg", color: "#16a34a" },
      { image: "https://i.pinimg.com/1200x/78/39/77/7839774467a6f22f0216fc427b0b1651.jpg", color: "#dc2626" },
      { image: "https://i.pinimg.com/736x/67/54/c2/6754c20b8b135788e915475f235c83dd.jpg", color: "#0700c5" },
    ],
    description: "Classic everyday sneakers."
  },
  {
    id: 5,
    title: "Adidas Forum Low",
    price: 140,
    category: "women",
    variants: [
      { image: "https://i.pinimg.com/1200x/bd/1b/e5/bd1be5cd9b0da8d088f63eca8995f156.jpg", color: "#5d1515" },
     { image: "https://i.pinimg.com/1200x/d3/8b/d8/d38bd8d372b26697e074e875ed0a3ef5.jpg", color: "#58bae8" },
      { image: "https://i.pinimg.com/1200x/6c/50/45/6c504556c69ed36574076389d25c2a66.jpg", color: "#2c502d" }
    ],
    description: "Street style sneakers."
  },
  {
    id: 6,
    title: "Reebok Nano X",
    price: 160,
    category: "women",
    variants: [
       { image: "https://i.pinimg.com/1200x/6c/50/45/6c504556c69ed36574076389d25c2a66.jpg", color: "#2c502d" },
       { image: "https://i.pinimg.com/1200x/78/39/77/7839774467a6f22f0216fc427b0b1651.jpg", color: "#dc2626" },
      { image: "https://i.pinimg.com/736x/67/54/c2/6754c20b8b135788e915475f235c83dd.jpg", color: "#0700c5" },
    ],
    description: "Training sneakers."
  },
  {
    id: 7,
    title: "Converse Chuck Taylor",
    price: 90,
    category: "unisex",
    variants: [
      { image: "https://i.pinimg.com/736x/67/54/c2/6754c20b8b135788e915475f235c83dd.jpg", color: "#0700c5" },
     { image: "https://i.pinimg.com/1200x/78/39/77/7839774467a6f22f0216fc427b0b1651.jpg", color: "#dc2626" },
      { image: "https://i.pinimg.com/1200x/0c/dd/4e/0cdd4ea0aaf4a3ff4d647d61eef771f8.jpg", color: "#16a34a" }
    ],
    description: "Timeless sneakers."
  },
  {
    id: 8,
    title: "Vans Old Skool",
    price: 100,
    category: "unisex",
    variants: [
       { image: "https://i.pinimg.com/736x/a1/6f/5e/a16f5e08971d78c25483a98f16516f37.jpg", color: "#bb4fce" },
       { image: "https://i.pinimg.com/1200x/d3/8b/d8/d38bd8d372b26697e074e875ed0a3ef5.jpg", color: "#58bae8" },
      { image: "https://i.pinimg.com/1200x/bd/1b/e5/bd1be5cd9b0da8d088f63eca8995f156.jpg", color: "#5d1515" },
    ],
    description: "Skate style shoes."
  },

 
  {
    id: 9,
    title: "Sneaker 9",
    price: 100,
    category: "men",
    variants: [
      { image: "https://i.pinimg.com/736x/54/18/4d/54184d4c9e33126f9a300826a184d31f.jpg", color: "#fffb05" },
     { image: "https://i.pinimg.com/736x/80/a6/93/80a693a3aa5b4a06374a258ba2c4799b.jpg", color: "#ff9501" },
      { image: "https://i.pinimg.com/736x/a1/6f/5e/a16f5e08971d78c25483a98f16516f37.jpg", color: "#bb4fce" },
    ],
    description: "Modern sneakers."
  },
  {
    id: 10,
    title: "Sneaker 10",
    price: 105,
    category: "women",
    variants: [
       { image: "https://i.pinimg.com/1200x/97/99/1d/97991d62b61da7ac1bcf8e46f747c22c.jpg", color: "#d4ba92" },
      { image: "https://i.pinimg.com/1200x/bd/1b/e5/bd1be5cd9b0da8d088f63eca8995f156.jpg", color: "#5d1515" },
      { image: "https://i.pinimg.com/1200x/6c/50/45/6c504556c69ed36574076389d25c2a66.jpg", color: "#2c502d" }
    ],
    description: "Modern sneakers."
  },
];

export default products;