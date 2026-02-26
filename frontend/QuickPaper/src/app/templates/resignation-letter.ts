import { Template } from "./types";

const resignationLetter: Template = {
  id: "resignation-letter",
  title: "Resignation Letter",
  description: "Resign gracefully and professionally",
  category: "Work",
  popularity: 90,
  isNew: false,
  glimpse: "Professional resignation notice with proper notice period.",
  fields: [
    { name: "yourName", label: "Your Name", type: "text" },
    { name: "yourAddress", label: "Your Address", type: "text" },
    { name: "cityStateZip", label: "City, State, Zip Code", type: "text" },
    { name: "email", label: "Email Address", type: "text" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "managerName", label: "Manager's Name", type: "text" },
    { name: "managerPosition", label: "Manager's Position", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    {
      name: "companyCityStateZip",
      label: "Company City, State, Zip Code",
      type: "text",
    },
    { name: "position", label: "Your Position", type: "text" },
    { name: "lastWorkingDay", label: "Last Working Day", type: "date" },
    { name: "reason", label: "Reason for Resignation", type: "textarea" },
  ],
  template: `
<p>{{yourName}}<br/>
{{yourAddress}}<br/>
{{cityStateZip}}<br/>
{{email}}<br/>
{{phone}}</p>

<p>Date: {{date}}</p>

<p>{{managerName}}<br/>
{{managerPosition}}<br/>
{{company}}<br/>
{{companyAddress}}<br/>
{{companyCityStateZip}}</p>

<p>Dear {{managerName}},</p>

<p>
Please accept this letter as formal notification that I am resigning from my position as {{position}} at {{company}}. My last day of employment will be {{lastWorkingDay}}.
</p>

<p>
{{reason}}
</p>

<p>
I would like to express my gratitude for the opportunities I've had during my time at {{company}}. I've learned a great deal and appreciate the support I've received.
</p>

<p>
Please let me know how I can assist during this transition period. I'm committed to ensuring a smooth handover of my responsibilities.
</p>

<p>
Thank you for your understanding.
</p>

<p>Sincerely,<br/>
{{yourName}}</p>
`,
};

export default resignationLetter;
