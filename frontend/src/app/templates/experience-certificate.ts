import { Template } from "./types";

const experienceCertificate: Template = {
  id: "experience-certificate",
  title: "Experience Certificate",
  description:
    "Certify an employee's work experience and tenure at an organization.",
  category: "Work",
  popularity: 68,
  isNew: true,
  glimpse:
    "A formal certificate issued by an employer to confirm an employee’s period of service and conduct.",
  fields: [
    { name: "employeeName", label: "Employee Name", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "organization", label: "Organization Name", type: "text" },
    { name: "orgAddress", label: "Organization Address", type: "text" },
    { name: "recipient", label: "Recipient (optional)", type: "text" },
    { name: "joiningDate", label: "Joining Date", type: "date" },
    { name: "relievingDate", label: "Relieving Date", type: "date" },
    { name: "remarks", label: "Remarks (optional)", type: "textarea" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date of Issue", type: "date" },
  ],
  template: `
<p>{{organization}}<br/>
{{orgAddress}}</p>

<p>Date: {{date}}</p>

<p>{{recipient}}</p>

<p><strong>To Whom It May Concern,</strong></p>

<p>
This is to certify that Mr./Ms. {{employeeName}} (Employee ID: {{employeeId}}) was employed with {{organization}} as a {{designation}} from {{joiningDate}} to {{relievingDate}}.
</p>

<p>
During their tenure, {{employeeName}} performed their duties diligently and maintained good conduct.
</p>

<p>{{remarks}}</p>

<p>
We wish {{employeeName}} all the best in their future endeavors.
</p>

<p>
Sincerely,<br/>
{{issuerName}}<br/>
{{issuerDesignation}}<br/>
{{organization}}
</p>
`,
};

export default experienceCertificate;
