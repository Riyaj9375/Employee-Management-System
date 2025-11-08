const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update website banner",
        description: "Change the banner for the upcoming promotion.",
        date: "2024-11-12",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Weekly team meeting",
        description: "Attend and contribute to the weekly team sync-up.",
        date: "2024-11-13",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Finish monthly report",
        description: "Complete the report for October.",
        date: "2024-10-31",
        category: "Reporting",
      },
    ],
    taskNumber: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 2,
    firstname: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client follow-up",
        description: "Reach out to clients about project updates.",
        date: "2024-11-12",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare presentation",
        description: "Create slides for the project review meeting.",
        date: "2024-11-14",
        category: "Preparation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit timesheet",
        description: "Submit weekly timesheet by Friday.",
        date: "2024-11-10",
        category: "Administration",
      },
    ],
    taskNumber: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 3,
    firstname: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Code review",
        description: "Review recent commits in the repository.",
        date: "2024-11-13",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team presentation",
        description: "Present the new module to the team.",
        date: "2024-11-11",
        category: "Meetings",
      },
    ],
    taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstname: "Anaya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Research competitors",
        description: "Complete a detailed analysis of competitors.",
        date: "2024-11-01",
        category: "Research",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Draft blog post",
        description: "Write a draft for the new company blog post.",
        date: "2024-11-15",
        category: "Content Creation",
      },
    ],
    taskNumber: { active: 1, newTask: 1, completed: 1, failed: 0 },
  },
  {
    id: 5,
    firstname: "Rohan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Onboarding new employee",
        description: "Assist with onboarding process.",
        date: "2024-11-16",
        category: "HR",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory check",
        description: "Ensure office supplies are restocked.",
        date: "2024-11-13",
        category: "Operations",
      },
    ],
    taskNumber: { active: 2, newTask: 1, completed: 0, failed: 0 },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
