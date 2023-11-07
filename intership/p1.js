// JavaScript for dynamic form handling, preview, and download
document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault();
    updatePreview();
    downloadResume();
  });
  
  function updatePreview() {
    // Implement code to update the resume preview based on form inputs
    const preview = document.getElementById('preview');
    // Example: Display the entered name in the preview
    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const name = nameInput.value || 'Your Name';
    preview.innerHTML = `<h2>${name}</h2>`;
  }
  
  function downloadResume() {
    const doc = new jsPDF();
    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const name = nameInput.value || 'Your Name';
    doc.text(`Resume for ${name}`, 10, 10);
    doc.save('resume.pdf');
  }
  