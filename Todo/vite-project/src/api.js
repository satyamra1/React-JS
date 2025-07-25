// import axios from 'axios';
// const apiUrl ="https://train-journey-backend.onrender.com/api/reports";
// export const checkReports = async (trainNo, date) => {
//   try {
//     const response = await axios.get(`${apiUrl}?trainNo=${trainNo}&date=${date}`);
//     return response.data;
//   } catch (error) {
//     throw new Error("Error fetching reports");
//   }
// };
// export const submitReport = async (trainNo, date, scale) => {
//   try {
//     const response = await axios.post(`${apiUrl}/submit`, { trainNo, date, scale });
//     return response.data;
//   } catch (error) {
//     throw new Error("Error submitting report");
//   }
// };
// export default apiUrl;


// Local API functions for the CrushTheRush component

export const checkReports = async (trainNo, date) => {
    // Placeholder implementation - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomScale = Math.random() * 10;
        const reports = [{ scale: randomScale }];
        const averageScale = reports.reduce((sum, report) => sum + report.scale, 0) / reports.length;
        resolve({ reports: reports, averageScale: averageScale });
      }, 500);
    });
  };
  
  export const submitReport = async (trainNo, date, scale) => {
    // Placeholder implementation - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 500);
    });
  };
  
  