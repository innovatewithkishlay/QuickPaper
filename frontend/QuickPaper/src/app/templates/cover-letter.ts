import { Template } from "./types";

const coverLetter: Template = {
  id: "cover-letter",
  title: "Cover Letter",
  description:
    "Create a compelling cover letter to accompany your job application and showcase your qualifications.",
  category: "Work",
  popularity: 85,
  isNew: true,
  glimpse:
    "Professional cover letter template to highlight your skills and experience for job applications.",
  fields: [
    { name: "applicantName", label: "Your Full Name", type: "text" },
    { name: "applicantAddress", label: "Your Address", type: "text" },
    {
      name: "applicantCityStateZip",
      label: "Your City, State, Zip Code",
      type: "text",
    },
    { name: "applicantEmail", label: "Your Email Address", type: "text" },
    { name: "applicantPhone", label: "Your Phone Number", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "hiringManagerName", label: "Hiring Manager's Name", type: "text" },
    { name: "hiringManagerTitle", label: "Hiring Manager's Title", type: "text" },
    { name: "companyName", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    {
      name: "companyCityStateZip",
      label: "Company City, State, Zip Code",
      type: "text",
    },
    { name: "jobTitle", label: "Position/Job Title", type: "text" },
    { name: "jobSource", label: "Where you found the job posting", type: "text" },
    { name: "openingParagraph", label: "Opening Paragraph (Why you're interested)", type: "textarea" },
    { name: "qualifications", label: "Your Key Qualifications & Experience", type: "textarea" },
    { name: "achievements", label: "Relevant Achievements & Skills", type: "textarea" },
    { name: "companyFit", label: "Why you're a good fit for the company", type: "textarea" },
    { name: "closingParagraph", label: "Closing Paragraph (Call to action)", type: "textarea" },
  ],
  template: `
<p>{{applicantName}}<br/>
{{applicantAddress}}<br/>
{{applicantCityStateZip}}<br/>
{{applicantEmail}}<br/>
{{applicantPhone}}</p>

<p>Date: {{date}}</p>

<p>{{hiringManagerName}}<br/>
{{hiringManagerTitle}}<br/>
{{companyName}}<br/>
{{companyAddress}}<br/>
{{companyCityStateZip}}</p>

<p>Dear {{hiringManagerName}},</p>

<p>{{openingParagraph}}</p>

<p>I am excited to apply for the {{jobTitle}} position at {{companyName}}. {{qualifications}}</p>

<p>{{achievements}}</p>

<p>{{companyFit}}</p>

<p>{{closingParagraph}}</p>

<p>Thank you for considering my application. I look forward to discussing how my background, skills, and enthusiasm can contribute to {{companyName}}.</p>

<p>Sincerely,<br/>
{{applicantName}}</p>
`,
};

export default coverLetter; 