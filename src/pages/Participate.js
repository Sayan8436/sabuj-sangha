import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./pages.css";

export default function Participate() {
  const [data, setData] = useState({
    name: "",
    group: "",
    competitionName: ""
  });

  const groupOptions = ["ক", "খ", "গ", "সর্বসাধারণ",  "A" , "B" ];
  const competitionOptions = [
    "শঙ্খধ্বনি",
    "মিউজিক্যাল চেয়ার",
    "কুইজ",
    "অন্তাক্ষরী",
    "নৃত্য",
    "অঙ্কন",
    "SCIENCE FAIR",
    "হাঁড়িভাঙ্গা",
    "কবিতা",
    "মোমবাতি প্রজ্জ্বলন"
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
     await axios.post("https://vercel-backend-mu-dun.vercel.app/api/participants", data);


      toast.success("Submitted Successfully! 🎉", {
        position: "top-center",
        autoClose: 2000
      });

      setData({ name: "", group: "", competitionName: "" });
    } catch (error) {

    if (error.response && error.response.status === 409) {
      toast.warn("You already submitted this competition ⚠️", {
        position: "top-center",
        autoClose: 2500
      });
    } else {
      toast.error("Submission Failed ❌", {
        position: "top-center",
        autoClose: 2000
      });
    }
      console.error(error);
    }
  };

  return (
    <div className="participate-page">
      <ToastContainer />

      <form onSubmit={submitForm} className="participate-form">
        <input
          name="name"
          placeholder="প্রতিযোগীর নাম"
          value={data.name}
          onChange={handleChange}
          className="input-field"
          required
        />

        <select
          name="group"
          value={data.group}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">বিভাগ নির্বাচন করুন</option>
          {groupOptions.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>

        <select
          name="competitionName"
          value={data.competitionName}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">প্রতিযোগিতার নাম নির্বাচন করুন</option>
          {competitionOptions.map((comp) => (
            <option key={comp} value={comp}>
              {comp}
            </option>
          ))}
        </select>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
