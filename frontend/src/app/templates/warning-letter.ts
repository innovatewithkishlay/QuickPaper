import { Template } from "./types";

const warningLetter: Template = {
  id: "warning-letter",
  title: "Warning Letter",
  description:
    "Formally address misconduct, policy violations, or performance issues.",
  category: "Work",
  popularity: 54,
  isNew: true,
  glimpse:
    "A formal letter template for issuing a warning to an employee, student, or team member.",
  fields: [
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    { name: "recipientId", label: "Employee/Student ID", type: "text" },
    { name: "designationOrClass", label: "Designation/Class", type: "text" },
    { name: "recipientAddress", label: "Recipient Address", type: "text" },
    {
      name: "organization",
      label: "Organization/Institution Name",
      type: "text",
    },
    { name: "orgAddress", label: "Organization Address", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "offense", label: "Nature of Offense/Violation", type: "textarea" },
    { name: "incidentDate", label: "Date of Incident", type: "date" },
    {
      name: "consequences",
      label: "Consequences if Repeated",
      type: "textarea",
    },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
  ],
  template: `
<p>{{organization}}<br/>
{{orgAddress}}</p>

<p>Date: {{date}}</p>

<p>To,<br/>
{{recipientName}}<br/>
{{designationOrClass}}<br/>
ID: {{recipientId}}<br/>
{{recipientAddress}}</p>

<p><strong>Subject:</strong> Warning Letter</p>

<p>Dear {{recipientName}},</p>

<p>This letter serves as a formal warning regarding the following matter:</p>

<p><strong>Offense:</strong> {{offense}}<br/>
<strong>Date of Incident:</strong> {{incidentDate}}</p>

<p>Such conduct is a violation of our policies and is viewed very seriously. You are hereby advised to refrain from repeating this behavior in the future. If such an incident occurs again, {{consequences}}</p>

<p>Please treat this as an official warning and take corrective action immediately.</p>

<p>Sincerely,<br/>
{{issuerName}}<br/>
{{issuerDesignation}}<br/>
{{organization}}</p>
`,
};

export default warningLetter;
