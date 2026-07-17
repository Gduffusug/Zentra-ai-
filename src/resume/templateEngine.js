// ===============================
// ZENTRA AI RESUME TEMPLATE ENGINE
// ===============================

export function replaceTemplate(template, data) {
  let html = template;

  // -----------------------
  // BASIC INFORMATION
  // -----------------------

  html = html.replaceAll("{{photo}}", data.photo || "");

  html = html.replaceAll("{{fullName}}", data.fullName || "");

  html = html.replaceAll("{{jobTitle}}", data.jobTitle || "");

  html = html.replaceAll("{{email}}", data.email || "");

  html = html.replaceAll("{{phone}}", data.phone || "");

  html = html.replaceAll("{{address}}", data.address || "");

  html = html.replaceAll("{{linkedin}}", data.linkedin || "");

  html = html.replaceAll("{{github}}", data.github || "");

  html = html.replaceAll("{{portfolio}}", data.portfolio || "");

  html = html.replaceAll("{{summary}}", data.summary || "");

  // -----------------------
  // REPEATING SECTIONS
  // -----------------------

  html = html.replaceAll(
    "{{skills}}",
    generateSkillHTML(data.skills)
  );

  html = html.replaceAll(
    "{{languages}}",
    generateLanguageHTML(data.languages)
  );

  html = html.replaceAll(
    "{{education}}",
    generateEducationHTML(data.education)
  );

  html = html.replaceAll(
    "{{experience}}",
    generateExperienceHTML(data.experience)
  );

  html = html.replaceAll(
    "{{projects}}",
    generateProjectHTML(data.projects)
  );

  html = html.replaceAll(
    "{{certificates}}",
    generateCertificateHTML(data.certificates)
  );

  html = html.replaceAll(
    "{{achievements}}",
    generateAchievementHTML(data.achievements)
  );

  return html;
}

// ===============================
// SKILLS
// ===============================

function generateSkillHTML(skills = []) {
  return skills
    .map(
      skill =>
        `<span class="skill-pill">${skill}</span>`
    )
    .join("");
}

// ===============================
// LANGUAGES
// ===============================

function generateLanguageHTML(languages = []) {
  return languages
    .map(
      language =>
        `<span class="skill-pill">${language}</span>`
    )
    .join("");
}

// ===============================
// EXPERIENCE
// ===============================

function generateExperienceHTML(experience = []) {
  return experience
    .map(item => item.html || "")
    .join("");
}

// ===============================
// EDUCATION
// ===============================

function generateEducationHTML(education = []) {
  return education
    .map(item => item.html || "")
    .join("");
}

// ===============================
// PROJECTS
// ===============================

function generateProjectHTML(projects = []) {
  return projects
    .map(item => item.html || "")
    .join("");
}

// ===============================
// CERTIFICATES
// ===============================

function generateCertificateHTML(certificates = []) {
  return certificates
    .map(item => item.html || "")
    .join("");
}

// ===============================
// ACHIEVEMENTS
// ===============================

function generateAchievementHTML(achievements = []) {
  return achievements
    .map(item => item.html || "")
    .join("");
}
