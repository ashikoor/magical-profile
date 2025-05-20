        // Create animated background stars
        document.addEventListener('DOMContentLoaded', function() {
            const bgAnimation = document.getElementById('bg-animation');
            const particlesContainer = document.getElementById('particles');
            
            // Create stars for background
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random animation duration and opacity
                const duration = 3 + Math.random() * 7;
                const opacity = 0.1 + Math.random() * 0.7;
                
                star.style.left = `${posX}%`;
                star.style.top = `${posY}%`;
                star.style.setProperty('--duration', `${duration}s`);
                star.style.setProperty('--opacity', opacity);
                
                bgAnimation.appendChild(star);
            }
            
            // Create magical particles
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random animation delay
                const delay = Math.random() * 5;
                
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                
                particlesContainer.appendChild(particle);
            }
            
            // Add tilt effect on mousemove
            const card = document.querySelector('.card');
            
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const xPercent = x / rect.width;
                const yPercent = y / rect.height;
                
                const rotateX = (0.5 - yPercent) * 10;
                const rotateY = (xPercent - 0.5) * 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
                
                // Move magical aura with mouse
                const aura = this.querySelector('.magical-aura');
                aura.style.transform = `translate(${(xPercent - 0.5) * 30}px, ${(yPercent - 0.5) * 30}px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-15px)';
                const aura = this.querySelector('.magical-aura');
                aura.style.transform = 'translate(0, 0)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(0)';
                }, 300);
            });
            
            // Add animation to stats on hover
            const stats = document.querySelectorAll('.stat-value');
            stats.forEach(stat => {
                const originalValue = stat.textContent;
                stat.parentElement.addEventListener('mouseenter', function() {
                    let count = 0;
                    const target = parseInt(originalValue.replace(/[^\d]/g, ''));
                    const duration = 1000;
                    const increment = Math.ceil(target / (duration / 16));
                    
                    const interval = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            stat.textContent = originalValue;
                            clearInterval(interval);
                        } else {
                            stat.textContent = count;
                        }
                    }, 16);
                });
            });
            
            // Add magical effect when clicking the button
            const button = document.querySelector('.card-button');
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '5px';
                ripple.style.height = '5px';
                ripple.style.background = 'white';
                ripple.style.borderRadius = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.pointerEvents = 'none';
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                this.appendChild(ripple);
                
                ripple.animate(
                    [
                        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
                        { opacity: 0, transform: 'translate(-50%, -50%) scale(50)' }
                    ],
                    {
                        duration: 800,
                        easing: 'ease-out'
                    }
                );
                
                setTimeout(() => {
                    ripple.remove();
                }, 800);
            });
        });