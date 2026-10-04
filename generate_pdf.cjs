const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, 'public', 'cv_template.html');
const pdfPath = path.resolve(__dirname, 'Omotoyosi_Yusuf_Resume.pdf');
const publicResume = path.resolve(__dirname, 'public', 'resume.pdf');
const publicCv = path.resolve(__dirname, 'public', 'cv.pdf');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const cmd = `"${chromePath}" --headless=new --disable-gpu --allow-file-access-from-files --no-pdf-header-footer "--print-to-pdf=${pdfPath}" "${htmlPath}"`;

console.log('Running:', cmd);
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(pdfPath)) {
  console.log('PDF Generated successfully! Size:', fs.statSync(pdfPath).size);
  fs.copyFileSync(pdfPath, publicResume);
  fs.copyFileSync(pdfPath, publicCv);
  console.log('Copied to public/resume.pdf and public/cv.pdf');
} else {
  console.error('Failed to generate PDF');
}
