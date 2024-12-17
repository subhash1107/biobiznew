document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Dynamic Generation ---
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "https://biobiz.in/about/" },
        { name: "Services", href: "https://biobiz.in/s/bring" },
        { name: "Innovation", href: "https://biobiz.in/category/innovation-insights/" },
        { name: "Consulting", href: "https://biobiz.in/s/consulting" },
        { name: "Contact", href: "https://biobiz.in/contact/" }
    ];

    const dynamicNav = document.getElementById("dynamicNav");
    
    navItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "nav-item";
        
        const link = document.createElement("a");
        link.className = "nav-link";
        link.href = item.href;
        link.textContent = item.name;
        
        listItem.appendChild(link);
        dynamicNav.appendChild(listItem);
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });

    // --- Navbar Shrink Effect ---
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const navbarHeight = navbar.offsetHeight;

    // Add padding to body to prevent content from being hidden
    document.body.style.paddingTop = `${navbarHeight}px`;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 10) {
            navbar.classList.add('shadow');
            logo.classList.add('shrink');
        } else {
            navbar.classList.remove('shadow');
            logo.classList.remove('shrink');
        }
    });

    // --- Autoplay Video Pause/Resume ---
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('click', () => {
            if (video.paused) video.play();
            else video.pause();
        });
    });
});

// --- Array of Updates ---
const updates = [
    { text: "Sustainable Aviation Fuel Facility: BPCL to Launch India’s First by 2027", href: "https://biobiz.in/category/updates/" },
    { text: "Green Hydrogen Solutions: NHPC Partners with GGGI", href: "https://biobiz.in/category/updates/" },
    { text: "India’s First Green Hydrogen Fuel Station Built by Amara Raja Infra in Leh", href: "https://biobiz.in/category/updates/" },
    { text: "Waste Disposal Plant in Rudrapur to Generate Biogas", href: "https://biobiz.in/category/updates/" },
    { text: "Biochar Integration by Tata Steel in India to Reduce Emissions", href: "https://biobiz.in/category/updates/" },
    { text: "India’s First Cowshed with Integrated CBG Plant Opens in Gwalior", href: "https://biobiz.in/category/updates/" },
    { text: "Biochar Use in Steelmaking Explored as IIT (ISM) Dhanbad Partners with sentra.world", href: "https://biobiz.in/category/updates/" },
    { text: "Ethanol Plant by Kisan Cooperative Sugar Mill in Pilibhit", href: "https://biobiz.in/category/updates/" },
    { text: "World’s Largest Sustainable Aviation Fuel Plants By TruAlt", href: "https://biobiz.in/category/updates/" },
    { text: "Biofuel production from Seaweed Biomass: HPCL partners with Sea6 Energy", href: "https://biobiz.in/category/updates/" },
    { text: "Green Hydrogen Plant in Baddi: Oil India and Himachal Pradesh Power Corporation partner", href: "https://biobiz.in/category/updates/" },
    { text: "Bio-CNG Plants in 2 Cow Shelters by Greater Noida Authority", href: "https://biobiz.in/category/updates/" },
    { text: "Biogas Plant to Be Revived by Faridabad Municipal Corporation", href: "https://biobiz.in/category/updates/" },
    { text: "Straw-Based Biogas Plant Commercialization", href: "https://biobiz.in/category/updates/" },
    { text: "Biofuel from Carbon Dioxide Developed by IIT Guwahati", href: "https://biobiz.in/category/updates/-" },
    { text: "Biodiesel Deliveries: Aemetis India Completes $103 Million to OMCs", href: "https://biobiz.in/category/updates/" },
    { text: "Green Hydrogen: TKIL Partners with Sohhytec", href: "https://biobiz.in/category/updates/" },
    { text: "Biobutanol Production: Godavari Biorefineries Partners with Catalyxx", href: "https://biobiz.in/category/updates/" },
    { text: "Compressed Biogas Plants Using Cow Dung in Uttar Pradesh", href: "https://biobiz.in/category/updates/" },
    { text: "Steelmaking with Green Hydrogen: SAIL and John Cockerill India Collaborate", href: "https://biobiz.in/category/updates/" }
];

// --- Carousel Generation ---
const carouselContent = document.getElementById("carouselContent");

// Function to dynamically generate anchor tags and add them to the carousel
function generateCarouselItems() {
    updates.forEach(update => {
        // Create anchor element
        const anchor = document.createElement("a");
        anchor.href = update.href;
        anchor.textContent = update.text;

        // Append to carousel container
        carouselContent.appendChild(anchor);
    });

    // Duplicate the content for smooth infinite scrolling
    updates.forEach(update => {
        const anchor = document.createElement("a");
        anchor.href = update.href;
        anchor.textContent = update.text;
        carouselContent.appendChild(anchor);
    });
}

// Call the function to generate carousel items
generateCarouselItems();

// Listen for animation end to stop animation and enable scrolling
carouselContent.addEventListener('animationend', () => {
    carouselContent.style.overflowY = 'auto'; // Enable scrolling
    carouselContent.style.animation = 'none'; // Stop animation
});
