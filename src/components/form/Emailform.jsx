import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
// CircularProgress
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";
// import { useNavigate } from "react-router-dom";
// import { useProtectioncontext } from "../../context/Protectioncontext";
import { useMultiformcontext } from "../../context/Multiformcontext";

export function Emailform() {
  const { questiondispatch } = useGetQuestion();
  const { gotoNext } = useMultiformcontext();
  // const { setcodeval } = useProtectioncontext(); questionstate
  // const [loader, setLoader] = useState(false);
  // const { cars } = useCars();
  // const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string("Enter your phone")
      .required("Phone is required")
      .length(10, "Please enter a valid phone"),
    name: yup
      .string("Enter your name")
      .required("Name is required")
      .min(1, "Please enter a valid name"),
  });
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      phone: "0000000000",
      name: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // try {
      //   setLoader(true);
      //   const response = await axios.post(
      //     "https://lossoo.bleedblue.repl.co/injectvals",
      //     {
      //       ...values,
      //       mail: values.email,
      //       countycode: questionstate.country,
      //       cars,
      //       recordcode: Date.now(),
      //       ...questionstate,
      //     }
      //   );
      //   localStorage.setItem("clientcodeval", values.email);
      //   if (response.status === 200) {
      //     setcodeval(values.email);
      //     navigate("/report");
      //   }
      // } catch (error) {
      //   toast.error("Please Try after some time!", {
      //     position: "top-right",
      //     autoClose: 3000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   });
      // } finally {
      //   setLoader(false);
      // }
      // console.log({
      //   emailvalue: values.email,
      //   phoneno: values.phone,
      //   nameval: values.name,
      // });

      questiondispatch({
        type: "SET_MAILFORM",
        payload: {
          emailvalue: values.email,
          phoneno: values.phone,
          nameval: values.name,
        },
      });
      gotoNext();
    },
  });
  return (
    <div>
      <Box>
        <Questiontext>
          Enter your email to save and view your results?
        </Questiontext>
        <Questiontip>
          Your results include your carbon footprint, and a detailed report on
          how you can go carbon neutral.
        </Questiontip>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="phone"
          label="Phone"
          type="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          fullWidth
          sx={{ marginBottom: "1rem" }}
          name="name"
          label="Name"
          type="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Button type="submit" variant="contained">
          Next
        </Button>
      </form>
    </div>
  );
}
