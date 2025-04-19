import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        'http://localhost:4000/send/mail',
        { name, email, message },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setName('');
      setEmail('');
      setMessage('');
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
  {/* Your Contact section content here */}

    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/contact.jpg')" }}>
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 py-12 gap-10">

        {/* LEFT: GET IN TOUCH Info */}
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 w-full max-w-xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">GET IN TOUCH</h2>
          <p className="text-gray-700 text-base md:text-lg mb-8 text-justify leading-relaxed">
            Ready to transform your body and boost your confidence? Join our Gymnasium Hall in Nankana Sahib and take the first step towards a healthier, stronger you. Our gym is fully equipped with modern machines, experienced trainers, and a friendly atmosphere that motivates you to give your best every day. Join us today and be part of a community that encourages discipline, strength, and progress. Your dream body is just a workout away!
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Location</p>
                <p className="text-lg font-semibold text-gray-800">Gymnasium Hall, Nankana Sahib</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Email</p>
                <p className="text-lg font-semibold text-gray-800">gymansiumhallnns@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="text-sm font-medium text-gray-600">Phone</p>
                <p className="text-lg font-semibold text-gray-800">0305-4765907</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          onSubmit={sendMail}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"
        >
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h1>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center"
          >
            {loading ? <ClipLoader color="white" size={20} /> : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
