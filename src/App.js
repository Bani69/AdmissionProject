import {ADMISSION_REQUIREMENTS, ENROLLMENT_PROCEDURE, SCHEDULE_FEE} from "./admissionData/AdmissionData";


import "../src/index.css"
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import AdmissionRequirements from "./components/AdmissionRequirements";
import EnrollmentProcedure from "./components/EnrollmentProcedure";
import Welcome from "./components/Welcome";

function App() {

    return (
        <>
            <div className="h-screen flex flex-col">
                <Header/>
                <Navbar/>
                <Welcome/>

            </div>

            <div className="flex flex-col  pb-10">
                <AdmissionRequirements/>
                <EnrollmentProcedure/>
                </div>


        </>

    );
}

export default App;
