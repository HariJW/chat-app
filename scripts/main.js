const messages = [
  {
    name: "Jacob Jones",
    time: "5:42 PM",
    msg: "Great quality and attention to detail...",
    stars: 4,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Marvin McKinney",
    time: "3:20 PM",
    msg: "The team is talented...",
    stars: 3,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Theresa Webb",
    time: "Jun 20, 2025",
    msg: "The best service I’ve received...",
    stars: 3,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Jane Cooper",
    time: "Jun 20, 2025",
    msg: "The team is talented...",
    stars: 4,
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Jenny Wilson",
    time: "Jun 20, 2025",
    msg: "Very professional and skilled team...",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Robert Fox",
    time: "Jun 20, 2025",
    msg: "Their design work was stunning!",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=6",
  },
  {
    name: "Annette Black",
    time: "Jun 20, 2025",
    msg: "Their service was very smooth.",
    stars: 4,
    avatar: "https://i.pravatar.cc/40?img=7",
  },
  {
    name: "John Doe",
    time: "Jun 20, 2025",
    msg: "Highly recommend to others.",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=8",
  },
];

const messageList = document.querySelector(".message-list");

messages.forEach((msg, index) => {
  const stars = "★".repeat(msg.stars) + "☆".repeat(5 - msg.stars);
  const activeClass = index === 1 ? "active" : "";

  messageList.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start message-item ${activeClass}">
      <div class="d-flex">
        <img src="${msg.avatar}" alt="avatar" class="rounded-circle me-2" width="40" height="40">
        <div>
          <div class="fw-semibold">${msg.name}</div>
          <div class="text-warning small">${stars}</div>
          <small class="text-muted d-block mt-1">${msg.msg}</small>
        </div>
      </div>
      <small class="text-muted">${msg.time}</small>
    </li>
  `;
});
