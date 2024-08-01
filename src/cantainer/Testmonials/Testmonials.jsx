import './Testmonials.scss'
import { images } from '../../constants'


const Testmonials = () => {
  return (
    <div  className='testmonial-div'>
      <div  className='testmonial-sml-div'>
        <h1 style={{marginBottom: "30px"}}><b>About Me</b></h1>
        <span >
          Hii , I am<strong> Prince N R</strong>. I graduated in Electronics and communication Engineering but found my true passion in coding,  thanks to my love for mathamaics.  Now I am working as a mern stack developer at StackMod
           Innovations.  I enjoy creating web applications and am excited to work with you on new and interesting projects. 
          <br />
          <br />
                    <pre>
                           If you do what you love, <br />
                     you'll never work a day in your life.
                    </pre>
        </span >
      </div>
      <div className='testmonial-img'>
        <img src={images.prince1} />
      </div>
    </div>
  )
}

export default Testmonials