const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    const token = localStorage.getItem("token");
    if (token) {
        (headers as any)["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "An error occurred");
    }

    return data;
}

export const api = {
    // Auth
    register: (data: any) => fetchAPI("/auth/register", { method: "POST", body: JSON.stringify(data) }),
    login: (data: any) => fetchAPI("/auth/login", { method: "POST", body: JSON.stringify(data) }),
    getMe: () => fetchAPI("/auth/me"),

    // Templates
    getTemplates: () => fetchAPI("/templates"),
    getTemplateById: (id: string) => fetchAPI(`/templates/${id}`),

    // Documents
    createDocument: (data: any) => fetchAPI("/documents", { method: "POST", body: JSON.stringify(data) }),
    getUserDocuments: () => fetchAPI("/documents"),
    getDocumentById: (id: string) => fetchAPI(`/documents/${id}`),
    updateDocument: (id: string, data: any) => fetchAPI(`/documents/${id}`, { method: "PUT", body: JSON.stringify(data) }),
};
