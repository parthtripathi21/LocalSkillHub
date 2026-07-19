import { useNavigate } from "react-router-dom";
import ListingForm from "../components/listing/ListingForm";
import { createListing } from "../services/listingService";

export default function CreateListing() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createListing({
        ...data,
        price: Number(data.price),
      });

      alert("Listing created successfully!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to create listing.");
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Create Listing
        </h1>

        <ListingForm
          mode="create"
          onSubmit={handleCreate}
        />
      </div>
    </section>
  );
}