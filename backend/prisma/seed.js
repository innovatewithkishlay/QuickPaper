"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const templates = [
    {
        id: "leave-application",
        title: "Leave Application",
        category: "Student",
        content_html: `
<p>To,<br/>
The Head of Department<br/>
{{departmentName}}<br/>
{{universityName}}</p>

<p>Date: {{date}}</p>

<p><strong>Subject:</strong> Application for Leave of Absence</p>

<p>Respected Sir/Madam,</p>

<p>
I, {{studentName}} (Student ID: {{studentId}}), a student of the {{course}} program, hereby request leave of absence from {{startDate}} to {{endDate}} due to {{reason}}.
</p>

<p><strong>Type of leave:</strong> {{leaveType}}</p>

<p>
I assure you that I will complete all pending assignments and coursework immediately upon my return. I have attached supporting documents where applicable.
</p>

<p>Thank you for considering my request.</p>

<p>Sincerely,<br/>
{{studentName}}<br/>
Student ID: {{studentId}}</p>
`,
        fields_schema: [
            { name: "studentName", label: "Student Name", type: "text" },
            { name: "studentId", label: "Student ID", type: "text" },
            { name: "course", label: "Course/Program", type: "text" },
            { name: "departmentName", label: "Department Name", type: "text" },
            { name: "universityName", label: "University Name", type: "text" },
            { name: "date", label: "Date", type: "date" },
            {
                name: "leaveType",
                label: "Leave Type",
                type: "select",
                options: ["Medical", "Personal", "Academic"],
            },
            { name: "startDate", label: "Start Date", type: "date" },
            { name: "endDate", label: "End Date", type: "date" },
            { name: "reason", label: "Reason for Leave", type: "textarea" },
        ],
    },
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Seeding templates...");
        for (const t of templates) {
            yield prisma.template.upsert({
                where: { id: t.id },
                update: {},
                create: {
                    id: t.id,
                    title: t.title,
                    category: t.category,
                    content_html: t.content_html,
                    fields_schema: t.fields_schema,
                },
            });
        }
        console.log("Seeding complete.");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
