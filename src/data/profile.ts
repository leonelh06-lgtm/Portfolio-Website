// Keep personal details here so you don't have to hunt through page markup.
// A type describes the shape of an object. TypeScript reports mistakes such as
// assigning a number to name, because name is declared as a string (text).
type Profile = {
  name: string;
  role: string;
  school: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

export const profile: Profile = {
  name: "Leonel Hernandez",
  role: "2nd Year Computer Science Student",
  school: "University of Central Florida",
  // Empty strings mean "not configured". Pages check for a value before
  // rendering a link. Add your real details when you're ready to share them.
  email: "le340227@ucf.edu",
  githubUrl: "https://github.com/leonelh06-lgtm",
  linkedinUrl: "https://www.linkedin.com/in/leonel-hernandez-ucf",
};
