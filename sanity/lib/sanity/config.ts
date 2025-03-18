export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03",
    useCdn: process.env.NODE_ENV === "production",
};