import person from '../../images/team-1.jpg';
// import { IoCube } from 'react-icons/io5'
import { HiCube } from 'react-icons/hi';
import { MdMessage } from 'react-icons/md';
import { GoSettings } from 'react-icons/go';

export const ProfileInfoContent = {
  img: person,
  name: 'Anne Hathaway',
  msg: 'CEO / Co-Founder',
}

export const ProfileTopHeaderIconContent = [
  {
    // icon: <IoCube />,
    icon: <HiCube />,
    title: 'App',
  },
  {
    icon: <MdMessage />,
    title: 'Message',
  },
  {
    icon: <GoSettings />,
    title: 'Settings',
  },
]