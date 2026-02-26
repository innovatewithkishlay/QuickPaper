import { Template } from "./types";

const apologyLetter: Template = {
  id: "apology-letter",
  title: "Apology Letter",
  description:
    "Express a sincere apology for mistakes or misunderstandings in personal or professional settings.",
  category: "Work",
  popularity: 58,
  isNew: true,
  glimpse:
    "A formal template for sincerely apologizing to a colleague, manager, client, or friend.",
  fields: [
    { name: "senderName", label: "Your Name", type: "text" },
    { name: "senderAddress", label: "Your Address", type: "text" },
    {
      name: "senderCityStateZip",
      label: "Your City, State, Zip Code",
      type: "text",
    },
    { name: "senderEmail", label: "Your Email Address", type: "text" },
    { name: "senderPhone", label: "Your Phone Number", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "recipientName", label: "Recipient's Name", type: "text" },
    {
      name: "recipientPosition",
      label: "Recipient's Position (optional)",
      type: "text",
    },
    {
      name: "recipientCompany",
      label: "Recipient's Company/Organization (optional)",
      type: "text",
    },
    {
      name: "recipientAddress",
      label: "Recipient's Address (optional)",
      type: "text",
    },
    {
      name: "recipientCityStateZip",
      label: "Recipient's City, State, Zip Code (optional)",
      type: "text",
    },
    {
      name: "relationship",
      label: "Relationship (e.g., Manager, Colleague, Friend)",
      type: "text",
    },
    {
      name: "incident",
      label: "What Happened / Reason for Apology",
      type: "textarea",
    },
    { name: "impact", label: "Impact of the Mistake", type: "textarea" },
    { name: "resolution", label: "How You Are Fixing It", type: "textarea" },
    { name: "promise", label: "Your Promise for the Future", type: "textarea" },
    { name: "subject", label: "Subject (optional)", type: "text" },
  ],
  template: `
<p>{{senderName}}<br/>
{{senderAddress}}<br/>
{{senderCityStateZip}}<br/>
{{senderEmail}}<br/>
{{senderPhone}}</p>

<p>Date: {{date}}</p>

<p>{{recipientName}}<br/>
{{recipientPosition}}<br/>
{{recipientCompany}}<br/>
{{recipientAddress}}<br/>
{{recipientCityStateZip}}</p>

<p><strong>Subject:</strong> {{subject || ("Apology for " + incident)}}</p>

<p>Dear {{recipientName}},</p>

<p>I am writing to sincerely apologize for {{incident}}. As your {{relationship}}, I understand that my actions may have caused {{impact}}.</p>

<p>I take full responsibility for my mistake, and I want to assure you that I am already taking steps to address the issue:</p>

<p>{{resolution}}</p>

<p>Please accept my heartfelt apologies. I value our relationship and will do my best to make sure this does not happen again. {{promise}}</p>

<p>Thank you for your understanding and patience.</p>

<p>Sincerely,<br/>
{{senderName}}</p>
`,
};

export default apologyLetter;
