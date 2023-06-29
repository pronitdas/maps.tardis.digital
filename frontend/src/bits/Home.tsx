import BaseMap from './BaseMap';
import Sidebar from './Sidebar'
import search from '../effects/Search.svg'

export const Home = () => {
    return (
        <div>

            <Sidebar />
            <BaseMap viewState={{
                longitude: 73.75,
                latitude: 18.73,
                zoom: 9.6,
                maxZoom: 22,
                minZoom: 0, 
                pitch: 0,
                bearing: 0
            }} />
        </div>
    )
}

export default Home;