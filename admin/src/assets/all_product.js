
import p1_image from './p1.png';
import p2_image from './p2.png';
import p3_image from './p3.png';
import p4_image from './p4.png';
import c1_img from './c1.avif';
import c2_img from './c2.avif';
import c3_img from './c3.jpg';
import c4_img from './c4.jpeg';
import c5_img from './c5.jpg';
import c6_img from './c6.avif';
import c7_img from './fc7.avif';
import c8_img from './c8.avif';
import c9_img from './c9.avif';
import c10_img from './c10.avif';
import c11_img from './c11.jpg';
import c12_img from './c12.avif';
import c13_img from './c13.jpg';
import c14_img from './c14.jpg';
import c15_img from './c15.jpg';
import c16_img from './c16.jpg';
import c17_img from './c17.jpg';
import c18_img from './c18.avif';
import c19_img from './c19.jpg';
import c20_img from './c20.jpg';
import c21_img from './c21.jpg';
import c22_img from './c22.jpg';
import c23_img from './c23.jpg';



const newCollectionItems = [
  {
    id: 1,
    name: "Pink Jacket",
    image: p1_image,
    new_price: 59.99,
    old_price: 79.99,
    category: "womens"
  },
  {
    id: 2,
    name: "Winter highs",
    image: p2_image,
    new_price: 39.99,
    old_price: 49.99,
    category: "womens"
  },
  {
    id: 3,
    name: "Hoddies",
    image: p3_image,
    new_price: 29.99,
    old_price: 39.99,
    category: "womens"
  },
  {
    id: 4,
    name: "Black tube top",
    image: p4_image,
    new_price: 89.99,
    old_price: 109.99,
    category: "womens"
  },
  
  {
    id: 5,
    name: "Black Leather Skirt with Red Cardigan",
    image: c1_img,
    new_price: 69.99,
    old_price: 89.99,
    category: "womens"
  },
  {
    id: 6,
    name: "Black Leather trendy Jacket",
    image: c2_img,
    new_price: 49.99,
    old_price: 59.99,
    category: "womens"
  },
  {
    id: 7,
    name: "Men's Casual White Shirt",
    image: c6_img,
    new_price: 59.99,
    old_price: 79.99,
    category: "mens"
  },
  {
    id: 8,
    name: "Bule Shirts for Kid's",
    image: c4_img,
    new_price: 39.99,
    old_price: 49.99,
    category: "kids"
  },
  {
    id: 9,
    name: "Beige color Frock",
    image: c5_img,
    new_price: 29.99,
    old_price: 39.99,
    category: "kids"
  },
  {
    id: 10,
    name: "Men's Casual Green Shirt",
    image: c9_img,
    new_price: 44.99,
    old_price: 69.99,
    category: "mens"
  },
  {
    id: 11,
    name: "Daisy Tops",
    image: c3_img,
    new_price: 79.99,
    old_price: 99.99,
    category: "womens"
  },
  {
    id: 12,
    name: "Men's Black Jackets",
    image: c7_img,
    new_price: 29.99,
    old_price: 39.99,
    category: "mens"
  },
  {
    id: 13,
    name: "Kids' Jeans with printed Shrit",
    image: c8_img,
    new_price: 69.99,
    old_price: 79.99,
    category: "kids"
  },
  {
    id: 14,
    name: "Red Floral Gown",
    image: c10_img,
    new_price: 89.99,
    old_price: 99.99,
    category: "womens"
  },
  {
    id: 15,
    name: "Men's suite",
    image: c11_img,
    new_price: 109.99,
    old_price: 115.99,
    category: "mens"
  },
  {
    id: 16,
    name: "Men's Casual Shirt",
    image: c12_img,
    new_price: 129.99,
    old_price: 139.99,
    category: "mens"
  },
  {
    id: 17,
    name: "Street Fashion",
    image: c13_img,
    new_price: 189.99,
    old_price: 199.99,
    category: "mens"
  },
  {
    id: 18,
    name: "Men's Kurta",
    image: c14_img,
    new_price: 99.99,
    old_price: 109.99,
    category: "mens"
  },
  {
    id: 19,
    name: "Men's  Black suite",
    image: c15_img,
    new_price: 149.99,
    old_price: 159.99,
    category: "mens"
  },
  {
    id: 20,
    name: "Pink skrit",
    image: c16_img,
    new_price: 89.99,
    old_price: 99.99,
    category: "womens"
  },
  {
    id: 21,
    name: "Red satain Gown",
    image: c17_img,
    new_price: 89.99,
    old_price: 99.99,
    category: "womens"
  },
  {
    id: 22,
    name: "Saree",
    image: c18_img,
    new_price: 118.99,
    old_price: 129.99,
    category: "womens"
  },
  {
    id: 23,
    name: "White pants",
    image: c19_img,
    new_price: 150.99,
    old_price: 162.99,
    category: "womens"
  },
  {
    id: 24,
    name: "Jeans Skrits",
    image: c20_img,
    new_price: 79.99,
    old_price: 89.99,
    category: "kids"
  },
  {
    id: 25,
    name: "White Jacket",
    image: c21_img,
    new_price: 89.99,
    old_price: 99.99,
    category: "kids"
  },
  {
    id: 26,
    name: "Kids' Casual Dress",
    image: c22_img,
    new_price: 139.99,
    old_price: 149.99,
    category: "kids"
  },
  {
    id: 27,
    name: "Kids' Pajama",
    image: c23_img,
    new_price: 69.99,
    old_price: 89.99,
    category: "kids"
  }
  
];


const all_products = [ ...newCollectionItems];

export default all_products;
