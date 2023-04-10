// Hats
import image1 from '../../assets/images/img-27.jpg';
import image2 from '../../assets/images/img-44.jpg';
import image3 from '../../assets/images/img-45.jpg';
import image4 from '../../assets/images/img-46.jpg';
import image5 from '../../assets/images/img-47.jpg';
import image6 from '../../assets/images/img-49.jpg';
import image7 from '../../assets/images/img-33.jpg';
import image8 from '../../assets/images/img-19.jpg';
import image9 from '../../assets/images/img-9.jpg';

// Sneakers
import image10 from '../../assets/images/img-20.jpg';
import image11 from '../../assets/images/img-12.jpg';
import image12 from '../../assets/images/img-22.jpg';
import image13 from '../../assets/images/img-26.jpg';
import image14 from '../../assets/images/img-36.jpg';
import image15 from '../../assets/images/img-31.jpg';
import image16 from '../../assets/images/img-39.jpg';
import image17 from '../../assets/images/img-40.jpg';

// Jackets
import image18 from '../../assets/images/img-10.jpg';
import image19 from '../../assets/images/img-8.jpg';
import image20 from '../../assets/images/img-7.jpg';
import image21 from '../../assets/images/img-41.jpg';
import image22 from '../../assets/images/img-43.jpg';

// Mens
import image23 from '../../assets/images/img-5.jpg';
import image24 from '../../assets/images/img-6.jpg';
import image25 from '../../assets/images/img-4.jpg';
import image26 from '../../assets/images/img-2.jpeg';
import image27 from '../../assets/images/img-25.jpg';
import image28 from '../../assets/images/img-35.jpg';
import image29 from '../../assets/images/img-48.jpg';

// Womens
import image30 from '../../assets/images/img-3.jpeg';
import image31 from '../../assets/images/img-1.jpeg';
import image32 from '../../assets/images/img-16.jpg';
import image33 from '../../assets/images/img-30.jpg';
import image34 from '../../assets/images/img-14.jpg';
import image35 from '../../assets/images/img-50.jpg';


const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: image1,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: image2,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: image3,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: image4,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: image5,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: image6,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: image7,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: image8,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: image9,
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: image10,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: image11,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: image12,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: image13,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: image14,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: image15,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: image16,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: image17,
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: image18,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: image19,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: image20,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: image25,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: image22,
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: image30,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: image31,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: image32,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: image33,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: image34,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: image35,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: image29,
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: image23,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: image24,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: image21,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: image26,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: image27,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: image28,
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
