import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='ms-2'>
      <BsFacebook />
      <BsTwitter className='mx-2' />
      <BsInstagram />
    </div>
  )
}

export const ProfileDescriptionContent = {
  text: 'Hi, I’m Anne Hathaway, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
}

export const ProfileDetailsContent = [
  {
    title: 'Full Name:',
    detail: 'Anne Hathaway',
  },
  {
    title: 'Mobile:',
    detail: '(44) 123 1234 123',
  },
  {
    title: 'Email:',
    detail: 'alecthompson@mail.com',
  },
  {
    title: 'Location:',
    detail: 'USA',
  },
  {
    title: 'Socials:',
    detail: <Socials />,
  },
]