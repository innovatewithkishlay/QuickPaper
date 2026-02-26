import { Template } from "./types";

const feeConcession: Template = {
  id: "fee-concession",
  title: "Fee Concession Request",
  description: "Request a reduction or concession in academic fees.",
  category: "Student",
  popularity: 70,
  isNew: false,
  glimpse:
    "Formal letter to request a concession or reduction in academic fees.",
  fields: [
    { name: "studentName", label: "Student Name", type: "text" },
    { name: "studentId", label: "Student ID", type: "text" },
    { name: "course", label: "Course/Program", type: "text" },
    { name: "academicYear", label: "Academic Year", type: "text" },
    { name: "institutionName", label: "Institution Name", type: "text" },
    { name: "institutionAddress", label: "Institution Address", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "reason", label: "Reason for Concession", type: "textarea" },
    {
      name: "parentOccupation",
      label: "Parent/Guardian Occupation",
      type: "text",
    },
    { name: "familyIncome", label: "Annual Family Income (₹)", type: "number" },
  ],
  template: `
<p>To,<br/>
The Principal<br/>
{{institutionName}}<br/>
{{institutionAddress}}</p>

<p>Date: {{date}}</p>

<p><strong>Subject:</strong> Application for Fee Concession</p>

<p>Respected Sir/Madam,</p>

<p>
I, {{studentName}} (Student ID: {{studentId}}), am a student of {{course}} for the academic year {{academicYear}} at your esteemed institution. I am writing to request a concession in my academic fees due to the following reason:
</p>

<p>{{reason}}</p>

<p>
My parent/guardian is employed as a {{parentOccupation}}, and our annual family income is ₹{{familyIncome}}. Due to financial constraints, I am unable to pay the full fees.
</p>

<p>
I kindly request you to consider my application and grant me a fee concession. I have attached all necessary supporting documents for your reference.
</p>

<p>Thank you for your understanding and support.</p>

<p>Yours faithfully,<br/>
{{studentName}}<br/>
Student ID: {{studentId}}</p>
`,
};

export default feeConcession;
