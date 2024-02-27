const openStoryButtons = document.querySelectorAll('[data-story-target]');
const closeStoryButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openStoryButtons.forEach(button =>{
    button.addEventListener("click", ()=> {
        const story = document.querySelector(button.dataset.storyTarget);
        openStory(story);
    });
});

overlay.addEventListener('click', () =>{
    const stories = document.querySelectorAll('.story.active');
    stories.forEach((story)=> {
       closeStory(story); 
    });
});

closeStoryButtons.forEach(button =>{
    button.addEventListener("click", ()=> {
        const story = button.closest('.story');
        closeStory(story);
    });
});

function openStory(story){
    if(story == null) return;
    story.classList.add('active');
    overlay.classList.add('active');
}

function closeStory(story){
    if(story == null) return;
    story.classList.remove('active');
    overlay.classList.remove('active');
}
