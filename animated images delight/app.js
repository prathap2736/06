/*let btns = document.querySelectorAll(".btn");
let banner = document.getElementById('banner');

btns.forEach((btn, index) =>{
    btn.addEventListener('click', () =>{
        banner.src = 'images/${index}.jpg';
        animation()
        btn.classList.add("active");
    });
});
function animation() {
    banner.classList.add('zoom');

    setTimeout(() => {
        banner.classList.remove('zoom');
    },1000);

    for (b of btns) {
        b.classList.remove("active");
    }
    
} */

    let btns = document.querySelectorAll(".btn");
let banner = document.getElementById('banner');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Update the image source correctly
        banner.src = `images/${index + 1}.jpg`;

        // Call the animation function
        animation();

        // Remove "active" class from all buttons
        btns.forEach(b => b.classList.remove("active"));

        // Add "active" class to the clicked button
        btn.classList.add("active");
    });
});

function animation() {
    banner.classList.add('zoom');

    // Remove the "zoom" class after the animation completes
    setTimeout(() => {
        banner.classList.remove('zoom');
    }, 1000);
}
