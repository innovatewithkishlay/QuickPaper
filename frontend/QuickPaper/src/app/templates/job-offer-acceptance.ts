import { Template } from "./types";

const jobOfferAcceptance: Template = {
  id: "job-offer-acceptance",
  title: "Job Offer Acceptance Letter",
  description: "Formally accept a job offer from an employer.",
  category: "Work",
  popularity: 72,
  isNew: true,
  glimpse:
    "A professional letter/email template to confirm your acceptance of a job offer.",
  fields: [
    { name: "yourName", label: "Your Name", type: "text" },
    { name: "yourAddress", label: "Your Address", type: "text" },
    { name: "yourContact", label: "Your Contact Number", type: "text" },
    { name: "yourEmail", label: "Your Email", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    {
      name: "recipientDesignation",
      label: "Recipient's Designation",
      type: "text",
    },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    { name: "jobTitle", label: "Job Title", type: "text" },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "salary", label: "Salary/CTC", type: "text" },
    { name: "referenceNumber", label: "Offer Reference Number", type: "text" },
    { name: "subject", label: "Subject (optional)", type: "text" },
    {
      name: "gratitude",
      label: "Gratitude/Excitement Statement",
      type: "textarea",
    },
    {
      name: "additionalNotes",
      label: "Additional Notes (optional)",
      type: "textarea",
    },
  ],
  template: `
<p>{{yourName}}<br/>
{{yourAddress}}<br/>
Contact: {{yourContact}}<br/>
Email: {{yourEmail}}</p>

<p>Date: {{date}}</p>

<p>To,<br/>
{{recipientName}}<br/>
{{recipientDesignation}}<br/>
{{company}}<br/>
{{companyAddress}}</p>

<p><strong>Subject:</strong> {{subject || ("Job Offer Acceptance – " + yourName)}}</p>

<p>Dear {{recipientName}},</p>

<p>
I am writing to formally accept the offer for the position of {{jobTitle}} at {{company}}, as per the offer letter (Ref: {{referenceNumber}}). {{gratitude}}
</p>

<p>
I confirm my start date as {{startDate}} and agree to the terms outlined in the offer letter, including the annual CTC of {{salary}}. Please let me know if there are any additional documents or steps required before my joining.
</p>

<p>{{additionalNotes}}</p>

<p>
Thank you once again for your trust and this opportunity. I look forward to joining {{company}} and contributing to the team.
</p>

<p>Yours sincerely,<br/>
{{yourName}}</p>
`,
};

export default jobOfferAcceptance;
