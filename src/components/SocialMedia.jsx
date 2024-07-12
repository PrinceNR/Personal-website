import { BsInstagram ,  BsGithub } from 'react-icons/bs'
import { GrLinkedin } from "react-icons/gr";

const SocialMedia = () => {
  return (
    <div className='app__social'>
          <a href='https://www.linkedin.com/in/prince-n-r-2826aa201/' target='_blank'> 
          <GrLinkedin />  
          </a>
          <a href='https://github.com/PrinceNR' target='_blank'>
          <BsGithub />
          </a>
          <a href='#'>
            <BsInstagram/>
          </a>
    </div>
  )
}

export default SocialMedia