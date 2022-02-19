import Hero from '../components/Hero'
import SectionBooks from '../components/SectionBooks';
import SectionMusic from '../components/SectionMusic';
import SectionVideos from '../components/SectionVideos'

const HomePage = () => {
    return (
        <div className="container home">
            <Hero />
            <SectionVideos />
            <SectionMusic />
            <SectionBooks />
        </div>
    )
}

export default HomePage;
