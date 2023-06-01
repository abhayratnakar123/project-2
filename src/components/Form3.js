import React from 'react';
import { Link } from 'react-router-dom';

const Form3 = () => {
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
          
          <div className="mb-4 w-[800px] mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Interview Mode
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value="">Mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="mb-4 w-[800px] mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Interview Duration
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              name="category"
              value={formValues.category}
              onChange={handleChange}
            >
              <option value="">Duration</option>
              <option value="1H">1H</option>
              <option value="2H">2H</option>
              <option value="3H">3H</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-100 p-2 w-full h-[500px] flex justify-evenly flex-col mt-4">
          <h3 className="text-xl font-bold mb-2">Form Data:</h3>
          
          <p>
            <strong>Interview Mode:</strong> {formValues.gender}
          </p>
          <p>
            <strong>Interview Duration:</strong> {formValues.category}
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
          <Link to="/form2">preves</Link>
        </button>
      </div>

      <div
        className=" w-[150px] h-[50px] bg-red-500 rounded-full flex items-center justify-center text-white font-bold 
      "
      >
        <button
        >
        Submit  
        </button>
      </div>

      </div>
    </div>
  );
};

export default Form3;
