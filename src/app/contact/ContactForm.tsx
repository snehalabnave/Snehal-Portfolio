import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xrbzgega");

  if (state.succeeded) {
    return (
      <div className="flex items-center overflow-hidden">
        <form className="space-y-4 w-full max-w-lg">
          <div className="mx-auto max-w-md p-4 bg-green-100 border border-green-400 text-green-700 rounded-md shadow-md">
            <p className="text-center">Thanks for joining!</p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <form action="https://formspree.io/f/xrbzgega" method="POST" onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
        <div>
          <label htmlFor="name" className="block text-white font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text" 
            name="name"
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-500"
        />

        <div>
          <label htmlFor="email" className="block text-white font-semibold">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500"
        />

        <div>
          <label htmlFor="message" className="block text-white font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500"
        />

        <button 
          type="submit" 
          disabled={state.submitting}
          className={`w-full px-4 py-2 text-white bg-blue-500 rounded-lg ${state.submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          {state.submitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
