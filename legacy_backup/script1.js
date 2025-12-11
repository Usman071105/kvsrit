document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const year = document.getElementById('year').value;
    const section = document.getElementById('section').value;
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files.length > 0) {
        const formData = new FormData();
        
        formData.append("year", year);
        formData.append("section", section);
        formData.append("file", fileInput.files[0]);

        fetch("http://localhost:3000/upload", { method: "POST", body: formData })
          .then(response => response.json())
          .then(data => {
              if (data._id) { // Check if upload was successful
                  // Create a list item to display the uploaded file
                  const listItem = document.createElement('li');
                  listItem.textContent = `Year ${year}, Section ${section}: ${data.filename}`;

                  // Create a link to open the uploaded file
                  const link = document.createElement('a');
                  link.href = `http://localhost:3000/${data.filepath}`;
                  link.target = '_blank'; // Open in a new tab
                  link.textContent = ' Open';
                  listItem.appendChild(link);

                  // Append to the uploaded files list
                  document.getElementById('fileList').appendChild(listItem);

                  // Reset the form
                  document.getElementById('attendanceForm').reset();
              } else {
                  alert("File upload failed");
              }
          })
          .catch(error => console.error("Error uploading file:", error));
    }
});