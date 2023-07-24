import { useEffect } from "react";
import { fetchArtistData } from "../../store/reducers/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import '../../css/artist.css'
import { fetchArtifactArtist } from "../../store/reducers/artifactArtistSlice";
import { fetchArtifacts } from "../../store/reducers/artifactSlice";

const ArtistView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    
    
    
    const artist = useSelector((state) => state.artist.artistData.artistData);
    const artifactArtist = useSelector((state) => state.artifactArtist.artifactArtist)
    const artifacts = useSelector((state) => state.artifact.artifacts);

    let artistsArtifacts;
    let singleArtifact;
    let imagePath;
    if(artist){
        if(artifactArtist.length > 0 && artist.artistID){
            artistsArtifacts = artifactArtist.filter((artifact) => artifact.artistID.includes(parseInt(artist.artistID)))
            singleArtifact = artifacts.filter((artifact) => artifact.artifactID === artistsArtifacts[0].artifactID)
            if(singleArtifact[0]){
                imagePath = require(`../../images/${singleArtifact[0].images[0]}`)
            }
        }
    }


        useEffect(() => {
            const asyncFetchData = async () => {
                await dispatch(fetchArtistData(params.id));
                await dispatch(fetchArtifactArtist());
                await dispatch(fetchArtifacts())
            }
            asyncFetchData();
        }, [])

    return (<div className="artist-page">
    {artist && imagePath ? (<div className="artist-wrapper">
        <img src={imagePath} alt="this is where the main image goes" className="artist-main-image"/>
        {artist.company && artist.name ? (<>
                <div className="single-artist-name">{`${artist.name}`}</div>
                <div className="single-artist-title">{`${artist.title}`}</div>
                <div className="artist-company-name">{`${artist.company}`}</div>
            </>
        ) : artist.name ? (<>
                <div className="single-artist-name">{`${artist.name}`}</div>
                <div className="single-artist-title">{`${artist.title}`}</div>
            </>
        ) : (<>
                <div className="solo-artist-name">{`${artist.company}`}</div>
                <div className="single-artist-title">{`${artist.title}`}</div>
            </>
        )}
            {artist.social.map((social, index) => (
                <div key={index}><a href={`${social}`} target="_blank" className="social">{`${social}`}</a></div>      
            ))}
    <div className="line-div"/>
    <div className="artist-blurb">{`${artist.blurb}`}</div>
    </div>) : (null)}
    </div>)
}

export default ArtistView;