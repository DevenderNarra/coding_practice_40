import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            type="button"
            aria-label="Play video"
            className="video-trigger"
          >
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose
                className="close-button"
                data-testid="closeButton"
                aria-label="Close video"
                position="right"
              />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
