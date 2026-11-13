// Centralized staffing requirements data structure
// Exactly 3 locations, 13 location-wise role entries, 18 total required staff

export const staffingRequirements = [
  { sNo: 1, location: "Haridwar", designation: "Store Manager", requiredCount: 1 },
  { sNo: 2, location: "Haridwar", designation: "Purchase Executive", requiredCount: 1 },
  { sNo: 3, location: "Haridwar", designation: "Cashier", requiredCount: 1 },
  { sNo: 4, location: "Haridwar", designation: "Sales Staff", requiredCount: 4 },
  { sNo: 5, location: "Haridwar", designation: "Helper + Delivery", requiredCount: 2 },
  { sNo: 6, location: "Haridwar", designation: "Full-Time Housekeeping", requiredCount: 1 },
  { sNo: 7, location: "Haridwar", designation: "Guard", requiredCount: 2 },
  { sNo: 8, location: "Noida Sec-44", designation: "Store Manager", requiredCount: 1 },
  { sNo: 9, location: "Noida Sec-44", designation: "Cashier", requiredCount: 1 },
  { sNo: 10, location: "Noida Sec-44", designation: "Helper", requiredCount: 1 },
  { sNo: 11, location: "Noida Sec-126", designation: "Sales Staff", requiredCount: 1 },
  { sNo: 12, location: "Noida Sec-126", designation: "Cashier", requiredCount: 1 },
  { sNo: 13, location: "Noida Sec-126", designation: "Helper", requiredCount: 1 },
];

export const TOTAL_STAFF_REQUIRED = staffingRequirements.reduce(
  (sum, item) => sum + item.requiredCount,
  0
);

// All unique designations across the staffing requirement sheet
export const allDesignations = [
  "Store Manager",
  "Purchase Executive",
  "Cashier",
  "Sales Staff",
  "Helper + Delivery",
  "Full-Time Housekeeping",
  "Guard",
  "Helper",
];

// Map of location -> array of roles with their required count
export const locationStaffingMap = staffingRequirements.reduce((acc, item) => {
  if (!acc[item.location]) {
    acc[item.location] = [];
  }
  acc[item.location].push({
    designation: item.designation,
    requiredCount: item.requiredCount,
  });
  return acc;
}, {});

// Array of unique locations
export const applicantLocations = Object.keys(locationStaffingMap);

// Backward-compatible applicantJobs: location -> array of designation names
export const applicantJobs = Object.fromEntries(
  Object.entries(locationStaffingMap).map(([loc, roles]) => [
    loc,
    roles.map((r) => r.designation),
  ])
);

// Helper to look up required count for a given location & designation
export const getRequiredStaffCount = (location, designation) => {
  const match = staffingRequirements.find(
    (item) => item.location === location && item.designation === designation
  );
  return match ? match.requiredCount : null;
};

// Total required count for a designation across all locations
export const getTotalRequiredCountForDesignation = (designation) => {
  return staffingRequirements
    .filter((item) => item.designation === designation)
    .reduce((sum, item) => sum + item.requiredCount, 0);
};

// Validation function
export const validApplicantJob = (location, designation) => {
  if (location) {
    return (
      applicantLocations.includes(location) &&
      allDesignations.includes(designation)
    );
  }
  return allDesignations.includes(designation);
};
