import { images } from './index';


const featuresData = [
    {
        img: images.one,
        title: 'REQUEST A RIDE',
        description:
            'Have to reach the office or going for shopping? Just put your current location and destination and search a ride that suits you.',
    },
    {
        img: images.Two,
        title: 'INSTANT NOTIFICATIONS',
        description:
            'Get instant notification for your rides and be in contact with fellow riders all the time.',
    },
    {
        img: images.Three,
        title: 'POST A RIDE',
        description:
            'Going somewhere but hate to Just post your ride details and destination and search and publish it'
    },
    {
        img: images.Four,
        title: 'CASHLESS PAYMENT',
        description:
            'Payment made easy by using your own Wallet - no more cash to carry'
    },
]

const BenefitsData = [
    {
        img: images.Cash,
        number: '01',
        header: 'Flexible Working Hours',
        discrp: 
        'You can decide when, and how much time you want to drive'
    },
    {
        img: images.Worker,
        number: '02',
        header: 'Earnings',
        discrip: 
        'By driving with tere you can earn more.'
    },
    {
        img: images.workertime,
        number: '03',
        header: 'Customer Support 24/7',
        discrip: 
        'Tere is a local servoce provide and we are proud to support you in your local language. we are proud to be at your service 24/7'
    }
]

export default { featuresData, BenefitsData };