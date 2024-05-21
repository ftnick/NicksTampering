function updateTimeDifference() {
    const updates = [
        // Year - Month - Day
        {
            date: "2024-05-21",
            description: "Script detail pages are no longer individual files, script details will be loaded onto a template page instead.",
            important: false,
        },
        {
            date: "2024-05-20",
            description: "Released.",
            important: true,
        },
    ];

  const updateList = document.getElementById("updateList");
  updates.forEach((update) => {
    const newlistitem = document.createElement("li");
    const updateDate = new Date(update.date);
    const currentDate = new Date();
    const timeDifference = Math.floor(
      (currentDate - updateDate) / (1000 * 60 * 60 * 24)
    );
    let timeAgo = "";
    if (timeDifference === 0) {
      timeAgo = "Today";
    } else {
      timeAgo =
        timeDifference === 1 ? "1 day ago" : `${timeDifference} days ago`;
    }
    const updateText = `<strong>${update.date} (${timeAgo}):</strong> ${update.description}`;
    newlistitem.innerHTML = updateText;
    if (update.important) {
      newlistitem.classList.add("important");
    }
    updateList.appendChild(newlistitem);
  });
}

// Call the function on page load
window.onload = updateTimeDifference;
