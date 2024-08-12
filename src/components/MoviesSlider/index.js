import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <>
      <h1>Action Movies</h1>
      <ul className="slider-container">
        <Slider {...settings}>
          {moviesList
            .filter(movie => movie.categoryId === 'ACTION')
            .map(filteredMovie => (
              <MovieItem movieDetails={filteredMovie} key={filteredMovie.id} />
            ))}
        </Slider>
      </ul>
      <h1>Comedy Movies</h1>
      <ul className="slider-container">
        <Slider {...settings}>
          {moviesList
            .filter(movie => movie.categoryId === 'COMEDY')
            .map(filteredMovie => (
              <MovieItem movieDetails={filteredMovie} key={filteredMovie.id} />
            ))}
        </Slider>
      </ul>
    </>
  )
}
export default MoviesSlider
