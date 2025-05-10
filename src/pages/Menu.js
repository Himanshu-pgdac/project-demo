import React from 'react';
import './Menu.css';
import { useCart } from '../CartContext'; // Import the cart context

const cookies = [
  {
    id: 1,
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/8/24/MW1312-molly-yeh-mochi-cookies_s4x3.jpg.rend.hgtvcom.616.462.suffix/1692910539324.webp",
    title: "Chocolate Chip Cookie",
    description: "Classic chocolate chip cookies with a gooey, chewy center.",
    price: 9.99
  },
  {
    id: 2,
    image: "https://static.wixstatic.com/media/4729b9_f1467732dd324265851bac2e41cb736b~mv2.webp/v1/fill/w_480,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4729b9_f1467732dd324265851bac2e41cb736b~mv2.webp",
    title: "Red Velvet Cake",
    description: "Rich, velvety cake with a creamy frosting.",
    price: 12.99
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTN1X2jV7oBeJzEBnGhYGaImz5WWn4Mmq3A&s",
    title: "Oatmeal Raisin Cookie",
    description: "Soft and chewy oatmeal cookies with sweet raisins.",
    price: 8.99
  },
  {
    id: 4,
    image: "https://bluebowlrecipes.com/wp-content/uploads/2023/08/chocolate-truffle-cake-8844.jpg",
    title: "Chocolate Cake",
    description: "Chocolate layer cake – Cake made from stacked layers of cake held together by filling.",
    price: 14.99
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqynabpPcrbW28QYVUfWDOdXm_aOJFco-ONA&s",
    title: "Hot Chocolate Cookies",
    description: "Hot chocolate cookies are rich, fudgy cookies packed with cocoa, melty chocolate.",
    price: 10.99
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    title: "Matcha Green Tea Cookies",
    description: "Soft cookies infused with the earthy taste of matcha green tea.",
    price: 11.99
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Lemon Zest Shortbread",
    description: "Crispy, buttery shortbread with a tangy lemon zest twist.",
    price: 9.99
  },
  {
    id: 8,
    image: "https://th.bing.com/th/id/R.cae9a8d8bac62c4a6f37d320035bed55?rik=ZKtft%2fvZ1vljcg&riu=http%3a%2f%2fassets.marthastewart.com%2fstyles%2fwmax-1500%2fd20%2fa98906_1001_brownies%2fa98906_1001_brownies_sq.jpg%3fitok%3dTiKB7fQZ&ehk=Vphuz5RJjzQxMrqWGAeNvcVWaG6KWyhQCYYJEfZSeLY%3d&risl=&pid=ImgRaw&r=0",
    title: "Caramel Pecan Brownies",
    description: "Rich chocolate brownies topped with caramel and crunchy pecans.",
    price: 12.99
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGy9Udh17Cr6m3p47N0et_MHJxvXejALMg7A&s",
    title: "Classic Vanilla Cake",
    description: "Moist vanilla sponge layered with creamy vanilla buttercream.",
    price: 13.99
  },
];

const Menu = () => {
  const { addToCart } = useCart(); // Get the addToCart function from context

  const handleAddToCart = (cookie) => {
    console.log('Adding to cart:', cookie); // Debug log
    addToCart({
      id: cookie.id,
      name: cookie.title,
      price: cookie.price,
      image: cookie.image
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">Our Artisan Cookie Collection</h1>
        <p className="menu-subtitle">Handcrafted with premium ingredients and love</p>
      </div>
      
      <div className="menu-grid">
        {cookies.map(cookie => (
          <div key={cookie.id} className="menu-item">
            <div className="image-container">
              <img src={cookie.image} alt={cookie.title} className="cookie-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="cookie-content">
              <h2 className="cookie-name">{cookie.title}</h2>
              <p className="cookie-description">{cookie.description}</p>
              <div className="cookie-footer">
                <span className="cookie-price">${cookie.price.toFixed(2)}</span>
                <button 
                  className="order-button"
                  onClick={() => addToCart(cookie)}
                >
                  Add to Cart
                  <span className="button-icon">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="menu-cta">
        <p>Can't decide? Try our <span className="highlight">Cookie Sampler Box</span></p>
        <button className="cta-button">Explore All Flavors</button>
      </div>
    </div>
  );
};

export default Menu;