import { Template } from "./types";

const internshipApplication: Template = {
  id: "internship-application",
  title: "Internship Application",
  description: "Apply for internships formally.",
  category: "Work",
  popularity: 80,
  isNew: false,
  glimpse: "Formal application letter for internship opportunities.",
  fields: [
    { name: "applicantName", label: "Your Name", type: "text" },
    { name: "email", label: "Email Address", type: "text" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "address", label: "Your Address", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "position", label: "Internship Position", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    { name: "duration", label: "Duration", type: "text" },
    { name: "skills", label: "Relevant Skills / Experience", type: "textarea" },
    { name: "objective", label: "Objective / Motivation", type: "textarea" },
  ],
  template: `
<p>{{applicantName}}<br/>
{{address}}<br/>
Email: {{email}}<br/>
Phone: {{phone}}</p>

<p>Date: {{date}}</p>

<p>To,<br/>
The HR Manager<br/>
{{company}}<br/>
{{companyAddress}}</p>

<p><strong>Subject:</strong> Application for Internship Position ({{position}})</p>

<p>Respected Sir/Madam,</p>

<p>
I am writing to express my keen interest in the {{position}} internship at {{company}} for a duration of {{duration}}.
</p>

<p><strong>Objective:</strong><br/>
{{objective}}</p>

<p><strong>Relevant Skills/Experience:</strong><br/>
{{skills}}</p>

<p>
I believe this opportunity will help me enhance my skills and contribute meaningfully to your organization. I am attaching my resume for your reference.
</p>

<p>Thank you for considering my application. I look forward to your positive response.</p>

<p>Sincerely,<br/>
{{applicantName}}<br/>
Email: {{email}}<br/>
Phone: {{phone}}</p>
`,
};

export default internshipApplication;
