hereexport const templateMap = {
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
