import React from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editDataById } from "../store/action/actionItem";
import { useEffect, useState } from "react";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [edit, setEdit] = useState({
    email: "",
    street: "",
    house: "",
    city: "",
  });
  useEffect(() => {
    fetch("http://localhost:3000/" + params.id)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((response) => {
        setEdit({
          email: response.email,
          //   street: response.addr[0].street,
          //   house: response.addr[0].house,
          //   city: response.addr[0].city,
        });
      });
  }, []);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: edit.email,
      //   street: edit.street,
      //   house: edit.house,
      //   city: edit.city,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      //   console.log(values, "<< dari formik");
      dispatch(
        editDataById(
          params.id,
          formik.values.email
          //   formik.values.street,
          //   formik.values.house,
          //   formik.values.city
        )
      ).then(() => {
        navigate("/");
      });
    },
  });
  return (
    <div className="container mt-5 ">
      {/* <p>{JSON.stringify(edit)}</p> */}
      <div className="row justify-content-center">
        <div className="col-4 ">
          {/* {({ errors, touched }) => ( */}
          <form onSubmit={formik.handleSubmit}>
            <div class="card">
              <div class="card-body">
                <div class="col mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                </div>

                <button type="submit" class="btn btn-primary me-2">
                  Submit
                </button>
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </form>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
