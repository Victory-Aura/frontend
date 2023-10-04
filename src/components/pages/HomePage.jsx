import { useGetImg } from "../../hooks/useGetImg";
import Loader from "../Loader/Loader";
import useGetAndSetData from "../../hooks/useGetAndSetData";
import ImgService from "../../api/imgservice";
import './HomePage.scss';

const HomePage = () => {
    const [Dataimg, isLoading] = useGetAndSetData(ImgService.getMainImg);
    let bg = useGetImg('bg', Dataimg);
    let logo = useGetImg('logo', Dataimg);
    
    return (
        <>
            <div>
            {isLoading
            ? <div className='brand1' >
                <Loader style={{marginTop:300}}></Loader>
            </div>
            :
            <div className='brand1' style={{ backgroundImage: `url(${bg})` }}>
                <img src={logo} alt='' style={{ marginTop: 50 }} className='logo' />
                <div className='brandAbout1'>ЛЮБИТЕЛЬСКИЕ И ПРОФЕССИОНАЛЬНЫЕ ТУРНИРЫ</div>
                <h1 className='brandName'>VICTORY AURA</h1>
                <div className='brandAbout2'>ОТ ГЕЙМЕРОВ ДЛЯ ГЕЙМЕРОВ</div>
            </div>
        }
        
    </div>
        </>
    );
};

export default HomePage;