// src/pages/AdminTable.jsx
import React, { useEffect, useState } from "react";
import { database, auth } from "../../../firebase";
import { ref, onValue, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login");
    });

    const fetchData = async () => {
      const sources = ["popupEnquiries", "footerEnquiries", "contactEnquiries"];
      const allData = [];

      sources.forEach((source) => {
        const dbRef = ref(database, source);
        onValue(dbRef, (snapshot) => {
          const records = snapshot.val();
          if (records) {
            const formatted = Object.entries(records).map(([id, values]) => ({
              id,
              source: source.replace("Enquiries", ""), // popup, footer, contact
              message: values.message || "N/A", // handle missing message
              name: values.name || "N/A",
              email: values.email || "N/A",
              mobile: values.mobile || values.phone || "N/A",
              timestamp: values.timestamp || 0,
            }));
            setData((prev) => {
              // Merge new entries and remove duplicates
              const merged = [
                ...prev.filter((d) => d.source !== source),
                ...formatted,
              ];
              return merged.sort((a, b) => b.timestamp - a.timestamp);
            });
          }
        });
      });
    };

    fetchData();
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const logToGoogleSheet = async (entry) => {
    const sheetURL =
      "https://script.google.com/macros/s/AKfycbxY8vgBQyds6j_CoRHjhqAB3givsZx9HQNr_brW3LnsOFsChhq07dGC2P-32WXcsV5X/exec";

    const payload = {
      name: entry.name,
      email: entry.email,
      mobile: entry.mobile,
      id: entry.id,
      status: "Deleted by admin",
      source: entry.source,
    };

    try {
      await fetch(sheetURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Logged deletion to Google Sheet ✅");
    } catch (error) {
      console.error("Google Sheet logging failed ❌", error);
    }
  };

  const handleDelete = async (entryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    const deletedEntry = data.find((item) => item.id === entryId);
    if (!deletedEntry) return;

    try {
      await logToGoogleSheet(deletedEntry);
      await remove(ref(database, `${deletedEntry.source}Enquiries/${entryId}`));
      setData((prev) => prev.filter((item) => item.id !== entryId));
    } catch (error) {
      console.error("Failed to delete entry or log:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-600">
            All Enquiries Dashboard
          </h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-md transition"
          >
            Logout
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Mobile</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Source</th>
                <th className="px-4 py-3 text-left">Date/Time</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((entry, index) => (
                <tr key={entry.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.mobile}</td>
                  <td className="px-4 py-2">{entry.message}</td>
                  <td className="px-4 py-2">{entry.source}</td>
                  <td className="px-4 py-2">
                    {entry.timestamp
                      ? new Date(entry.timestamp).toLocaleString("en-IN")
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="px-3 py-1 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center px-4 py-6 text-gray-500"
                  >
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
