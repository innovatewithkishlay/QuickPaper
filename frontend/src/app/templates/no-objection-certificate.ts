import { Template } from "./types";

const noObjectionCertificate: Template = {
  id: "no-objection-certificate",
  title: "No Objection Certificate (NOC)",
  description:
    "Officially declare no objection for academic, employment, or property purposes.",
  category: "Work",
  popularity: 62,
  isNew: true,
  glimpse:
    "A formal letter template to certify that there is no objection to a person’s action or request.",
  fields: [
    { name: "applicantName", label: "Applicant's Name", type: "text" },
    { name: "applicantId", label: "Applicant ID/Employee ID", type: "text" },
    { name: "organization", label: "Organization Name", type: "text" },
    { name: "orgAddress", label: "Organization Address", type: "text" },
    { name: "recipient", label: "Recipient (optional)", type: "text" },
    { name: "purpose", label: "Purpose of NOC", type: "textarea" },
    { name: "issuerName", label: "Issuer's Name", type: "text" },
    { name: "issuerDesignation", label: "Issuer's Designation", type: "text" },
    { name: "date", label: "Date", type: "date" },
  ],
  template: `
<p>{{organization}}<br/>
{{orgAddress}}</p>

<p>Date: {{date}}</p>

<p>{{recipient ? ("To, " + recipient + "<br/>") : ""}}</p>

<p><strong>Subject:</strong> No Objection Certificate</p>

<p><strong>To Whom It May Concern,</strong></p>

<p>
This is to certify that Mr./Ms. {{applicantName}} (ID: {{applicantId}}) has been associated with {{organization}}, and we have no objection to {{purpose}}.
</p>

<p>
This certificate is being issued at the request of the applicant for whatever purpose it may serve.
</p>

<p>
If you require any further information, please feel free to contact us.
</p>

<p>Sincerely,<br/>
{{issuerName}}<br/>
{{issuerDesignation}}<br/>
{{organization}}</p>
`,
};

export default noObjectionCertificate;
