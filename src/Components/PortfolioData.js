import { Search } from '@mui/icons-material';
import imga1 from '../img/img/a1.png';
import imga3 from '../img/img/a3.png';
import imga4 from '../img/img/a4.png';
import imga5 from '../img/img/a5.jpg';
import imgp1 from '../img/img/p7.jpg';
import imgp2 from '../img/img/p9.png';
import imgp3 from '../img/img/p8.jpg';
import imgp5 from '../img/img/p10.jpg';
import imgp6 from '../img/img/p11.png';
import imgw1 from '../img/img/w1.webp';
import imgw4 from '../img/img/w2.webp';
import imgw8 from '../img/img/w8.webp';

const PorfolioData = [
  {
    imgsrc: imga1,
    heading: 'Web Design',
    id: 1,
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgp1,
    heading: 'Web Development',
    id: 2,
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgw1,
    heading: 'Logo Design',
    icon: <Search className='fa' />,
    id: 3,
  },
  {
    imgsrc: imgp2,
    heading: 'Web Development',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgw4,
    heading: 'Logo Design',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imga3,
    heading: 'Web Design',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgp5,
    heading: 'Web Development',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgp6,
    heading: 'Web Development',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgw8,
    heading: 'Logo Design',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imga4,
    heading: 'Web Design',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imga5,
    heading: 'Web Design',
    icon: <Search className='fa' />,
  },
  {
    imgsrc: imgp3,
    heading: 'Web Development',
    icon: <Search className='fa' />,
  },
];
export default PorfolioData;

export const getImage = () => PorfolioData;
export const getImageByID = (id) => {
  return PorfolioData.find((data) => data.id === id);
};
