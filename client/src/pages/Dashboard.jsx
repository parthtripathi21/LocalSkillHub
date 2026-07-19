import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListingCard from "../components/listing/ListingCard";
import ConfirmModal from "../components/common/ConfirmModal";

import {
  getListings,
  deleteListing,
} from "../services/listingService";

export default function Dashboard() {
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const data = await getListings();
      setMyListings(data);
    } catch (error) {
      console.error("Failed to fetch listings:", error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await deleteListing(selectedId);

      setMyListings((prev) =>
        prev.filter((listing) => listing.id !== selectedId)
      );

      setShowModal(false);
      setSelectedId(null);
    } catch (error) {
      console.error(error);
      alert("Failed to delete listing.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <>
      <section className="min-h-screen bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h1 className="text-4xl font-bold text-white">
                My Dashboard
              </h1>

              <p className="mt-2 text-slate-400">
                Manage available service listings.
              </p>
            </div>

            <Link
              to="/dashboard/create"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              + Add Listing
            </Link>

          </div>

          {/* Loading */}
          {loading ? (
            <div className="py-20 text-center text-slate-400">
              Loading listings...
            </div>
          ) : myListings.length === 0 ? (

            /* Empty State */
            <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">

              <h2 className="text-2xl font-semibold text-white">
                No listings yet
              </h2>

              <p className="mt-3 text-slate-400">
                Create your first listing to get started.
              </p>

            </div>

          ) : (

            /* Listings */
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {myListings.map((listing) => (
                <div key={listing.id}>

                  <ListingCard listing={listing} />

                  <div className="mt-4 flex gap-3">

                    <Link
                      to={`/dashboard/edit/${listing.id}`}
                      className="flex-1 rounded-lg bg-amber-500 py-2 text-center font-medium text-white transition hover:bg-amber-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => openDeleteModal(listing.id)}
                      className="flex-1 rounded-lg bg-red-600 py-2 font-medium text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))}

            </div>

          )}

        </div>
      </section>

      <ConfirmModal
        isOpen={showModal}
        title="Delete Listing"
        message="Are you sure you want to delete this listing? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={closeModal}
      />
    </>
  );
}