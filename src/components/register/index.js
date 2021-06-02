import React from "react";
import PropTypes from "prop-types";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid } from "@material-ui/core";
import FormikTextField from "../../modules/Formik/TextField";
import FormikPasswordField from "../../modules/Formik/PasswordField";

const registerSchema = Yup.object().shape({
  email: Yup.string().trim().required("Required").max(120, "Maximum length is 120 characters").email("Invalid email"),
  firstName: Yup.string().trim().max(60, "Maximum length is 60 characters"),
  secondName: Yup.string().trim().max(60, "Maximum length is 60 characters"),
  password: Yup.string(),
  confirmPassword: Yup.string()
    .required("Required")
    .when("password", {
      is: (val) => val && val.length > 0,
      then: Yup.string().oneOf([Yup.ref("password")], "Password must match"),
    }),
});

const Register = (props) => {
  console.log("Props", props);
  return (
    <Formik initialValues={props.initialFormValues} validationSchema={registerSchema}>
      <Form autoComplete="off">
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Field color="secondary" name="email" label="Email" type="email" component={FormikTextField} required />
          </Grid>
          <Grid xs={12} item>
            <Field color="secondary" name="firstName" label="First Name" component={FormikTextField} required />
            <Field color="secondary" name="secondName" label="Second Name" component={FormikTextField} required />
          </Grid>
          <Grid item>
            <Field
              color="secondary"
              name="password"
              label="Password"
              type="password"
              component={FormikPasswordField}
              required
            />
          </Grid>
          {props.children}
          <Grid item>
            <Field
              color="secondary"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              component={FormikPasswordField}
              required
            />
          </Grid>
        </Grid>
        {props.children}
      </Form>
    </Formik>
  );
};

Register.propTypes = {
  initialFormValues: PropTypes.object.isRequired,
};
export default Register;
