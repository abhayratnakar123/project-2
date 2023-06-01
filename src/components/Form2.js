import React from 'react';
import { Link } from 'react-router-dom';

const Form2 = () => {

  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    category: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
<div className="p-10 flex justify-center bg-white w-full h-full items-center flex-col">

<h1 className="text-2xl font-bold mt-10 mb-5">Create Candidate Requisition</h1>

      <div className="flex flex-col w-[1000px] gap-10 justify-between ">

        <div className="flex gap-10 ">


        <div>
          <div className="mb-4 w-[800px] mb-0 ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
             Job Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 w-[800px] mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Job Details
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>


          <div className="mb-4 w-[800px] mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Job Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              type="text"
              placeholder="Enter your country"
              name="country"
              value={formValues.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="bg-gray-100 p-2 w-full h-[500px] flex justify-evenly flex-col mt-4">
          <h3 className="text-xl font-bold mb-2">Form Data:</h3>
          <p>
            <strong>Job Title:</strong> {formValues.name}
          </p>
          <p>
            <strong>Job Details:</strong> {formValues.email}
          </p>
          <p>
            <strong>Job Location:</strong> {formValues.country}
          </p>
        </div>

        </div>
      </div>

      <div className='flex gap-10'>

      <div
        className=" w-[150px] h-[50px] bg-red-500 rounded-full flex items-center justify-center text-white font-bold 
      "
      >
        <button>
          <Link to="/">preves</Link>
        </button>
      </div>

      <div
        className=" w-[150px] h-[50px] bg-red-500 rounded-full flex items-center justify-center text-white font-bold 
      "
      >
        <button>
          <Link to="/form3">next</Link>
        </button>
      </div>

      </div>
    </div>
  );
};

export default  Form2 ;
