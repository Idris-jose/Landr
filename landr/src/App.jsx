//Wensite components
import Navbar from './webpage/navbar'
import Section1 from './webpage/section1'
import Section2 from './webpage/section2'
import Section3 from './webpage/Section3'
import Section4 from './webpage/Section4'
import Section5 from './webpage/Section5'
//login components
import GeneralAuth from './Auth/GeneralAuth'
//mainapp components
import LandlordMainapp from './Mainapp/Landlords/LandlordMainapp'
import TenantsMainapp from './Mainapp/Tenants/tenantsMainapp'
import PropertyDetails from './Mainapp/Tenants/PropertyDetails';
//profile components
import Profile from './Mainapp/Tenants/Profile/profile'
import Onboarding from './Mainapp/Tenants/Profile/onboarding'
import Onboarding2 from './Mainapp/Tenants/Profile/onboarding2'

import MultiStepForm from './Mainapp/Tenants/landrCoin'
import Kyc from './Mainapp/Landlords/Kyc'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

import './App.css'


function App() {


  return (
    <>
    
    <BrowserRouter>
       
      <Routes>
        <Route path="/" element={
          <>
           <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </>
        } />
        //login routes
        
       
        <Route path="/signup" element={<GeneralAuth />} />
        <Route path="/LandlordMainapp" element={<LandlordMainapp />} />
        <Route path="/tenantsmainapp" element={<TenantsMainapp />} />
         <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/TenantsMainapp/profile" element={<Profile />} />
        <Route path="/TenantsMainapp/profile/onboarding" element={<Onboarding />} />
        <Route path="/TenantsMainapp/profile/onboarding2" element={<Onboarding2 />} />
        <Route path="/LandlordsMainapp/kyc" element={<Kyc />} />
        <Route path="/TenantsMainapp/landrCoin" element={<MultiStepForm />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
