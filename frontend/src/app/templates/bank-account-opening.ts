import { Template } from "./types";

const bankAccountOpening: Template = {
  id: "bank-account-opening",
  title: "Bank Account Opening Letter",
  description: "Request to open a new bank account at your preferred branch.",
  category: "Finance",
  popularity: 75,
  isNew: true,
  glimpse:
    "A formal request letter for opening a new bank account at a branch.",
  fields: [
    { name: "applicantName", label: "Your Full Name", type: "text" },
    { name: "address", label: "Your Address", type: "text" },
    { name: "contactNumber", label: "Contact Number", type: "text" },
    { name: "email", label: "Email Address", type: "text" },
    { name: "date", label: "Date", type: "date" },
    { name: "bankName", label: "Bank Name", type: "text" },
    {
      name: "accountType",
      label: "Account Type",
      type: "select",
      options: ["Savings", "Current", "Salary", "Student"],
    },
    { name: "branchName", label: "Branch Name", type: "text" },
    {
      name: "initialDeposit",
      label: "Initial Deposit Amount (₹)",
      type: "number",
    },
    {
      name: "idProof",
      label: "ID Proof Type",
      type: "select",
      options: [
        "Aadhaar Card",
        "Passport",
        "Voter ID",
        "Driving License",
        "PAN Card",
      ],
    },
    { name: "idNumber", label: "ID Proof Number", type: "text" },
  ],
  template: `
<p>To,<br/>
The Branch Manager<br/>
{{branchName}} Branch<br/>
{{bankName}}</p>

<p>Date: {{date}}</p>

<p><strong>Subject:</strong> Request for Opening a New {{accountType}} Account</p>

<p>Respected Sir/Madam,</p>

<p>
I, {{applicantName}}, residing at {{address}}, wish to open a new {{accountType}} account at your {{branchName}} branch of {{bankName}}. Please find my details below:
</p>

<ul>
  <li><strong>Full Name:</strong> {{applicantName}}</li>
  <li><strong>Address:</strong> {{address}}</li>
  <li><strong>Contact Number:</strong> {{contactNumber}}</li>
  <li><strong>Email:</strong> {{email}}</li>
  <li><strong>Account Type:</strong> {{accountType}}</li>
  <li><strong>Initial Deposit:</strong> ₹{{initialDeposit}}</li>
  <li><strong>ID Proof:</strong> {{idProof}} (No: {{idNumber}})</li>
</ul>

<p>
I am enclosing self-attested copies of my {{idProof}} and other required documents for your verification.
</p>

<p>
I kindly request you to process my application at the earliest. Please let me know if any further information or documentation is required.
</p>

<p>Thank you for your assistance.</p>

<p>Yours faithfully,<br/>
{{applicantName}}<br/>
Contact: {{contactNumber}}<br/>
Email: {{email}}</p>
`,
};

export default bankAccountOpening;
