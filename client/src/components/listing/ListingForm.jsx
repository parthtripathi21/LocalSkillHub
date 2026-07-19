import { useEffect, useState } from "react";

const EMPTY_FORM = {
  title: "",
  category: "",
  description: "",
  price: "",
  location: "",
  phone: "",
  email: "",
};

export default function ListingForm({
  mode = "create",
  initialData,
  onSubmit,
}) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    if (!initialData) return;

    setFormData({
      ...EMPTY_FORM,
      ...initialData,
    });
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }

      if (mode === "create") {
        setFormData(EMPTY_FORM);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
    >
      <input
        type="text"
        name="title"
        placeholder="Service Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <textarea
        name="description"
        rows={4}
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        {mode === "create" ? "Create Listing" : "Update Listing"}
      </button>
    </form>
  );
}