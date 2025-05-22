const employees = [
  {
    id: "emp001",
    email: "emp1@example.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Submit Report",
        description: "Submit the financial report for Q1.",
        date: "2025-05-23",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Profile",
        description: "Update personal and emergency contact details.",
        date: "2025-04-15",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Call",
        description: "Call the client for project feedback.",
        date: "2025-05-10",
        category: "Client"
      }
    ]
  },
  {
    id: "emp002",
    email: "emp2@example.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Logo",
        description: "Create a logo for the new product line.",
        date: "2025-05-25",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team Meeting",
        description: "Discuss project progress with the team.",
        date: "2025-05-22",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Presentation Review",
        description: "Review the slides for upcoming presentation.",
        date: "2025-05-10",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Bug Fix",
        description: "Resolve critical bugs from release v1.2.",
        date: "2025-04-29",
        category: "Development"
      }
    ]
  },
  {
    id: "emp003",
    email: "emp3@example.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Docs",
        description: "Update API documentation for developers.",
        date: "2025-05-26",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Backup",
        description: "Perform full backup of the database.",
        date: "2025-05-01",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Security Patch",
        description: "Install security patch 2025.05.01.",
        date: "2025-05-03",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Code Review",
        description: "Review teammate's pull request.",
        date: "2025-04-20",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Unit Testing",
        description: "Write tests for login module.",
        date: "2025-05-22",
        category: "QA"
      }
    ]
  },
  {
    id: "emp004",
    email: "emp4@example.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Policy Review",
        description: "Review new employee policies for 2025.",
        date: "2025-05-28",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Training Session",
        description: "Complete the annual compliance training.",
        date: "2025-05-05",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Interview Candidate",
        description: "Interview candidate for backend developer role.",
        date: "2025-05-14",
        category: "Recruitment"
      }
    ]
  },
  {
    id: "emp005",
    email: "emp5@example.com",
    pass: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Performance Review",
        description: "Prepare monthly performance review.",
        date: "2025-05-27",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit Reimbursement",
        description: "Submit travel reimbursement for April.",
        date: "2025-05-03",
        category: "Finance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Website Audit",
        description: "Audit the new website UI/UX.",
        date: "2025-05-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Team Feedback",
        description: "Collect feedback from teammates on new workflow.",
        date: "2025-05-10",
        category: "Management"
      }
    ]
  }
];


  const admin = [
    {
      "id": "emp001",
      "email": "emp1@example.com",
      "pass": "123"
    }
  ]

  export const SetLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
  }

  export const GetLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
    return {employees, admin}
    
  }