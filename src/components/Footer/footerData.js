import locationImg from '../../img/footer/location.svg'
import phoneImg from '../../img/footer/phone.svg'
import emailImg from '../../img/footer/email.svg'

const footerData = [
    {
        header: 'Dienstleistungen',
        links: [
            {
                url: "#",
                text: 'EU-Regulationen/ISO Standards',
            },{
                url: "#",
                text: 'Cloud Migration',
            },{
                url: "#",
                text: 'Cloud Computing',
            },{
                url: "#",
                text: 'Virtualisation',
            },{
                url: "#",
                text: 'IT Support',
            },
        ]
    },
    {
        header: 'Über uns',
        links: [
            {
                url: "#",
                text: 'About Us',
            },{
                url: "#",
                text: 'Our Services',
            },{
                url: "#",
                text: 'Why Choose Us',
            },{
                url: "#",
                text: 'Contact Us',
            },{
                url: "#",
                text: 'Become A Patner',
            }
        ]
    },
    {
        header: 'Contact Info',
        links: [
            {
                icon: locationImg,
                url: "#",
                text: 'Tirana, Albanien',
            },{
                icon: phoneImg,
                url: "#",
                text: '(316) 555-0116',
            },{
                icon: emailImg,
                url: "#",
                text: 'info@alpineedge.ch',
            }
        ]
    }
];

export default footerData