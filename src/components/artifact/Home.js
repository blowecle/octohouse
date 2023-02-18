import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import '../../css/Home.css'
import { Link } from 'react-router-dom';
import Artifact from './Artifact';
import Slider from '../slider/Slider';
import { fetchArtifacts } from '../../store/reducers/artifactSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArtifacts())
    }, []);

    const theArtifacts = useSelector(state => state);

    console.log({theArtifacts})

    const artifacts = [
        {
            id: 1,
            name: 'Mermaid',
            images: ['https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142354/octo-house/CBB03599-ACA6-4889-8FE9-42FDDF4FE96F_wblp9u.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142353/octo-house/ACC9744B-0023-4A03-A034-9D523B2FEC10_oofomv.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/c_crop,h_2049,w_1186/v1674142353/octo-house/5C2DC8EF-DB10-4A20-9FF7-6AB37B827B2D_hjaxvc.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180515015_1_lyvmvb.jpg'],
        },
        {
            id: 2,
            name: 'Octopus',
            images: ['https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142351/octo-house/04623E17-079F-493E-9BFC-20C7FF2CAB3C_t1kwp4.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_182504428_l8uyjw.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859071/octo-house/PXL_20221118_180602805_wneidb.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1668859072/octo-house/PXL_20221118_180823038_dhxmrr.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142330/octo-house/BF4B77B8-D5E8-44EE-82C9-7A9061FCB2DE_owauzb.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142333/octo-house/89314AD1-C869-4077-93CF-B03424571125_r012gb.jpg']
        },
        {
            id: 3,
            name: 'Seahorse',
            images: ['https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142332/octo-house/8C34EC60-C99E-4BCB-8DA0-743CC166A4D5_lnzuyi.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142332/octo-house/47153EFA-9104-4DD3-BC70-C5401DEAB1D2_r9da7t.jpg',
                    'https://res.cloudinary.com/ddqp7dojc/image/upload/v1674142326/octo-house/A513FC14-44EE-4F46-9BCE-C0392E979A0B_xwlffr.jpg',]
        }
    ]

    return (<>
            <div className='home-container'>
                <Slider/>
                { artifacts.map((artifact) => (
                    <Artifact key={artifact.id} artifact={artifact}/>
                ))}
                <Link to='/blog'>
                    <div className='temp-link'>CLICK ME</div>
                </Link>
            <div className='before-after-slider'>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1673983927/octo-house/PXL_20230117_193004917_fzax1v.jpg' />}
                itemTwo={<ReactCompareSliderImage src='https://res.cloudinary.com/ddqp7dojc/image/upload/v1668440619/octo-house/-8773391783772082014_cbis9x.jpg' />}
                position={1}
                />
            </div>
        </div>
    </>
  )
}

export default Home;