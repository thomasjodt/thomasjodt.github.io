import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'><HomeButton /></Link>
      <Link to='about-me'><AboutButton /></Link>
      <Link to='portfolio'><PortfolioButton /></Link>
      <Link to='contact-me'><ContactButton /></Link>
    </nav>
  )
}

function HomeButton() {
  return (
    <svg className='navbar__button' xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="currentColor">
      <filter id='inset-shadow'>
        <feOffset dx='0' dy='4'/>
        <feGaussianBlur stdDeviation='4' result='offset-blur'/>
        <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse'/>
        <feFlood flood-color='rgba(0,0,0,0.5)' flood-opacity='.95' result='color'/>
        <feComposite operator='in' in='color' in2='inverse' result='shadow'/>
        <feComposite operator='over' in='shadow' in2='SourceGraphic'/>
      </filter>
      <path d="M11 42Q9.75 42 8.875 41.125Q8 40.25 8 39V19.5Q8 18.8 8.325 18.15Q8.65 17.5 9.2 17.1L22.2 7.35Q22.6 7.05 23.05 6.9Q23.5 6.75 24 6.75Q24.5 6.75 24.95 6.9Q25.4 7.05 25.8 7.35L38.8 17.1Q39.35 17.5 39.675 18.15Q40 18.8 40 19.5V39Q40 40.25 39.125 41.125Q38.25 42 37 42H28V28H20V42Z"/>
    </svg>
  )
}
function AboutButton() {
  return (
    <svg className='navbar__button' xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="currentColor">
      <filter id='inset-shadow'>
        <feOffset dx='0' dy='4'/>
        <feGaussianBlur stdDeviation='4' result='offset-blur'/>
        <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse'/>
        <feFlood flood-color='rgba(0,0,0,0.25)' flood-opacity='.95' result='color'/>
        <feComposite operator='in' in='color' in2='inverse' result='shadow'/>
        <feComposite operator='over' in='shadow' in2='SourceGraphic'/>
      </filter>
      <path d="M24 23.95Q20.7 23.95 18.6 21.85Q16.5 19.75 16.5 16.45Q16.5 13.15 18.6 11.05Q20.7 8.95 24 8.95Q27.3 8.95 29.4 11.05Q31.5 13.15 31.5 16.45Q31.5 19.75 29.4 21.85Q27.3 23.95 24 23.95ZM8 40V35.3Q8 33.4 8.95 32.05Q9.9 30.7 11.4 30Q14.75 28.5 17.825 27.75Q20.9 27 24 27Q27.1 27 30.15 27.775Q33.2 28.55 36.55 30Q38.1 30.7 39.05 32.05Q40 33.4 40 35.3V40Z"/>
    </svg>
  )
}
function PortfolioButton() {
  return (
    <svg className='navbar__button' xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <filter id='inset-shadow'>
        <feOffset dx='0' dy='4'/>
        <feGaussianBlur stdDeviation='4' result='offset-blur'/>
        <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse'/>
        <feFlood flood-color='rgba(0,0,0,0.25)' flood-opacity='.95' result='color'/>
        <feComposite operator='in' in='color' in2='inverse' result='shadow'/>
        <feComposite operator='over' in='shadow' in2='SourceGraphic'/>
      </filter>
      <path d="M7 42Q5.8 42 4.9 41.1Q4 40.2 4 39V14.35Q4 13.15 4.9 12.25Q5.8 11.35 7 11.35H16.5V7Q16.5 5.8 17.4 4.9Q18.3 4 19.5 4H28.5Q29.7 4 30.6 4.9Q31.5 5.8 31.5 7V11.35H41Q42.2 11.35 43.1 12.25Q44 13.15 44 14.35V39Q44 40.2 43.1 41.1Q42.2 42 41 42ZM19.5 11.35H28.5V7Q28.5 7 28.5 7Q28.5 7 28.5 7H19.5Q19.5 7 19.5 7Q19.5 7 19.5 7Z"/>
    </svg>
  )
}
function ContactButton() {
  return (
    <svg className='navbar__button' xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <filter id='inset-shadow'>
        <feOffset dx='0' dy='4'/>
        <feGaussianBlur stdDeviation='4' result='offset-blur'/>
        <feComposite operator='out' in='SourceGraphic' in2='offset-blur' result='inverse'/>
        <feFlood flood-color='rgba(0,0,0,0.25)' flood-opacity='.95' result='color'/>
        <feComposite operator='in' in='color' in2='inverse' result='shadow'/>
        <feComposite operator='over' in='shadow' in2='SourceGraphic'/>
      </filter>
      <path d="M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V37Q44 38.2 43.1 39.1Q42.2 40 41 40ZM24 24.6Q24.25 24.6 24.425 24.525Q24.6 24.45 24.8 24.35L40.5 14.1Q40.75 13.95 40.875 13.7Q41 13.45 41 13.15Q41 12.5 40.425 12.125Q39.85 11.75 39.25 12.15L24 21.9L8.8 12.15Q8.2 11.75 7.6 12.1Q7 12.45 7 13.1Q7 13.4 7.15 13.675Q7.3 13.95 7.5 14.1L23.2 24.35Q23.4 24.45 23.575 24.525Q23.75 24.6 24 24.6Z"/>
    </svg>
  )
}