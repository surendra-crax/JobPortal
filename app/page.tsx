"use client";
import { HeaderSimple } from "./components/header";
import JobFilters from "./components/card";
import JobList from "./components/jobcard";

function Demo() {
  return (
    <div >
  <div style={{ backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <HeaderSimple />
      </div>
    </div>
  </div>
  <div style={{ backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
    <JobFilters />
  </div>
  <div style={{padding:"20px"}}>
  <JobList/>
  <JobList/>


  </div>
</div>

  );
}

export default Demo;
