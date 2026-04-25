(() => {
    document.querySelectorAll('.zoom-container').forEach(container => {

        const plusBtn = container.querySelector('.zoom-pic-plus');
        const minusBtn = container.querySelector('.zoom-pic-minus');
        const parkingPhoto = container.querySelector('.parking-photo');

        if (!plusBtn || !minusBtn || !parkingPhoto) return;

        let scale = 1;
        const maxScale = 2;
        const minScale = 1;

        let isDragging = false;
        let startX, startY, currentX = 0, currentY = 0;

        function applyTransform() {
            parkingPhoto.style.transform = `scale(${scale}) translate(${currentX}px, ${currentY}px)`;
        }

        plusBtn.addEventListener('click', () => {
            if (scale < maxScale) {
                scale += 1;
                applyTransform();
                minusBtn.classList.remove('disabled');
            }
            if (scale >= maxScale) {
                plusBtn.classList.add('disabled');
            }
        });

        minusBtn.addEventListener('click', () => {
            if (scale > minScale) {
                scale -= 1;

                if (scale === 1) {
                    currentX = 0;
                    currentY = 0;
                }

                applyTransform();
                plusBtn.classList.remove('disabled');
            }

            if (scale <= minScale) {
                minusBtn.classList.add('disabled');
            }
        });

        parkingPhoto.addEventListener('mousedown', (e) => {
            if (scale === 1) return;
            isDragging = true;
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;
            parkingPhoto.classList.add('dragging');
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            parkingPhoto.classList.remove('dragging');
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;
            applyTransform();
        });

        // Disable minus at start
        minusBtn.classList.add('disabled');
    });
})();
