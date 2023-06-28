import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import { FaLocationDot, FaTwitter } from 'react-icons/fa6';

import { IData } from 'context/PageContext';
import { validateData } from 'utils';

export function createBoxInformations(data: IData) {
  const list = [
    { id: 1, title: 'Repos', data: data?.public_repos },
    { id: 2, title: 'Followers', data: data?.followers },
    { id: 3, title: 'Following', data: data?.following }
  ];

  return list;
}

export function createLinks(data: IData) {
  const list = [
    {
      id: 1,
      text: validateData(data?.location || null, 'Not Available'),
      icon: <FaLocationDot size={20} />,
      href: ''
    },
    {
      id: 2,
      text: validateData(data?.twitter_username || null, 'Not Available'),
      icon: <FaTwitter size={20} />,
      href: `https://twitter.com/${
        data?.twitter_username !== null ? data?.twitter_username : '#'
      }`
    },
    {
      id: 3,
      text: validateData(data?.blog || null, 'Not Available'),
      icon: <FaLink size={20} />,
      href: data?.blog !== null ? data?.blog : '#'
    },
    {
      id: 4,
      text: validateData(data?.company || null, 'Not Available'),
      icon: <BsFillBuildingsFill size={20} />,
      href: `https://github.com/${
        data?.company !== null ? data?.company?.replace('@', '') : '#'
      }`
    }
  ];

  return list;
}
