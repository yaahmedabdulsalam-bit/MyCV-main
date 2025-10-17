<script>
    // Select all images in the top-row as slides
    const slides = document.querySelectorAll('.top-row img');
    let currentSlide = 0; // Track the current slide index

    // Function to hide all slides
    function hideAllSlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
    }

    // Function to show the current slide
    function showSlide(index) {
        hideAllSlides();
        slides[index].style.display = 'block';
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the slideshow
    function startSlideshow() {
        showSlide(currentSlide); // Show the first slide
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Start the slideshow when the page loads
    window.onload = startSlideshow;
</script>
