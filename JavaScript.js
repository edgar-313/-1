
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function openModal(title, description) {
        document.getElementById('modalTitle').innerHTML = title;
        document.getElementById('modalDescription').innerHTML = description;
        document.getElementById('myModal').style.display = 'flex';
    }

function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    function openModal(title, description) {
        document.getElementById('modalTitle').innerHTML = title;
        document.getElementById('modalDescription').innerHTML = description;
        document.getElementById('myModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }


    function toggleMenu() {
        var menu = document.querySelector('.main-menu ul');
        menu.classList.toggle('show');
    }
