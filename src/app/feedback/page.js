'use client';

import { useEffect, useState } from 'react';

export default function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState('');

  const fetchFeedbacks = async (query = '') => {
    const res = await fetch(`/api/feedback?search=${encodeURIComponent(query)}`);
    const data = await res.json();
    if (data.success) setFeedbacks(data.data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchFeedbacks(value);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 font-sans px-4">
      <h1 className="text-3xl font-semibold mb-6">Feedback Viewer</h1>
      <input
        type="text"
        placeholder="Search by name, email, or message"
        value={search}
        onChange={handleSearch}
        className="w-full px-3 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="list-none p-0">
        {feedbacks.length === 0 && (
          <li className="text-gray-500">No feedback found.</li>
        )}
        {feedbacks.map((f) => (
          <li
            key={f._id}
            className="mb-6 border-b border-gray-300 pb-4"
          >
            <strong className="text-lg">{f.name}</strong>{' '}
            <span className="text-gray-600">({f.email})</span>
            <p className="mt-2">{f.message}</p>
            <small className="text-gray-500 text-sm">
              {new Date(f.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
