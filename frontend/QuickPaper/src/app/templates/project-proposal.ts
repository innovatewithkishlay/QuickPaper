import { Template } from "./types";

const projectProposal: Template = {
  id: "project-proposal",
  title: "Project Proposal",
  description:
    "Submit project proposals for academic or organizational approval.",
  category: "Work",
  popularity: 60,
  isNew: false,
  glimpse:
    "A formal template for submitting detailed project proposals in organizations or academics.",
  fields: [
    { name: "proposerName", label: "Your Name", type: "text" },
    {
      name: "proposerDesignation",
      label: "Your Designation/Role",
      type: "text",
    },
    { name: "projectTitle", label: "Project Title", type: "text" },
    {
      name: "teamMembers",
      label: "Team Members (comma separated)",
      type: "text",
    },
    { name: "department", label: "Department/Division", type: "text" },
    { name: "organization", label: "Organization Name", type: "text" },
    { name: "recipient", label: "Recipient/Committee Name", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "objective", label: "Project Objective", type: "textarea" },
    { name: "scope", label: "Project Scope", type: "textarea" },
    { name: "timeline", label: "Proposed Timeline", type: "text" },
    { name: "budget", label: "Estimated Budget (₹)", type: "number" },
    { name: "contact", label: "Contact Information", type: "text" },
  ],
  template: `
<p>To,<br/>
{{recipient}}<br/>
{{department}}, {{organization}}</p>

<p>Date: {{date}}</p>

<p><strong>Subject:</strong> Project Proposal – {{projectTitle}}</p>

<p>Respected Sir/Madam,</p>

<p>
I, {{proposerName}} ({{proposerDesignation}}), from the {{department}}, am pleased to submit the proposal for the project titled "<strong>{{projectTitle}}</strong>". The following team members will be involved: {{teamMembers}}.
</p>

<p><strong>Project Objective:</strong><br/>
{{objective}}</p>

<p><strong>Project Scope:</strong><br/>
{{scope}}</p>

<p><strong>Proposed Timeline:</strong> {{timeline}}<br/>
<strong>Estimated Budget:</strong> ₹{{budget}}</p>

<p>
We believe this project will significantly benefit {{organization}} and align with our strategic goals. Kindly review the proposal and let us know if further details are required.
</p>

<p>Thank you for your consideration.</p>

<p>Sincerely,<br/>
{{proposerName}}<br/>
Contact: {{contact}}</p>
`,
};

export default projectProposal;
