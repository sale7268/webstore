import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Legend',
            email:'admin@csumb.edu',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'John',
            email:'user@csumb.edu',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            name:'Ferrari 488 Pista',
            category:'SportsCar',
            image:'/images/p1.png',
            price:300000,
            countInStock: 1,
            brand:'Ferrari',
            rating:4,
            numReviews:5,
            description:'3.9-liter Twin-Turbo V8 Gas'
        },
        {
            name:'Lamborghini Aventador SV',
            category:'SportsCar',
            image:'/images/p2.png',
            price:490700,
            countInStock: 2,
            brand:'Lamborghini',
            rating:3.5,
            numReviews:5,
            description:'6.5-liter V12 Gas'
        },
        {
            name:'Porsche GT3 RS',
            category:'SportsCar',
            image:'/images/p3.png',
            price:187500,
            countInStock: 0,
            brand:'Porsche',
            rating:4,
            numReviews:5,
            description:'4.0-liter Flat 6 Gas'
        },
        {
            name:'Mercedes-AMG G63',
            category:'Off-Road',
            image:'/images/p4.png',
            price:156450,
            countInStock: 3,
            brand:'Mercedes-AMG',
            rating:3.5,
            numReviews:5,
            description:'4.0-liter Twin-Turbo V8 Gas'
        },
        {
            name:'Jeep Wrangler',
            category:'Off-Road',
            image:'/images/p5.png',
            price:38695,
            countInStock: 5,
            brand:'Jeep',
            rating:3.5,
            numReviews:5,
            description:'3.6-liter V6 Gas'
        },
        {
            name:'Land Rover Defender',
            category:'Off-Road',
            image:'/images/p6.png',
            price:53350,
            countInStock: 5,
            brand:'Land Rover',
            rating:4,
            numReviews:5,
            description:'2.0-liter Turbo Inline-4 Gas'
        },
    ],
};
export default data;