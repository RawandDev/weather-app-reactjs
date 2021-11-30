import { useState } from "react";
import { motion } from "framer-motion";

function Input({ query, onHandleSubmit }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onHandleSubmit(value);
  }

  // console.log(value);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.form
      variants={container}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      className="flex text-gray-400"
    >
      <motion.input
        variants={item}
        className="bg-gray-50 p-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 mr-1 container"
        type="text"
        placeholder="Enter your city"
        onChange={handleChange}
      />
      <motion.button variants={item} type="submit" className="btn-yellow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </motion.button>
    </motion.form>
  );
}

export default Input;
