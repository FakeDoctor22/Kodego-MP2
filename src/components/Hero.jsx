import { logo } from '../assets';
import './Components.css';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pr-3 pl-3'>
                <span className='flex flex-col items-center desc'>
                <img src={logo} alt="logo" className='rounded-full object-contain px-3'/>
                <span className='indigo_gradient font-extrabold'>
                &lt;MP2 GPT/&gt;
                </span>
                </span>
                
                <button
                    type="button"
                    className='gradient_btn'
                    onClick={() => window.open('https://github.com/FakeDoctor22/Kodego-MP2'
                    )}>
                        GitHub
                </button>
            </nav>

            <h1 className='head_text'>
              <span className='indigo_gradient'>
                MP2 GPT
              </span><br/>
              Article Summarizer
            </h1>

            <h2 className='desc'>
              Get a clear and concise summaries from long articles
              with <span className='indigo_gradient font-extrabold'>
                MP2 GPT
              </span>
            </h2>
    </header>
  )
}

export default Hero