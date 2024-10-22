let videos = [
    {
      id: 1,
      title: "How to Learn JavaScript",
      thumbnail: "https://via.placeholder.com/600x300",
      url: "https://example.com/video1",
      duration: "10:30"
    },
    {
      id: 2,
      title: "React Native Tutorial",
      thumbnail: "https://via.placeholder.com/600x300",
      url: "https://example.com/video2",
      duration: "15:45"
    },
    {
      id: 3,
      title: "Understanding Async/Await",
      thumbnail: "https://via.placeholder.com/600x300",
      url: "https://example.com/video3",
      duration: "12:15"
    },
    {
      id: 4,
      title: "Node.js Basics",
      thumbnail: "https://via.placeholder.com/600x300",
      url: "https://example.com/video4",
      duration: "9:45"
    },
    {
      id: 5,
      title: "Vue.js Introduction",
      thumbnail: "https://via.placeholder.com/600x300",
      url: "https://example.com/video5",
      duration: "8:20"
    }
    // Add more videos as needed
  ];
  
  let currentIndex = 0;
  
  function loadVideos() {
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = ""; // Clear existing videos
  
    videos.forEach((video) => {
      const videoCard = document.createElement("div");
      videoCard.classList.add("video-card");
  
      videoCard.innerHTML = `
        <a href="${video.url}" target="_blank">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" />
          <div class="video-details">
            <p class="video-title">${video.title}</p>
            <p class="video-duration">${video.duration}</p>
          </div>
        </a>
      `;
  
      videoList.appendChild(videoCard);
    });
  }
  
  function autoSlide() {
    const carousel = document.getElementById("carousel");
    const totalVideos = videos.length;
    
    currentIndex = (currentIndex + 1) % totalVideos; // Loop through the videos
  
    // Slide the carousel to show the next video
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
  }
  
  // Load videos on page load
  window.onload = function () {
    loadVideos();
    setInterval(autoSlide, 3000); // Slide every 3 seconds
  };
  