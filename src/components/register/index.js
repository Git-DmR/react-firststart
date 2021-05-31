import React from "react";
import PropTypes from "prop-types";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid } from "@material-ui/core";

const registerSchema = Yup.object().shape({
  email: Yup.string().trim().required("Required").max(120, "Maximum length is 120 characters").email("Invalid email"),
  firstName: Yup.string().trim().max(60, "Maximum length is 120 characters"),
  secondName: Yup.string().trim().max(60, "Maximum length is 120 characters"),
});

const Register = ({ initialFormValues }) => (
  <Formik initialValues={initialFormValues} validationSchema={registerSchema}>
    <Form autoComplete="off">
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Field />
        </Grid>
      </Grid>
    </Form>
  </Formik>
);

export default Register;
