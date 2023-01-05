import Talentum from '../../assets/talentum-demo.png';
import Api from '../../assets/print_api.png';
import Cryptopedia from '../../assets/cryptopedia_demo.png';
import Mouse from '../../assets/mouse_rand_demo.png';



export const projectsData = [
  {
    title: 'My own news API',
      image: Api,
      category: "backend",
      link: "https://rapidapi.com/matheusalc2001/api/crypto-news30",
    id: 0,
  },
  {
    title: 'Talentum',
    image: Talentum,
    category: "fullstack",
    link:"http://www.talentum.website/",
    id: 1,
  },
  {
    title: 'Mouse Randomization app',
      image: Mouse,
      category: 'fullstack',
      link:"https://mouse-randomization.herokuapp.com/",
    id: 2,
  },
  {
    title: 'Cryptopedia',
    image: Cryptopedia,
    category: 'frontend',
    link:"https://the-cryptopedia.netlify.app/",
    id: 3,
  },
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'backend',
  },
  {
    name: 'fullstack',
  },
  {
    name: 'frontend',
  }
]
