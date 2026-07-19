import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ListingForm from "../components/listing/ListingForm";

import {
  getListingById,
  updateListing,
} from "../services/listingService";

export default function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListing();
  }, []);

  const fetchListing = async () => {
    try {
      const data = await getListingById(id);
      setListing(data);
    } catch (error) {
      console.error(error);
      alert("Failed to load listing.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await updateListing(id, {
        ...data,
        price: Number(data.price),
      });

      alert("Listing updated successfully!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to update listing.");
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 flex items-center justify-center">
        <h2 className="text-white text-2xl">
          Loading...
        </h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-2xl px-6">

        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Edit Listing
        </h1>

        <ListingForm
          mode="edit"
          initialData={listing}
          onSubmit={handleUpdate}
        />

      </div>
    </section>
  );
}