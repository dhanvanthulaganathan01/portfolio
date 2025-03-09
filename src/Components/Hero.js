import HeroImg from '../assets/hero.png';
import {  AiOutlineLinkedin, AiOutlineBehanceSquare, AiOutlineGithub} from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Software developer and UI Designer',
        social: {
            behance: 'https://www.behance.net/dhanvanthiri',
            linkedin: 'https://www.linkedin.com/in/dhanvanthri-ulaganathan-963b452a0/',
            github:'https://github.com/dhanvanthulaganathan01'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-blue-600'>Dhanvanthiri</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
    
                <a href={config.social.behance} className=' text-white pr-5 hover:text-blue-500'><AiOutlineBehanceSquare size={40}/></a>
                <a href={config.social.linkedin} className='  text-white pr-5 hover:text-blue-500'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className=' text-white hover:text-blue-500'><AiOutlineGithub size={40}/></a>
            </div>
    </div>
    <img className='md:w-1/3' src={HeroImg} />
    </section>
}
