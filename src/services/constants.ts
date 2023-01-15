export const generateSampleResumeData = () => {
  const sampleData = {
    firstName: "Shamsheer",
    lastName: "Ahamed",
    phoneNumber: "88923560",
    whatsapp: "88923560",
    nationality: "Singaporean",
    currentLocation: "Singapore",
    interestedCountry: "Singapore",
    educations: [
      {
        degree: "Bachelor of Computer Engineering",
        industry: "Software",
        school: "National University of Singapore",
        location: "Singapore",
        gradYear: "2022",
        minor: "Business",
        gpa: "3.9",
      },
    ],
    experiences: [
      {
        position: "Software Engineer",
        company: "Goldman Sachs",
        location: "Singapore",
        description: "Margins, Collateral and Valuation Engineering",
        startDate: "2022-12-26T16:00:00.000Z",
        endDate: "2022-12-29T16:00:00.000Z",
      },
    ],
    skills: [
      {
        name: "Java",
        level: 3,
      },
    ],
    languages: [
      {
        name: "English",
        level: 4,
      },
      {
        name: "Tamil",
        level: 4,
      },
    ],
  };

  return sampleData;
};
