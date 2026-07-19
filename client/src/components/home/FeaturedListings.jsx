import { useEffect, useState } from "react";

import ListingCard from "../listing/ListingCard";
import { getListings } from "../../services/listingService";

export default function FeaturedListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const data = await getListings();
      setListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-3 text-center text-4xl font-bold text-white">
          Latest Listings
        </h2>

        <p className="mb-12 text-center text-slate-400">
          Find skilled professionals near you.
        </p>

        {loading ? (
          <p className="text-center text-slate-400">
            Loading listings...
          </p>
        ) : listings.length === 0 ? (
          <p className="text-center text-slate-400">
            No listings found.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}