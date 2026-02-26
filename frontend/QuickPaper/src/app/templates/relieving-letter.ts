import { Template } from "./types";

const relievingLetter: Template = {
  id: "relieving-letter",
  title: "Relieving Letter",
  description:
    "Officially confirm an employee’s release from duties after resignation.",
  category: "Work",
  popularity: 56,
  isNew: true,
  glimpse:
    "A formal letter issued by the employer to confirm an employee’s resignation and release.",
  fields: [
    { name: "employeeName", label: "Employee Name", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "employeeAddress", label: "Employee Address", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    { name: "joiningDate", label: "Date of Joining", type: "date" },
    { name: "relievingDate", label: "Date of Relieving", type: "date" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date of Issue", type: "date" },
  ],
  template: `
<p>{{company}}<br/>
{{companyAddress}}</p>

<p>Date: {{date}}</p>

<p>To,<br/>
{{employeeName}}<br/>
{{employeeAddress}}<br/>
Employee ID: {{employeeId}}<br/>
{{designation}}, {{department}}</p>

<p><strong>Subject:</strong> Relieving Letter</p>

<p>Dear {{employeeName}},</p>

<p>
This is to formally acknowledge receipt of your resignation and to confirm that you have been relieved from your duties as {{designation}} in the {{department}} department at {{company}}, effective from {{relievingDate}}.
</p>

<p>
We appreciate your valuable contributions to the organization during your tenure from {{joiningDate}} to {{relievingDate}}. We wish you all the best in your future endeavors.
</p>

<p>
If you require any further information, please feel free to contact us.
</p>

<p>Sincerely,<br/>
{{issuerName}}<br/>
{{issuerDesignation}}<br/>
{{company}}</p>
`,
};

export default relievingLetter;
