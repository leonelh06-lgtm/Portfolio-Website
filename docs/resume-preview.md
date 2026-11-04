# Updating the resume

1. Replace `public/Leonel-Hernandez-Resume.pdf` with your updated PDF.
2. From the project folder, regenerate the preview using Poppler:

   ```powershell
   pdftoppm -scale-to 1800 -png -singlefile public/Leonel-Hernandez-Resume.pdf public/resume-preview
   ```

3. Check the Resume page to confirm the preview matches the download.

The current resume has one page. The command renders the first page into
`public/resume-preview.png`. If the resume grows to multiple pages, render
and display each page rather than using `-singlefile`.

The website uses an image for the paper-style preview and the original PDF
for downloads and selectable text. Both files need updating together.
