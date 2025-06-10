import { useEffect, useState } from 'react';
const API_KEY = '1867f6d6d149421642a02ed42eafb2b0';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
import './UseEffectHookTMDB.css';
import { motion } from 'framer-motion';

function UseEffectHookTMDB() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (err) {
        console.log('Error fetching movies:', err);
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [trailerLoading, setTrailerLoading] = useState(false);

  const handlePosterClick = async (movie) => {
    setSelectedMovie(movie.id);
    setTrailerLoading(true);
    setTrailerKey(null);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
      );
      setTrailerKey(trailer ? trailer.key : null);
    } catch (err) {
      setTrailerKey(null);
    } finally {
      setTrailerLoading(false);
    }
  };

  const handleCloseTrailer = () => {
    setSelectedMovie(null);
    setTrailerKey(null);
  };

  return (
    <div className="grid">
      {loading
        ? Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card skeleton-card">
              <div className="skeleton-image" />
              <div className="skeleton-title" />
              <div className="skeleton-text" />
              <div className="skeleton-release" />
            </div>
          ))
        : movies.map((movie, index) => (
            <motion.div
              className="card"
              key={movie.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              {selectedMovie === movie.id ? (
                <div className="trailer">
                  {trailerLoading ? (
                    <div>Loading trailer...</div>
                  ) : trailerKey ? (
                    <>
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '12px' }}
                      ></iframe>
                      <button
                        className="close-btn"
                        onClick={handleCloseTrailer}
                        style={{ position: 'absolute', top: 8, right: 8 }}
                      >
                        Close
                      </button>
                    </>
                  ) : (
                    <>
                      <div>No trailer found.</div>
                      <button
                        className="close-btn"
                        onClick={handleCloseTrailer}
                        style={{ position: 'absolute', top: 8, right: 8 }}
                      >
                        Close
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <img
                  src={`${IMAGE_BASE}${movie.poster_path}`}
                  alt={movie.title}
                  className="card-image"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handlePosterClick(movie)}
                />
              )}
              <h2 className="card-title">{movie.title}</h2>
              <p className="card-overview">{movie.overview}</p>
              <p className="card-release">
                Release Date:{' '}
                {new Date(movie.release_date).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
    </div>
  );
}

export default UseEffectHookTMDB;
