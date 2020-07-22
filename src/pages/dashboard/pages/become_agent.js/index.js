import React, { useState, useEffect } from "react";
import DashBoardBody from "../../styles/dashbord_body";
import Input from "components/input";
import { useFormik } from "formik";
import Select from "components/Select";
import States from "data/states.json";

export default function ChangePassword() {
  const id_type = [
    { name: "voters card" },
    { name: "National Id" },
    { name: "National Password" },
    { name: "Drivers' lience" },
  ];
  const occupation = [
    { name: "Student" },
    { name: "Civil Servant" },
    { name: "Public Servant" },
  ];

  const status = [{ name: "Single" }, { name: "Married" }, { name: "Divorce" }];
  const [lga, setLga] = useState();
  const [state, setState] = useState();
  useEffect(() => {
    if (state) {
      const LGA = States.filter((eachState) => {
        if (eachState.name === state) {
          return true;
        } else {
          return false;
        }
      });
      setLga(LGA[0].locals);
    }
  }, [state]);

  const validate = (values) => {
    const errors = {};

    if (!values.id_type) {
      errors.id_type = "Identification card is required";
    }
    if (!values.id_number) {
      errors.id_number = "Identification number is required";
    }
    if (!values.occupation) {
      errors.occupation = "Your Occupation is required";
    }
    if (!values.marital_status) {
      errors.marital_status = "Marital status is required";
    }
    if (!values.lga) {
      errors.lga = "LGA is required";
    }
    if (!values.state_of_origin) {
      errors.state_of_origin = "State of origin is required";
    }

    return errors;
  };
  const form = useFormik({
    initialValues: {
      id_type: "",
      id_number: "",
      occupation: "",
      marital_status: "",
      lga: "",
      state_of_origin: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(createAgent(values)).then((res) => {
      //   if (res) {
      //     toastSuccess(`Agent ${values.name} was created successfully`);
      //     history.push({
      //       pathname: "/admin/agent",
      //     });
      //   }
      // });
    },
    validate,
    validateOnChange: true,
  });

  const onInputFocus = (name) => () => form.setFieldError(name, undefined);
  return (
    <>
      <DashBoardBody.Header>
        <h1>Become An Agent</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.Form onSubmit={form.handleSubmit}>
          <div className="input-group">
            <div className="input-control">
              <Select
                name="id_type"
                id="id_type"
                fullWidth
                label="IDENTIFICATION TYPE"
                options={id_type}
                onChange={(e) => {
                  form.setFieldValue("id_type", e.target.value);
                }}
                value={form.values.id_type}
                error={!!form.errors.id_type && form.touched.id_type}
                errorText={
                  form.touched.id_type ? form.errors.id_type : undefined
                }
                onFocus={onInputFocus("id_type")}
              />
            </div>
            <div className="input-control">
              <Input
                name="id_number"
                id="id_number"
                label="IDENTIFICTION NUMBER"
                round
                big
                fullWidth
                placeholder="IDENTIFICTION NUMBER"
                onChange={(e) => {
                  form.setFieldValue("id_number", e.target.value);
                }}
                value={form.values.id_number}
                error={!!form.errors.id_number && form.touched.id_number}
                errorText={
                  form.touched.id_number ? form.errors.id_number : undefined
                }
                onFocus={onInputFocus("id_number")}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-control">
              <Select
                name="occupation"
                id="occupation"
                fullWidth
                label="OCCUPATION"
                options={occupation}
                onChange={(e) => {
                  form.setFieldValue("occupation", e.target.value);
                }}
                value={form.values.occupation}
                error={!!form.errors.occupation && form.touched.occupation}
                errorText={
                  form.touched.occupation ? form.errors.occupation : undefined
                }
                onFocus={onInputFocus("occupation")}
              />
            </div>
            <div className="input-control">
              <Select
                name="marital_status"
                id="marital_status"
                fullWidth
                label="MARITAL STATUS"
                options={status}
                onChange={(e) => {
                  form.setFieldValue("marital_status", e.target.value);
                }}
                value={form.values.marital_status}
                error={
                  !!form.errors.marital_status && form.touched.marital_status
                }
                errorText={
                  form.touched.marital_status
                    ? form.errors.marital_status
                    : undefined
                }
                onFocus={onInputFocus("marital_status")}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-control">
              <Select
                name="state_of_origin"
                id="state_of_origin"
                fullWidth
                label="STATE OF ORIGIN"
                options={States}
                onChange={(e) => {
                  setState(e.target.value);
                  form.setFieldValue("state_of_origin", e.target.value);
                }}
                value={form.values.state_of_origin}
                error={
                  !!form.errors.state_of_origin && form.touched.state_of_origin
                }
                errorText={
                  form.touched.state_of_origin
                    ? form.errors.state_of_origin
                    : undefined
                }
                onFocus={onInputFocus("state_of_origin")}
              />
            </div>
            <div className="input-control">
              <Select
                name="lga"
                id="lga"
                fullWidth
                label="LGA"
                options={lga}
                onChange={(e) => {
                  form.setFieldValue("lga", e.target.value);
                }}
                value={form.values.lga}
                error={!!form.errors.lga && form.touched.lga}
                errorText={form.touched.lga ? form.errors.lga : undefined}
                onFocus={onInputFocus("lga")}
              />
            </div>
          </div>
          <button>Submit</button>
        </DashBoardBody.Form>
      </DashBoardBody>
    </>
  );
}
