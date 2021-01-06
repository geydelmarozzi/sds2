import './styles.css';
import { ReactComponent as YouTubeImage } from './Youtube.svg';
import { ReactComponent as LinkedinImage } from './Linkedin.svg';
import { ReactComponent as InstagramImage } from './Instagram.svg';

function Footer() {
    return (
        <footer className='main-footer'>
            App desenvolvido por Geydel durante a 2a ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_new">
                    <YouTubeImage />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                    <LinkedinImage />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <InstagramImage />
                </a>                                
            </div>
        </footer>
    )
}

export default Footer;