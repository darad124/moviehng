import { useRouter } from 'next/router';

const VideoPlayer = () => {
    const router = useRouter();
    const { trailerUrl } = router.query;
  
    return (
      <div style={{position: 'relative', paddingTop: '42.25%'}}>
        <iframe
          style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
          src={`${trailerUrl}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
};
  
export default VideoPlayer;
