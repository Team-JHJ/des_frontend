import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="h-32 bg-[#768496B0]">
            <div className="container mx-auto h-full px-10 py-8 box-border text-white flex flex-col justify-center gap-5 text-center">
                <span>
                    <span>
                        Backend{' '}
                        <Link to="https://github.com/kjeok00" target="_blank">
                            kjeok00 <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </span>
                    <span> • </span>
                    <span>
                        Frontend{' '}
                        <a href="https://github.com/khanna01" target="_blank">
                            khanna01 <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </span>
                </span>
                <p>© 2024 Jeju Univ, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}
