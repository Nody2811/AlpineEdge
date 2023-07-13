import locationImg from '../../img/footer/location.svg'
import phoneImg from '../../img/footer/phone.svg'
import emailImg from '../../img/footer/email.svg'

const footerData = [
    {
        header: 'Services',
        links: [
            {
                url: "#",
                text: 'EU-Regulation/ISO Standards Compliance',
            },{
                url: "#",
                text: 'Cloud Migration',
            },{
                url: "#",
                text: 'Cloud Computing',
            },{
                url: "#",
                text: 'Virtualization',
            },{
                url: "#",
                text: 'General IT Support',
            },
        ]
    },
    {
        header: 'About Us',
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
                text: 'Lorem ipsum',
            },{
                icon: phoneImg,
                url: "#",
                text: '(316) 555-0116',
            },{
                icon: emailImg,
                url: "#",
                text: 'hello@example.com',
            }
        ]
    }
];

export default footerData