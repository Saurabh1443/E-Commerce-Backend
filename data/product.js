const products = [
    {
    
      name: 'boAt Airdopes 121v2 TWS Earbuds',
      image: '/images/electronics/BoatHeadphones.jpeg',
      description:
        'boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black) ',
      brand: 'Boat',
      category: 'Electronics',
      price: 20.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 5,
    },
    {
    
      name: 'Micromax IN 1b (Purple, 32 GB)',
      image: '/images/electronics/iPhone-13.jpg',
      description:
        'Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.',
      brand: 'Micromax',
      category: 'Electronics',
      price: 599.99,
      countInStock: 7,
      rating: 4,
      numReviews: 5,
    },
    {
     
      name: 'Cannon EOS 80D DSLR Camera',
      image: '/images/electronics/camera.jpg',
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 929.99,
      countInStock: 5,
      rating: 3,
      numReviews: 5,
    },
    {
     
      name: 'Sony Playstation 4 Pro White Version',
      image: '/images/electronics/playStation.jpg',
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
      brand: 'Sony',
      category: 'Electronics',
      price: 399.99,
      countInStock: 2,
      rating: 3.5,
      numReviews: 5,
    },
    {
     
      name: 'Logitech G-Series Gaming Mouse',
      image: '/images/electronics/mouse.jpg',
      description:
        'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
      brand: 'Logitech',
      category: 'Electronics',
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 5,
    },
    {
     
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/electronics/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      countInStock: 0,
      rating: 4.5,
      numReviews: 5,
  },
  {
     
    name: 'PUMA Hustle V2',
    image: '/images/footwear/footwear-1.webp',
    description:
      'Meet Puma Hustle V3 - Our most popular puma shoes with a fabric design. It is our most compact smart shoes that is comfortable in all sizes',
    brand: 'Puma',
    category: 'Footwear',
    price: 1169,
    countInStock: 4,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'CAMPUS HURRICANE Running Shoes For Men ',
    image: '/images/footwear/footwear-2.webp',
    description:
      'Meet Campus Hurricane - Our most popular campus shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Campus',
    category: 'Footwear',
    price: 899,
    countInStock: 8,
    rating: 3.5,
    numReviews: 5,
  },
  {
     
    name: 'CAMPUS ROLLZ Running Shoes For Men ',
    image: '/images/footwear/footwear-3.webp',
    description:
      'Meet Campus Rollz - Our most popular campus shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Campus',
    category: 'Footwear',
    price: 1119,
    countInStock: 12,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'CAMPUS HURRICANE Running Shoes For Men ',
    image: '/images/footwear/footwear-4.webp',
    description:
      'Meet Campus Hurricane - Our most popular campus shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Campus',
    category: 'Footwear',
    price: 899,
    countInStock: 13,
    rating: 4,
    numReviews: 5,
  },
  {
     
    name: 'PUMA Alpine Running Shoes For Men ',
    image: '/images/footwear/footwear-5.webp',
    description:
      'Meet Puma Alpine - Our most popular puma shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Puma',
    category: 'Footwear',
    price: 1239,
    countInStock: 15,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'ACTION Athleo ATG-496 Mesh Running/Gym/Outdoor/Walking/Sports Shoes Running Shoes For Men ',
    image: '/images/footwear/footwear-7.webp',
    description:
      'Meet Action Athleo ATG-496 - Our most popular action shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Action',
    category: 'Footwear',
    price: 901,
    countInStock: 30,
    rating: 2.5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Casual Shoes For Men ',
    image: '/images/footwear/footwear-8.webp',
    description:
      'Meet Woodland Casual - Our most popular woodland shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price: 2345,
    countInStock: 13,
    rating: 4.5,
    numReviews: 5,
  },
  
  {
     
    name: 'BRUTON Flip Flops For Men ',
    image: '/images/footwear/footwear-9.webp',
    description:
      'Meet Bruton Flip Flop - Our most popular Bruton slipper with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Bruton',
    category: 'Footwear',
    price: 231,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Casual Shoes For Men ',
    image: '/images/footwear/footwear-10.webp',
    description:
      'Meet Woodland Casual - Our most popular woodland shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price: 2399,
    countInStock: 4,
    rating: 5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Flip Flops For Men ',
    image: '/images/footwear/footwear-11.webp',
    description:
      'Meet Woodland Flip Flop - Our most popular Woodland slipper with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price: 1231,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Running Shoes For Men ',
    image: '/images/footwear/footwear-12.webp',
    description:
      'Meet Woodland Running Shoes - Our most popular Woodland shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price:2319,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Sandels For Men ',
    image: '/images/footwear/footwear-13.webp',
    description:
      'Meet Woodland Sandle - Our most popular Woodland sandel with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price:1453,
    countInStock: 6,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Shoes For Men ',
    image: '/images/footwear/footwear-14.webp',
    description:
      'Meet Woodland Shoes - Our most popular Woodland shoes with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price: 1999,
    countInStock: 16,
    rating: 4.5,
    numReviews: 5,
  },
  {
     
    name: 'WOODLAND Flip Flops For Men ',
    image: '/images/footwear/footwear-15.webp',
    description:
      'Meet Woodland Flip Flop - Our most popular Woodland slipper with a stylish design. It is our most popular shoes that is comfortable in all sizes',
    brand: 'Woodland',
    category: 'Footwear',
    price: 999,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },
  
  
]
module.exports = products;