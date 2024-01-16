import { Route, Routes, Navigate } from 'react-router';
import { Suspense, lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Credits = lazy(() => import('../components/Credits/Credits'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="Movies" element={<Movie />} />
            <Route path="Movies/:movieId" element={<MovieDetails />}>
                <Route path="Credits" element={<Credits />} />
                <Route path="Reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
