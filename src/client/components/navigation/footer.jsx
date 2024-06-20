import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className = "footer">
            <a href="#top">Back to Top</a>
            <a href="https://github.com/CPatterson94/Its_A_Shoe_In" target="_blank" rel="noopener noreferrer" className="git">
                <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: "#000000" }} />
            </a>
        </footer>
    );
}

export default Footer;