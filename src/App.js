import './App.css';
import { Button, Grid, Stack, TextField, Tooltip } from '@mui/material';
import profilepicture from './images/profilepicture.jpeg.jpg';
import { Appbar } from './components/Appbar';
import { useState } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// initialFields
const initialFieldValues = {
  fullname: "",
  mail: '',
  mobile: '',
  subject: '',

}

function App() {

  const errorMsg = {
    fullname: "",
    mail: "",
    mobile: "",
    subject: "",

  };

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState(errorMsg);
  const [message, setMessage] = useState('');

  // handle Input change
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "mobile") {
      let fixedMobile = value.slice(0, 10);
      setValues({ ...values, mobile: fixedMobile });
    }
    else {
      setValues({ ...values, [name]: value });
    }
  }

  // Email validation
  const emailHandler = (e) => {

    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validEmail.test(values.mail)) {
      setErrors({ ...errors, mail: "" })
    } else if (values.mail !== '' && values.mail !== null) {
      setErrors({ ...errors, mail: "Only Email format" })
    }
  };

  const emailHider = () => {
    setErrors({ ...errors, mail: "" })
  }


  // validate scheme
  const validateDetails = () => {
    const temp = errorMsg;
    temp.fullname = values.fullname ? '' : 'Fullname is required';
    temp.mail = values.mail ? '' : 'Mail Id is required';
    temp.mobile = values.mobile ? '' : 'Mobile is required';
    temp.subject = values.subject ? '' : 'Subject is required';

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === '');
  };

  // for username validation
  const userNameHandler = () => {

    const validUserName = /^[A-Za-z ]+$/;

    if (validUserName.test(values.fullname)) {
      setErrors({ ...errors, fullname: "" })
    } else if (values.fullname !== '' && values.fullname !== null) {
      setErrors({ ...errors, fullname: "Only aphabets" })
    }
  };

  const userNameHider = () => {
    setErrors({ ...errors, fullname: "" })
  }

  const setMsg = () => {
    setMessage('');
    setValues(initialFieldValues);
  }
  const formSubmit = () => {
    if (!validateDetails()) {
      return
    }

    setMessage('Your Contact is submitted !')

    setTimeout(setMsg, 4000);

  }
  return (


    <div className="wrapper">
      <Appbar />
      <section id="home">
        <Grid lg={12} item container spacing={2} style={{ backgroundColor: "#bfbfbf" }}>
          <Grid item lg={6} sm={12} xs={12} style={{ padding: "170px", paddingBottom: "0px" }}>
            <div >
              <h1 style={{ paddingBottom: "4px" }}>Hi, I'm Arunkumar</h1>
              <h3 style={{ paddingBottom: "4px" }}>Frontend Developer</h3>
              <h5>I'm a front end developer with one year of experience in web development.
                I've worked on a variety of projects for clients in the financial and home interior design.
                I'm passionate about creating great user experiences and
                have a strong understanding of usability and accessibility standards.</h5>
            </div>

            <Stack direction="row" spacing={6} sx={{ paddingTop: "20px" }}>
              <Tooltip title="+91 9080934590">
                <PhoneAndroidIcon fontSize="medium" />
              </Tooltip>
              <Tooltip title="arunkumar021096@gmail.com">
                <MailIcon fontSize="medium" />
              </Tooltip>
              <Tooltip title="https://www.linkedin.com/in/
arunkumar-m-4295aa15b">
                <LinkedInIcon fontSize="medium" />
              </Tooltip>
            </Stack>
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <img src={profilepicture} style={{ borderRadius: "50%", margin: "0 auto", display: "block", paddingTop: "90px" }} />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "50px" }} >
            <div id="about">
              <h1 style={{ paddingBottom: "10px", paddingLeft: "170px", paddingTop: "30px" }}>About</h1>
              <h5 style={{ paddingLeft: "170px", paddingRight: "150px" }}>My name is Arunkumar from Pudukkottai,
                I did my graduation in 2020 from the domain of B.Tech Informnation Technology in
                Mookambigai college of engineering.I have totally Two years experience in Professional career and i worked with different job nature.
                I have one year experience in client handling and i also have one year experience in Frontend Development.I got lots of experience in last two years.
                I learned some necessary technologies which is used to develop User interface Responsively and I willing to learn new technologies for developing User Interface. </h5>
            </div>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "40px" }}>
            <div id="experience">
              <h1 style={{ paddingBottom: "10px", paddingLeft: "170px" }}>Experience</h1>
              <h3 style={{ paddingBottom: "5px", paddingLeft: "170px", paddingRight: "150px" }}>React Js Developer (One Year)</h3>
              <h5 style={{ paddingBottom: "15px", paddingLeft: "170px", paddingRight: "150px" }}>I worked with creating a dynamically interactive web pages by using react Js.I have hands on experience with two projects as a Frontend developer.By using React library i developed web pages with optimised code and
                achieved code reusability with reusable components.
              </h5>

              <h3 style={{ paddingBottom: "5px", paddingLeft: "170px", paddingRight: "150px" }}>Service Advisor (One Year)</h3>
              <h5 style={{ paddingBottom: "15px", paddingLeft: "170px", paddingRight: "150px" }}>Worked as a Service Advisor, In this role my responsibilities are handling clients, gathering requirements, Monitoring the service and delivery on time. Handling massive data and manipulating the data with excel reports.</h5>
            </div>
          </Grid>




          <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "40px" }}>
            <div id="projects">
              <h1 style={{ paddingBottom: "10px", paddingLeft: "170px" }}>Projects</h1>
              <h3 style={{ paddingBottom: "5px", paddingLeft: "170px", paddingRight: "150px" }}>Job Planner</h3>

              <ul style={{ paddingBottom: "15px", paddingLeft: "200px", paddingRight: "150px" }}>
                <li>Worked as a UI Developer to this web application for maintaining records about interior designing of home renovations.</li>
                <li>Worked with React Js,React Redux and React MUI for developing Job Planner.</li>
              </ul>
              <h3 style={{ paddingBottom: "5px", paddingLeft: "170px", paddingRight: "150px" }}>Chitfund</h3>

              <ul style={{ paddingBottom: "15px", paddingLeft: "200px", paddingRight: "150px" }}>
                <li>Worked as a UI Developer to this web application for maintaining records of chit schemes.</li>
                <li>Worked with React Js ,React Redux, React MUI, Typescript and React Bootstrap for developing Chifund.</li>
              </ul>
            </div>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "40px" }} >
            <div id="qualification">
              <h1 style={{ paddingBottom: "10px", paddingLeft: "170px" }}>Qualification</h1>
              <h3 style={{ paddingBottom: "5px", paddingLeft: "170px", paddingRight: "150px" }}>B.Tech Information Technology (2016 - 2020)</h3>
              <ul style={{ paddingBottom: "15px", paddingLeft: "200px", paddingRight: "150px" }}>
                <li>
                  Completed degree with CGPA : 7.9
                </li>
                <li>
                  Mookambigai college of engineering,kalamavur.
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: "40px" }}>
            <div id="skills">
              <h1 style={{ paddingBottom: "10px", paddingLeft: "170px" }}>Skills</h1>
              <ul style={{ paddingBottom: "15px", paddingLeft: "200px", paddingRight: "150px" }}>
                <li>
                  React js
                </li>
                <li>
                  React Redux
                </li>
                <li>
                  Typescript
                </li>
                <li>
                  HTML
                </li>
                <li>
                  CSS
                </li>
                <li>
                  Javascript
                </li>
                <li>
                  Bootstrap
                </li>
              </ul>
            </div>
          </Grid>

        </Grid>


        <h1 style={{ paddingBottom: "40px", paddingLeft: "170px", backgroundColor: "#bfbfbf" }}>Contact</h1>

        <Grid lg={12} item container spacing={2} style={{ backgroundColor: "#bfbfbf", paddingBottom: '100px' }}>


          <form id='contact'>
            <Grid container spacing={2} sx={{ mt: -1, mb: 1, paddingLeft: "200px" }}>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  variant="outlined"
                  label="Fullname"
                  name="fullname"
                  value={values.fullname}
                  onBlur={userNameHandler}
                  onFocus={userNameHider}
                  onChange={handleInputChange}
                  {...(errors.fullname !== '' && { error: true, helperText: errors.fullname })}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  variant="outlined"
                  label="Mail"
                  name="mail"
                  type={"email"}
                  value={values.mail}
                  onBlur={emailHandler}
                  onFocus={emailHider}
                  onChange={handleInputChange}
                  {...(errors.mail !== '' && { error: true, helperText: errors.mail })}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  variant="outlined"
                  label="Mobile"
                  name="mobile"
                  type="number"
                  value={values.mobile}
                  onChange={handleInputChange}
                  {...(errors.mobile !== '' && { error: true, helperText: errors.mobile })}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  variant="outlined"
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleInputChange}
                  {...(errors.subject !== '' && { error: true, helperText: errors.subject })}
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant='success' sx={{ backgroundColor: 'black', color: 'white' }} onClick={formSubmit}>Submit</Button>
              </Grid>

              {message ? (
                <h6 style={{ paddingTop: "25px", paddingLeft: "170px", backgroundColor: "#bfbfbf", color: 'green' }}>{message}</h6>
              ) : ('')}

            </Grid>
          </form>

        </Grid>
      </section>



    </div>
  );
}

export default App;
