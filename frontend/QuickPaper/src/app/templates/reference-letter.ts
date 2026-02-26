import { Template } from "./types";

const referenceLetter: Template = {
  id: "reference-letter",
  title: "Reference Letter",
  description:
    "Provide a professional, academic, or personal reference for a candidate.",
  category: "Work",
  popularity: 61,
  isNew: true,
  glimpse:
    "A formal template for recommending a candidate for a job, academic program, or other opportunity.",
  fields: [
    { name: "referrerName", label: "Your Name", type: "text" },
    { name: "referrerPosition", label: "Your Position/Title", type: "text" },
    {
      name: "referrerCompany",
      label: "Your Company/Institution",
      type: "text",
    },
    { name: "referrerAddress", label: "Your Address", type: "text" },
    { name: "referrerContact", label: "Your Email or Phone", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    { name: "recipientPosition", label: "Recipient's Position", type: "text" },
    {
      name: "recipientCompany",
      label: "Recipient's Company/Institution",
      type: "text",
    },
    { name: "recipientAddress", label: "Recipient's Address", type: "text" },
    { name: "subject", label: "Subject (optional)", type: "text" },
    { name: "candidateName", label: "Candidate's Name", type: "text" },
    {
      name: "relationship",
      label: "Your Relationship to Candidate",
      type: "text",
    },
    { name: "duration", label: "Duration Known", type: "text" },
    { name: "qualities", label: "Key Qualities/Strengths", type: "textarea" },
    {
      name: "examples",
      label: "Notable Achievements/Examples",
      type: "textarea",
    },
    { name: "conclusion", label: "Closing Endorsement", type: "textarea" },
  ],
  template: `
<p>{{referrerName}}<br/>
{{referrerPosition}}<br/>
{{referrerCompany}}<br/>
{{referrerAddress}}<br/>
Contact: {{referrerContact}}</p>

<p>Date: {{date}}</p>

<p>{{recipientName}}<br/>
{{recipientPosition}}<br/>
{{recipientCompany}}<br/>
{{recipientAddress}}</p>

<p><strong>Subject:</strong> {{subject || ("Reference for " + candidateName)}}</p>

<p>Dear {{recipientName}},</p>

<p>
I am writing to recommend {{candidateName}} for your consideration. As {{relationship}} for the past {{duration}}, I have had the opportunity to observe {{candidateName}}'s performance and character closely.
</p>

<p>
{{candidateName}} consistently demonstrates {{qualities}}. For example, {{examples}}
</p>

<p>
Based on my experience, I am confident that {{candidateName}} will bring the same level of commitment and excellence to your organization. {{conclusion}}
</p>

<p>
If you require any further information, please feel free to contact me.
</p>

<p>Sincerely,<br/>
{{referrerName}}<br/>
{{referrerPosition}}<br/>
{{referrerCompany}}</p>
`,
};

export default referenceLetter;
