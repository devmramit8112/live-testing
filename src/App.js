import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './views/pages/login/Login'
// import './scss/style.scss'
// import PrivateRoute from './PrivateRoute'
// import StateAdminRegistration from './views/pages/AdminReg/userRegistrationForms/StateAdminRegistration'
// import DistrictAdminRegistration from './views/pages/AdminReg/userRegistrationForms/DistrictAdminRegistration'
// import DoctorRegistration from './views/pages/AdminReg/userRegistrationForms/DoctorRegistration'
// import InstituteRegistration from './views/pages/AdminReg/userRegistrationForms/InstituteRegistration'

// import '../src/components/Animation.css'
// import '../src/views/pages/EditForms/CommonModels/EditForm.css'
// import DownloadPDF from './DownloadPDF'
import DashboardTest from './DashboardTest'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" name="Login Page" element={<Login />} />
          <Route path='/dashboard-test' name="DashboardTest" element={<DashboardTest />} />
          {/* <Route exact path="*" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
          {/* <Route
            exact
            path="/state/adminregister"
            name="State Admin registration"
            element={<StateAdminRegistration />}
          />
          <Route
            exact
            path="/district/adminregister"
            name="District Admin registration"
            element={<DistrictAdminRegistration />}
          />
          <Route
            exact
            path="/doctor/registration"
            name="Doctor  registration"
            element={<DoctorRegistration />}
          />
          <Route
            exact
            path="/institute/registration"
            name="Institute  Registration"
            element={<InstituteRegistration />}
          /> */}
          {/* blank page  */}
          {/* <Route path='/downloadpdf' name="DownloadPDF" element={<DownloadPDF />} /> */}

          <Route exact path="/" name="Login Page" element={<Login />} />
          {/* <Route exact path="dashboard/*" name="Dashboard" element={<DefaultLayout />} /> */}

        </Routes>
      </Router>


    </div>
  )
}

export default App
