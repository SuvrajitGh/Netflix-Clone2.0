import BannerWrapper from "@/components/BannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getFantasyMovies,
  getHorrorMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const horrorMovies = await getHorrorMovies();
  const fantasyMovies = await getFantasyMovies();
  return (
    <main className="">
      <BannerWrapper />
      <div className=" flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
        <MoviesCarousel movies={horrorMovies} title="Horror" />
        <MoviesCarousel movies={fantasyMovies} title="Fantasy" />
      </div>
    </main>
  );
}
