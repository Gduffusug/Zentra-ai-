export const templateMap = {
  "modern-ats": "/resume/templates/modern-ats.html",
};

export async function loadTemplate(templateId) {
  const path = templateMap[templateId];

  if (!path) {
    throw new Error("Template not found");
  }

  const response = await fetch(path);

  return await response.text();
}
import modernATS from "./templates/modern-ats/config";

export const templates = [
  modernATS,
];
