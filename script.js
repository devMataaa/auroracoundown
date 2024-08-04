document.addEventListener('DOMContentLoaded', () => {
    // Function to update the countdown timer
    function updateCountdown() {
        const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now

        function formatTime(ms) {
            const hours = Math.floor(ms / (1000 * 60 * 60));
            const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((ms % (1000 * 60)) / 1000);
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function update() {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance <= 0) {
                document.getElementById('countdownTimer').innerText = '00:00:00';
                return;
            }

            document.getElementById('countdownTimer').innerText = formatTime(distance);
            setTimeout(update, 1000); // Update every second
        }

        update(); // Start the countdown
    }

    updateCountdown(); // Initialize the countdown

    // Function to play audio
    function playAudio() {
        const audio = document.getElementById('backgroundAudio');
        audio.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    // Add event listener to play button
    document.getElementById('playButton').addEventListener('click', playAudio);
});
