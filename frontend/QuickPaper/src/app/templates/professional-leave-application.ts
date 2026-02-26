import { Template } from "./types";

const professionalLeaveApplication: Template = {
  id: "professional-leave-application",
  title: "Professional Leave Application Letter",
  description:
    "Formally request a leave of absence from your employer for personal, medical, or other reasons.",
  category: "Work",
  popularity: 80,
  isNew: true,
  glimpse:
    "A formal, concise leave application letter template for working professionals.",
  fields: [
    { name: "employeeName", label: "Your Name", type: "text" },
    { name: "employeeId", label: "Employee ID", type: "text" },
    { name: "designation", label: "Your Designation", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "managerName", label: "Manager/Supervisor's Name", type: "text" },
    { name: "company", label: "Company Name", type: "text" },
    { name: "companyAddress", label: "Company Address", type: "text" },
    {
      name: "leaveType",
      label: "Type of Leave",
      type: "select",
      options: [
        "Annual",
        "Casual",
        "Sick",
        "Personal",
        "Maternity",
        "Paternity",
        "Bereavement",
        "Other",
      ],
    },
    { name: "startDate", label: "Leave Start Date", type: "date" },
    { name: "endDate", label: "Leave End Date", type: "date" },
    { name: "reason", label: "Reason for Leave", type: "textarea" },
    {
      name: "handoverDetails",
      label: "Work Handover/Contact Details",
      type: "textarea",
    },
    { name: "date", label: "Date of Application", type: "date" },
  ],
  template: `
<p>{{employeeName}}<br/>
Employee ID: {{employeeId}}<br/>
{{designation}}, {{department}}<br/>
{{company}}<br/>
{{companyAddress}}</p>

<p>Date: {{date}}</p>

<p>To,<br/>
{{managerName}}<br/>
{{designation}}<br/>
{{company}}</p>

<p><strong>Subject:</strong> Application for {{leaveType}} Leave</p>

<p>Dear {{managerName}},</p>

<p>
I am writing to formally request a {{leaveType}} leave of absence from {{startDate}} to {{endDate}} due to {{reason}}.
</p>

<p>
During my absence, I have arranged for {{handoverDetails}} to ensure that my responsibilities are managed without disruption. Should you require any urgent assistance, I will be reachable at my email or phone.
</p>

<p>
I kindly request you to grant me leave for the mentioned period. I appreciate your understanding and support.
</p>

<p>Thank you for your consideration.</p>

<p>Sincerely,<br/>
{{employeeName}}</p>
`,
};

export default professionalLeaveApplication;
