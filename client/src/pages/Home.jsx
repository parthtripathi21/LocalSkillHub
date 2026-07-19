import Hero from "../components/home/Hero";
import SearchBar from "../components/home/SearchBar";
import FeaturedListings from "../components/home/FeaturedListings";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <FeaturedListings />
    </>
  );
}