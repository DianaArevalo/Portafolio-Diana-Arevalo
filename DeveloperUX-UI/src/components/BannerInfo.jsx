import { Link } from 'react-router-dom'



const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className="font-semibold">Diana</span> ✌
            <br />
            A Junior Developer from Colombia


        </h1>

    ),
    2: (
        <InfoBox
            text="I'm a Software Development Technician with two years of self-taught learning, I am passionate about development and consistently seek new challenges to apply and expand my skills."
            link='/about'
            btnText='more about me'
        />

    ),
    3: (
        <InfoBox
            text='Led multiple projects to success over this years. Curious about the impact?.'
            link='/services'
            btnText='Visit my portafolio'
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link='/contact'
            btnText="Let's talk"
        />
    )
}

const BannerInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default BannerInfo