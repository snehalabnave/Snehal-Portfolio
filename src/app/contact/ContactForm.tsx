// components/ContactForm.tsx
"use client";
export default function ContactForm() {
  return (
    <div className="flex items-center">
      <form className="space-y-4 w-full max-w-lg">
        <div>
          <label htmlFor="name" className="block text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 mt-1 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 mt-1 border rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 mt-1 border rounded-lg"
            rows={4}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className={`px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 w-full`}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
