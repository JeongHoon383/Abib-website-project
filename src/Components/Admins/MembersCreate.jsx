import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function MembersCreate() {
  const [values, setValues] = useState({
    mid: "",
    name: "",
    password: "",
    phone: "",
    email: "",
    userMileage: "",
    // joinDate: "",
    birthDate: "",
    address1: "",
    gradeName: "",
    postalcode: "",
    address2: "",
  });
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9090/adminpage/create", values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(e.response));
    console.log(e);
  };

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:9090/create", values);
  //     navigate("/");
  //   } catch (error) {
  //     console.log("axios error:", error.response);
  //   }
  // };

  console.log(values.birthDate);
  console.log(values);

  return (
    <div className="mx-auto">
      <form className="w-50" onSubmit={handlesubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="mid" class="form-label">
            Mid :
          </label>
          <input
            type="text"
            class="form-control"
            id="mid"
            placeholder="Enter Name"
            name="mid"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, mid: e.target.value })}
          />
        </div>

        <div className="mb-3 mt-3">
          <label htmlFor="name" class="form-label">
            Name :
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="password" class="form-label">
            Password :
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
            name="password"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="phone" class="form-label">
            Phone :
          </label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="Enter Phone Number"
            name="phone"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="email" class="form-label">
            Email :
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Enter Email"
            name="email"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="User Mileage" class="form-label">
            User Mileage :
          </label>
          <input
            type="text"
            class="form-control"
            id="User Mileage"
            placeholder="Enter User Mileage"
            name="User Mileage"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) =>
              setValues({ ...values, userMileage: e.target.value })
            }
          />
        </div>

        {/* <div class="mb-3 mt-3">
          <label for="join date" class="form-label">
            Join Date
          </label>
          <input
            type="date"
            class="form-control"
            id="join date"
            placeholder="Enter Join Date"
            name="join date"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, joinDate: e.target.value })}
          />
        </div> */}

        <div class="mb-3 mt-3">
          <label htmlFor="birth date" class="form-label">
            Birth Date :
          </label>
          <input
            type="date"
            class="form-control"
            id="birth date"
            placeholder="Choose Birth Date"
            name="birth date"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) =>
              setValues({ ...values, birthDate: e.target.value })
            }
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="address1" class="form-label">
            Address1 :
          </label>
          <input
            type="address1"
            class="form-control"
            id="address1"
            placeholder="Enter Address"
            name="address1"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, address1: e.target.value })}
            c
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="grade name" class="form-label">
            Grade Name :
          </label>
          <input
            type="text"
            class="grade name"
            id="name"
            placeholder="Enter Grade Name"
            name="grade name"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) =>
              setValues({ ...values, gradeName: e.target.value })
            }
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="postal code" class="form-label">
            Postal Code :
          </label>
          <input
            type="text"
            class="postal code"
            id="name"
            placeholder="Enter Grade Name"
            name="postal code"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) =>
              setValues({ ...values, postalcode: e.target.value })
            }
          />
        </div>

        <div class="mb-3 mt-3">
          <label htmlFor="address2" class="form-label">
            Address2 :
          </label>
          <input
            type="address1"
            class="form-control"
            id="address2"
            placeholder="Enter Address"
            name="address2"
            className="h-8 border border-gray-300 p-2"
            onChange={(e) => setValues({ ...values, address2: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="focus:shadow-outline-blue rounded bg-gray-500 px-3 py-1 font-bold text-white hover:bg-blue-700 focus:outline-none active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
