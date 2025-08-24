function getDataAccess(req, res) {
  const userId = req.params.userId;

  // Simulated data fetch
  const user = {
    id: userId,
    fullName: "John Abraham",
    email: "john.Anraham@mail.com",
    dob: "1990-04-12",
    nationality: "US",
    createdAt: "2022-06-15T10:30:00Z",
    lastLogin: "2025-08-23T18:45:00Z",
    services: ["Studio Pro", "Workflow Designer"]
  };

  const forms = [
    {
      formId: "TALLY-001",
      submittedAt: "2025-07-10T14:22:00Z",
      fields: {
        projectType: "API Documentation",
        budget: "5000 USD",
        timeline: "4 weeks"
      }
    }
  ];

  const responsePayload = {
    requestId: `REQ-${Date.now()}`,
    user,
    dataCollected: {
      accountCreated: user.createdAt,
      lastLogin: user.lastLogin,
      servicesUsed: user.services,
      formSubmissions: forms
    },
    dataSources: ["Notion CRM", "Google Sheets Intake Tracker", "Tally.so Forms", "Zapier Logs"],
    retentionPolicy: {
      personalDataRetention: "5 years",
      lastReviewed: "2025-06-01"
    },
    review: {
      reviewedBy: "ComplianceBot v3.2",
      reviewTimestamp: new Date().toISOString(),
      notes: "All data sources mapped and verified. No third-party sharing detected."
    }
  };

  res.status(200).json(responsePayload);
}

module.exports = { getDataAccess };
