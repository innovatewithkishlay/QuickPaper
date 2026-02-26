import { Template } from "./types";

const meetingMinutes: Template = {
  id: "meeting-minutes",
  title: "Meeting Minutes",
  description:
    "Document meeting discussions, decisions, and action items in a professional format.",
  category: "Work",
  popularity: 72,
  isNew: true,
  glimpse:
    "Professional template to record meeting details, attendees, discussions, and follow-up actions.",
  fields: [
    { name: "meetingTitle", label: "Meeting Title", type: "text" },
    { name: "meetingDate", label: "Meeting Date", type: "date" },
    { name: "meetingTime", label: "Meeting Time", type: "text" },
    { name: "meetingLocation", label: "Meeting Location/Virtual Platform", type: "text" },
    { name: "meetingType", label: "Meeting Type", type: "select", options: ["In-Person", "Virtual", "Hybrid"] },
    { name: "facilitator", label: "Meeting Facilitator/Chair", type: "text" },
    { name: "minuteTaker", label: "Minutes Prepared By", type: "text" },
    { name: "attendees", label: "Attendees (Names)", type: "textarea" },
    { name: "absentees", label: "Absentees (Names)", type: "textarea" },
    { name: "meetingPurpose", label: "Meeting Purpose/Objective", type: "textarea" },
    { name: "agendaItems", label: "Agenda Items Discussed", type: "textarea" },
    { name: "keyDecisions", label: "Key Decisions Made", type: "textarea" },
    { name: "actionItems", label: "Action Items & Assignments", type: "textarea" },
    { name: "nextMeeting", label: "Next Meeting Date & Time", type: "text" },
    { name: "additionalNotes", label: "Additional Notes/Comments", type: "textarea" },
  ],
  template: `
<h2 style="text-align: center; margin-bottom: 20px;">MEETING MINUTES</h2>

<p><strong>Meeting Title:</strong> {{meetingTitle}}</p>
<p><strong>Date:</strong> {{meetingDate}}</p>
<p><strong>Time:</strong> {{meetingTime}}</p>
<p><strong>Location:</strong> {{meetingLocation}}</p>
<p><strong>Meeting Type:</strong> {{meetingType}}</p>

<p><strong>Facilitator:</strong> {{facilitator}}</p>
<p><strong>Minutes Prepared By:</strong> {{minuteTaker}}</p>

<h3>Attendees:</h3>
<p>{{attendees}}</p>

<h3>Absentees:</h3>
<p>{{absentees}}</p>

<h3>Meeting Purpose:</h3>
<p>{{meetingPurpose}}</p>

<h3>Agenda Items Discussed:</h3>
<p>{{agendaItems}}</p>

<h3>Key Decisions Made:</h3>
<p>{{keyDecisions}}</p>

<h3>Action Items & Assignments:</h3>
<p>{{actionItems}}</p>

<h3>Next Meeting:</h3>
<p>{{nextMeeting}}</p>

<h3>Additional Notes:</h3>
<p>{{additionalNotes}}</p>

<p style="margin-top: 30px; text-align: center;">
<strong>Minutes approved by:</strong> _________________<br/>
<strong>Date:</strong> _________________
</p>
`,
};

export default meetingMinutes; 