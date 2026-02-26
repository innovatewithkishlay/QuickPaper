import { Template } from "./types";

const salaryIncrement: Template = {
  id: "salary-increment",
  title: "Salary Increment Request",
  description: "Request a salary increment from your employer.",
  category: "Work",
  popularity: 59,
  isNew: true,
  glimpse:
    "A formal letter template to professionally request a salary raise from your manager or HR.",
  fields: [
    { name: "employeeName", label: "Your Name", type: "text" },
    { name: "employeeAddress", label: "Your Address", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Your Designation", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "managerName", label: "Manager's Name", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    { name: "currentSalary", label: "Current Salary", type: "text" },
    { name: "expectedSalary", label: "Expected Salary", type: "text" },
    { name: "justification", label: "Justification/Reasons", type: "textarea" },
    { name: "date", label: "Date", type: "date" },
    { name: "subject", label: "Subject (optional)", type: "text" },
  ],
  template: `
<p>{{employeeName}}<br/>
{{employeeAddress}}<br/>
<strong>Employee ID:</strong> {{employeeId}}<br/>
{{designation}}, {{department}}</p>

<p><strong>Date:</strong> {{date}}</p>

<p>{{managerName}}<br/>
{{designation}}<br/>
{{company}}<br/>
{{companyAddress}}</p>

<p><strong>Subject:</strong> {{subject || "Request for Salary Increment"}}</p>

<p>Dear {{managerName}},</p>

<p>
I am writing to formally request a review of my current salary. I have been working as a {{designation}} in the {{department}} department at {{company}}. My current salary is {{currentSalary}}.
</p>

<p>
{{justification}}
</p>

<p>
In light of my contributions and current market standards, I would like to request a salary increment to {{expectedSalary}}. I am confident that my performance and dedication justify this request.
</p>

<p>
Thank you for considering my application. I look forward to your positive response.
</p>

<p>Sincerely,<br/>
{{employeeName}}<br/>
<strong>Employee ID:</strong> {{employeeId}}</p>
`,
};

export default salaryIncrement;
