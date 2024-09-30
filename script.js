        // Animate the Hero Section
        gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
        gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from(".hero .btn", { opacity: 0, scale: 0, duration: 0.8, delay: 1 });

        // Animate Sections as they scroll into view
        gsap.registerPlugin(ScrollTrigger);
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 100,
                duration: 1
            });
        });

        // Animate Project Items
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            gsap.from(item, {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                }
            });
        });

        // Animate Skills List
        gsap.from(".skills ul li", {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".skills",
                start: "top 80%"
            }
        });

        function sendEmail(event) {
            event.preventDefault();  // Prevent the form from submitting
          
            let parms = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("Message").value
            };
          
            emailjs.send("service_dnnszd5", "template_jju2rtn", parms)
              .then(function() {
                  alert("Your message was submitted successfully. Thank you for reaching out!");
                  
                  // Clear the form fields
                  document.getElementById("name").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("Message").value = "";
              })
              .catch(function(error) {
                  console.error("Error sending email:", error);
                  alert("Failed to send your message. Please try again later.");
              });
          }
          
       



