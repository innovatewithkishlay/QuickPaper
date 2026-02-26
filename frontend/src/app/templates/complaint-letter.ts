import { Template } from "./types";

const complaintLetter: Template = {
  id: "complaint-letter",
  title: "Complaint Letter",
  description:
    "Write a formal complaint letter to address issues with products, services, or experiences.",
  category: "Personal",
  popularity: 68,
  isNew: true,
  glimpse:
    "Professional template for filing formal complaints with businesses, organizations, or service providers.",
  fields: [
    { name: "senderName", label: "Your Full Name", type: "text" },
    { name: "senderAddress", label: "Your Address", type: "text" },
    {
      name: "senderCityStateZip",
      label: "Your City, State, Zip Code",
      type: "text",
    },
    { name: "senderEmail", label: "Your Email Address", type: "text" },
    { name: "senderPhone", label: "Your Phone Number", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipientName", label: "Recipient's Name/Department", type: "text" },
    { name: "companyName", label: "Company/Organization Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    {
      name: "companyCityStateZip",
      label: "Company City, State, Zip Code",
      type: "text",
    },
    { name: "accountNumber", label: "Account/Order Number (if applicable)", type: "text" },
    { name: "incidentDate", label: "Date of Incident/Issue", type: "date" },
    { name: "productService", label: "Product/Service Involved", type: "text" },
    { name: "issueDescription", label: "Detailed Description of the Issue", type: "textarea" },
    { name: "previousContact", label: "Previous Contact Attempts", type: "textarea" },
    { name: "impact", label: "Impact on You/Your Business", type: "textarea" },
    { name: "desiredResolution", label: "Desired Resolution/Compensation", type: "textarea" },
    { name: "deadline", label: "Response Deadline (optional)", type: "text" },
  ],
  template: `
<p>{{senderName}}<br/>
{{senderAddress}}<br/>
{{senderCityStateZip}}<br/>
{{senderEmail}}<br/>
{{senderPhone}}</p>

<p>Date: {{date}}</p>

<p>{{recipientName}}<br/>
{{companyName}}<br/>
{{companyAddress}}<br/>
{{companyCityStateZip}}</p>

<p><strong>Subject:</strong> Formal Complaint - {{productService}}</p>

<p>Dear {{recipientName}},</p>

<p>I am writing to formally register a complaint regarding {{productService}} that I experienced on {{incidentDate}}.</p>

<p><strong>Account/Order Number:</strong> {{accountNumber}}</p>

<p><strong>Issue Description:</strong><br/>
{{issueDescription}}</p>

<p><strong>Previous Contact:</strong><br/>
{{previousContact}}</p>

<p><strong>Impact:</strong><br/>
{{impact}}</p>

<p><strong>Desired Resolution:</strong><br/>
{{desiredResolution}}</p>

<p>I expect a prompt response to this complaint. {{deadline ? "I would appreciate a response by " + deadline + "." : ""}}</p>

<p>I look forward to your immediate attention to this matter.</p>

<p>Sincerely,<br/>
{{senderName}}</p>
`,
};

export default complaintLetter; 