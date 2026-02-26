import { Template } from "./types";

const characterCertificate: Template = {
  id: "character-certificate",
  title: "Character Certificate",
  description:
    "Certify the good character and conduct of a student or employee.",
  category: "Student",
  popularity: 57,
  isNew: true,
  glimpse:
    "A formal certificate to attest to the good character and behavior of an individual.",
  fields: [
    { name: "personName", label: "Person's Name", type: "text" },
    { name: "personId", label: "Roll/Employee ID", type: "text" },
    { name: "courseOrDesignation", label: "Course/Designation", type: "text" },
    {
      name: "organization",
      label: "Institution/Organization Name",
      type: "text",
    },
    {
      name: "orgAddress",
      label: "Institution/Organization Address",
      type: "text",
    },
    { name: "duration", label: "Duration of Association", type: "text" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date of Issue", type: "date" },
    { name: "recipient", label: "Recipient (optional)", type: "text" },
  ],
  template: `
<p>{{organization}}<br/>
{{orgAddress}}</p>

<p>Date: {{date}}</p>

<p>{{recipient}}</p>

<p><strong>TO WHOM IT MAY CONCERN</strong></p>

<p>
This is to certify that Mr./Ms. {{personName}} (ID: {{personId}}) has been a
{{courseOrDesignation}} at {{organization}} for the period of {{duration}}.
</p>

<p>
During this time, their conduct and character have been found to be exemplary.
To the best of our knowledge, there is nothing adverse against them.
</p>

<p>
This certificate is issued upon their request for whatever purpose it may serve.
</p>

<p>
Sincerely,<br/>
{{issuerName}}<br/>
{{issuerDesignation}}<br/>
{{organization}}
</p>
`,
};

export default characterCertificate;
