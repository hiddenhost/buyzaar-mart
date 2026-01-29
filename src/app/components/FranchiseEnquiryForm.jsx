// "use client";

// export default function FranchiseEnquiryForm() {
//   return (
//     <form
//       action="https://formsubmit.co/pathakmansi608@gmail.com"
//       method="POST"
//       className="bg-white rounded-xl shadow-md p-6 space-y-4 max-w-lg mx-auto"
//     >
//       <h3 className="text-2xl font-serif text-center font-medium text-[#b00000]">
//         Franchise Enquiry
//       </h3>

//       <p className="text-sm text-gray-600">
//         Share your interest in owning a Buyzaar Mart franchise. Our team will connect with you shortly.
//       </p>

//       {/* Hidden config */}
//       <input type="hidden" name="_captcha" value="false" />
//       <input type="hidden" name="_template" value="table" />
//       <input type="hidden" name="_subject" value="New Franchise Enquiry" />
//       <input type="hidden" name="_next" value="/thank-you" />

//       {/* Two Column Grid */}
//       <div className="grid grid-cols-2 gap-3">
//         <input
//           type="text"
//           name="Full Name"
//           placeholder="Full Name"
//           required
//           className="w-full border rounded-lg px-3 py-2 text-sm"
//         />

//         <input
//           type="tel"
//           name="Mobile Number"
//           placeholder="Mobile Number"
//           pattern="[0-9]{10}"
//           required
//           className="w-full border rounded-lg px-3 py-2 text-sm"
//         />

//         <input
//           type="email"
//           name="Email"
//           placeholder="Email Address"
//           className="w-full border rounded-lg px-3 py-2 text-sm"
//         />

//         <select
//           name="City"
//           required
//           className="w-full border rounded-lg px-3 py-2 bg-white text-sm"
//         >
//           <option value="">Select City</option>
//           <option>Delhi</option>
//           <option>Noida</option>
//           <option>Greater Noida</option>
//           <option>Ghaziabad</option>
//           <option>Gurgaon</option>
//           <option>Meerut</option>
//           <option>Moradabad</option>
//           <option>Lucknow</option>
//           <option>Kanpur</option>
//           <option>Varanasi</option>
//           <option>Jaipur</option>
//           <option>Dehradun</option>
//           <option>Chandigarh</option>
//         </select>

//         <select
//           name="State"
//           required
//           className="w-full border rounded-lg px-3 py-2 bg-white text-sm col-span-2"
//         >
//           <option value="">Select State</option>
//           <option>Uttar Pradesh</option>
//           <option>Delhi (NCT)</option>
//           <option>Haryana</option>
//           <option>Rajasthan</option>
//           <option>Uttarakhand</option>
//           <option>Punjab</option>
//           <option>Madhya Pradesh</option>
//           <option>Maharashtra</option>
//           <option>Gujarat</option>
//           <option>West Bengal</option>
//           <option>Karnataka</option>
//           <option>Tamil Nadu</option>
//           <option>Telangana</option>
//           <option>Kerala</option>
//           <option>Bihar</option>
//           <option>Jharkhand</option>
//           <option>Chhattisgarh</option>
//           <option>Odisha</option>
//           <option>Assam</option>
//         </select>
//       </div>

//       {/* Full Width Textarea */}
//       <textarea
//         name="Message"
//         placeholder="Briefly tell us about your location, investment plan, or any questions you have"
//         rows="3"
//         className="w-full border rounded-lg px-3 py-2 resize-none text-sm"
//       ></textarea>

//       {/* CTA */}
//       <button
//         type="submit"
//         className="w-full bg-[#000000] text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm"
//       >
//         Request Franchise Details
//       </button>

//       <p className="text-xs text-gray-500 text-center">
//         Your information is safe and will only be used for franchise communication.
//       </p>
//     </form>
//   );
// }
"use client";

import { useState } from "react";

export default function FranchiseEnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/pathakmansi608@gmail.com", {
        method: "POST",
        body: formData,
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-medium text-[#b00000]">
          Submitted Successfully!
        </h3>
        <p className="text-gray-600">
          Thank you for your interest in Buyzaar Mart franchise. Our team will contact you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-[#b00000] hover:underline text-sm"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 space-y-4 max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-serif text-center font-medium text-[#b00000]">
        Franchise Enquiry
      </h3>

      <p className="text-sm text-gray-600">
        Share your interest in owning a Buyzaar Mart franchise. Our team will connect with you shortly.
      </p>

      {/* Hidden config */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_subject" value="New Franchise Enquiry" />

      {/* Two Column Grid */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="Full Name"
          placeholder="Full Name"
          required
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        <input
          type="tel"
          name="Mobile Number"
          placeholder="Mobile Number"
          pattern="[0-9]{10}"
          required
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        <select
          name="City"
          required
          className="w-full border rounded-lg px-3 py-2 bg-white text-sm"
        >
          <option value="">Select City</option>
          <option>Delhi</option>
          <option>Noida</option>
          <option>Greater Noida</option>
          <option>Ghaziabad</option>
          <option>Gurgaon</option>
          <option>Meerut</option>
          <option>Moradabad</option>
          <option>Lucknow</option>
          <option>Kanpur</option>
          <option>Varanasi</option>
          <option>Jaipur</option>
          <option>Dehradun</option>
          <option>Chandigarh</option>
        </select>

        <select
          name="State"
          required
          className="w-full border rounded-lg px-3 py-2 bg-white text-sm col-span-2"
        >
          <option value="">Select State</option>
          <option>Uttar Pradesh</option>
          <option>Delhi (NCT)</option>
          <option>Haryana</option>
          <option>Rajasthan</option>
          <option>Uttarakhand</option>
          <option>Punjab</option>
          <option>Madhya Pradesh</option>
          <option>Maharashtra</option>
          <option>Gujarat</option>
          <option>West Bengal</option>
          <option>Karnataka</option>
          <option>Tamil Nadu</option>
          <option>Telangana</option>
          <option>Kerala</option>
          <option>Bihar</option>
          <option>Jharkhand</option>
          <option>Chhattisgarh</option>
          <option>Odisha</option>
          <option>Assam</option>
        </select>
      </div>

      {/* Full Width Textarea */}
      <textarea
        name="Message"
        placeholder="Briefly tell us about your location, investment plan, or any questions you have"
        rows="3"
        className="w-full border rounded-lg px-3 py-2 resize-none text-sm"
      ></textarea>

      {/* CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#000000] text-white py-2 rounded-lg hover:bg-gray-800 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Request Franchise Details"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your information is safe and will only be used for franchise communication.
      </p>
    </form>
  );
}