import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventsPage from "../components/EventsPage";
import ResourcesPage from "../components/ResourcesPage";

import { toast } from "react-toastify"; // Importing toast

import "react-toastify/dist/ReactToastify.css"; // Importing toast CSS

const HomePage = () => {
  const navigate = useNavigate();
  const { role } = useParams();
  const [selectedField, setSelectedField] = useState("events");
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const userData = localStorage.getItem("user");
    console.log("from home page");
    if (!userData) {
      console.log("unauthorized access");
      toast.error("Make Sure to login!");
      navigate("/");
    }
    // Simulating loading delay
    const timeoutId = setTimeout(() => {
      setLoading(false); // Once data is loaded, set loading to false
    }, 1000);

    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, [navigate]);

  const renderContent = () => {
    switch (selectedField) {
      case "events":
        return <EventsPage />;
      case "resources":
        return <ResourcesPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onSelectField={setSelectedField} role={role} />

      {renderContent()}
    </div>
  );
};

export default HomePage;
