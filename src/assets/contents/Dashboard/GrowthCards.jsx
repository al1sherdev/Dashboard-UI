import { MdPaid, MdPublic, MdEmojiEvents, MdShoppingCart } from 'react-icons/md';

export const GrowthCardContents = [
  {
    title: "Today's money",
    data: '$53,000',
    percent: '+55%',
    icon: <MdPaid />,
  },
  {
    title: "Today's Users",
    data: '2,300',
    percent: '+3%',
    icon: <MdPublic />,
  },
  {
    title: 'New Clients',
    data: '+3,462',
    percent: '+2%',
    icon: <MdEmojiEvents />,
  },
  {
    title: 'Sales',
    data: '$103,430',
    percent: '+5%',
    icon: <MdShoppingCart />,
  },
]