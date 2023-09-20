import './App.css';
import { Button, Grid, Stack, TextField, Tooltip } from '@mui/material';
import profilepicture from './images/profilepicture.jpg';
import AppbarMui from './components/AppbarMui';
import { useState } from 'react';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CarouselSlide from './components/CarouselSlide';
import Cards from './components/Cards';
// import Pagination from './components/Pagination';




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
    <>

      <AppbarMui />

      <section id="home">
        <div className='container mt-20  md:pt-0 max-w-screen-lg md:mb-10'>
          <div className="flex flex-wrap items-center">
            <div className="order-last md:order-first md:w-1/2 md:pl-10">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black mt-3">Hi, I'm Arunkumar</h1>
              <h3 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold ">MERN Stack Developer</h3>
              <h5 className='mt-2 text-l md:text-xl lg:text-2xl' >I am a MERN stack developer with one year of experience in web development. I have worked on a range of projects for clients in the financial and home interior design industries. I am passionate about creating exceptional user experiences and have a strong understanding of usability and accessibility standards.</h5>
              <div className='flex flex-start'>
                <div>
                  <Stack direction="row" spacing={6} className='mt-3' >
                    <Tooltip title="+91 9080934590">
                      <PhoneAndroidIcon fontSize="medium" />
                    </Tooltip>

                    <Tooltip title="arunkumar021096@gmail.com">
                      <MailIcon fontSize="medium" />
                    </Tooltip>
                    <Tooltip title="https://www.linkedin.com/in/arunkumar-mern-developer/">
                      <LinkedInIcon fontSize="medium" />
                    </Tooltip>
                  </Stack>
                </div>
              </div>
            </div>
            <div className="order-first md:order-last md:w-1/2">
              <img src={profilepicture} alt="Your Image" className="mx-auto  w-90 h-130" />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className='container md:mt-10'>
          <div className='md:mx-5 lg:mx-20 xl:mx-40'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mt-3">About</h1>

            <h5 className='mt-2 text-l md:text-xl lg:text-xl' >Hello, my name is Arunkumar from Pudukkottai. I graduated in 2020 with a B.Tech in Information Technology from Mookambigai College of Engineering. I have a total of two years of professional experience, during which I have worked in different roles. I have one year of experience in client handling and one year of experience in web development. I have gained a lot of experience in the last two years, including learning necessary technologies for developing web applications responsively. I am also eager to continue learning new technologies for web application development.</h5>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className='container'>
          <div className='md:mx-5 lg:mx-20 xl:mx-40'>
            <h1 className="text-xl font-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3">Experience</h1>

            <h3 className="text-l mt-2 sm:text-xl md:text-xl lg:text-2xl lg:mt-3  xl:text-3xl font-semibold ">MERN Stack Developer</h3>
            <h5 className='mt-2 text-l md:text-xl lg:text-xl' >Experienced MERN developer with one year of hands-on expertise in building dynamic and responsive web applications. Proficient in frontend and backend development, with a strong focus on delivering high-quality, optimized code.Additionally, I have utilized Next.js to develop web pages with optimized code, achieving code reusability through reusable components. Demonstrated ability to work effectively in collaborative teams and contribute to the success of projects.</h5>

            <h3 className="text-l font-semibold mt-2 sm:text-xl md:text-xl lg:text-2xl lg:mt-3  xl:text-3xl ">Service Advisor</h3>

            <h5 className='mt-2 text-l md:text-xl lg:text-xl' >In my role as a Service Advisor, my responsibilities included handling clients, gathering their requirements, monitoring service progress, and ensuring timely delivery. I also had to manage and manipulate large volumes of data using Excel to generate reports.</h5>

          </div>
        </div>
      </section>

      <section id="projects">
        <div className='container'>
          <div className='md:mx-5 lg:mx-20 xl:mx-40'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3">Projects</h1>
            <h3 className="text-l font-semibold mt-2 sm:text-xl md:text-xl lg:text-2xl lg:mt-3  xl:text-3xl">Job Planner</h3>

            <ul className='mt-2 ml-10 text-l md:text-xl lg:text-2xl list-disc'>


              <li className='mt-2 text-l md:text-xl lg:text-xl ' >I worked as a Web Developer on a web application designed to maintain records related to interior home renovations.</li>

              <li className='mt-2 text-l md:text-xl lg:text-xl'>I utilized React Js, React Redux,React MUI,Node js,Express Js and Mongo Db to develop the Job Planner.</li>
            </ul>


            <h3 className="text-l font-semibold  mt-2 sm:text-xl md:text-xl lg:text-2xl lg:mt-3  xl:text-3xl">ChitFund</h3>
            <ul className='mt-2  ml-10 text-l md:text-xl lg:text-2xl list-disc'>
              <li className='mt-2 text-l md:text-xl lg:text-xl'>I worked as a Web Developer on a web application designed to maintain records of chit schemes.</li>
              <li className='mt-2 text-l md:text-xl lg:text-xl '>I utilized React Js, React Redux,React MUI,Node js,Express Js and Mongo Db to develop the Chitfund.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="qualification">
        <div className='container'>
          <div className='md:mx-5 lg:mx-20 xl:mx-40'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3">Qualification</h1>

            <h3 className="text-l font-semibold pl-1 mt-2 sm:text-xl md:text-xl lg:text-2xl lg:mt-3  xl:text-3xl">B.Tech Information Technology (2016 - 2020)</h3>
            <ul className='mt-2  ml-10 text-l md:text-xl lg:text-2xl list-disc'>
              <li className='mt-2 text-l md:text-xl lg:text-xl '>   Completed degree with CGPA : 7.9</li>
              <li className='mt-2 text-l md:text-xl lg:text-xl'> Mookambigai college of engineering,kalamavur.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="stacks">
        <div className='container'>
          <div className='md:mx-5 lg:mx-20 xl:mx-40'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3">Proficient Stacks</h1>
            <CarouselSlide />
          </div>
        </div>
      </section>

      <section id="skills">
        <div className='container'>
          <div className='md:mx-5 lg:mx-20 xl:mx-40'>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-4">Skills</h1>
            <Cards />
          </div>
        </div>
      </section>
      <section id='contact'>
      <div className='container'>
      <div className='md:mx-5 lg:mx-20 xl:mx-40'>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-3">Contact</h1>

        <form >
        <div className='mt-3 ml-10 md:ml-0 grid md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 mb-4'>
          <div>
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
          </div>

          <div>
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
          </div>

          <div>
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
            </div>

             <div>
             <TextField
                  variant="outlined"
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleInputChange}
                  {...(errors.subject !== '' && { error: true, helperText: errors.subject })}
                  required
                />
          </div>

        

          </div>

          

          <div className="flex justify-center items-center">
          <Button variant='success' sx={{ backgroundColor: 'black', color: 'white',marginBottom:"30px",marginLeft:"15px" }} onClick={formSubmit}>Submit</Button>
          {message ? (
                <h6 className='text-center mb-20 mr-20'>{message}</h6>
              ) : ('')}

          </div>
          {/* {message ? (
                <h6 className='text-center mb-20'>{message}</h6>
              ) : ('')} */}

            
          </form>
        
        </div>
        </div>
      </section>



    </>

  );
}

export default App;
