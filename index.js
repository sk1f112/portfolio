import i18Obj from './translate.js'

/* Burger */

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navigation');
if (burger) {
    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock')
        burger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}
const itemslist = document.querySelectorAll('.navigation_link')
itemslist.forEach(item => item.addEventListener('click', burgerFunc));

function burgerFunc(){
    document.body.classList.remove('_lock')
    burger.classList.remove('active');
    navbar.classList.remove('active');
};


/* End burger */

/* Video Player */
// Constants //
const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const play = videoPlayer.querySelector('.control-panel_play-pause')
const bigPlay = videoPlayer.querySelector('.play_btn')
const volumeButton = videoPlayer.querySelector('.control-panel_volume-button')
const progressLine = videoPlayer.querySelector('.control-panel_progress-line');
const progressVolume = videoPlayer.querySelector('.control-panel_progress-volume');
// End Constants //
  
// Line gradient for volumeButton inputs //
progressVolume.addEventListener('input', function() {
    const value = this.value;
    if(value === '0'){
        volumeButton.classList.add('mute')
    }else{
        volumeButton.classList.remove('mute')
    }
    this.style.background = ` linear-gradient( to right, #bdae82 0%, #bdae82 ${value*100}%, #c8c8c8 ${value*100}%, white 100% )`
    })

 //End of line gradient for inputs //

// Play video function and chanching buttons //

function playVideo() {
    if(video.paused){
        bigPlay.style.display = 'none'
        play.classList.add('pause')
        video.play()
    } else {
        bigPlay.style.display = 'block'
        play.classList.remove('pause')
        video.pause()
    }
}

bigPlay.addEventListener('click', playVideo)
video.addEventListener('click', playVideo)
play.addEventListener('click', playVideo)

// End of play video function and chanching buttons //

//  volume //
function volume() {
    const volume = progressVolume.value;
    video.volume = volume;
}

volumeButton.addEventListener('click', function() {
    const value = video.volume;
    if(!volumeButton.classList.contains('mute')){
        volumeButton.classList.add('mute')
        video.volume = 0;
    }else{
        volumeButton.classList.remove('mute')
        const value = progressVolume.value;
        video.volume = value;
    }
})
progressVolume.addEventListener('input', volume)
progressVolume.addEventListener('change', volume)
// End of volume //

// Progress video //

function progressVideo(){
    progressLine.value = (video.currentTime / video.duration) * 100;
    progressLine.style.background = ` linear-gradient( to right, #bdae82 0%, #bdae82 ${progressLine.value}%, #c8c8c8 ${progressLine.value}%, white 100% )`
    if(progressLine.value === '100'){
        bigPlay.style.display = 'block'
        play.classList.remove('pause')
    }
}

function scrub(e){
    video.currentTime = (progressLine.value * video.duration) / 100
    console.log(video.currentTime)
}

progressLine.addEventListener('input', scrub)
video.addEventListener('timeupdate', progressVideo)

// End of progress video //

// Active buttons in section portfolio //
const portfolioBtns = document.querySelectorAll('.buttons_container');
const portfolioImages = document.querySelectorAll('.container_image_img');
const portfolioBtn = document.querySelectorAll('.buttons_container .button')

portfolioBtn.forEach(item => item.addEventListener('click', active))
function active(event) {
    for (let i = 0; i < portfolioBtn.length; i++) {
        if (portfolioBtn[i] != event) {
            portfolioBtn[i].classList.remove('gold');
            portfolioBtn[i].classList.add('black');
        }
        event.target.classList.remove('black');
        event.target.classList.add('gold')
    }
}
//End active buttons in section portfolio //

// Photos switch //

portfolioBtns.forEach(item => item.addEventListener('click', (e) => {
    let btn = e.target.classList.contains('button')
    if (btn) {
        changePhoto(e.target.dataset.season)
    }
}))
const seasons = ['winter', 'spring', 'summer', 'autumn']
function changePhoto(dataset) {
    seasons.forEach(season => {
        if (season === dataset) {
            portfolioImages.forEach((img, index) => {
                img.src = `./assets/image/${season}/${index + 1}.jpg`;
            })

        }
    })
}
// End Photos switch //


// Lang switch //

// Active button //
const ukr = document.querySelector('.lang_uk');
const eng = document.querySelector('.lang_en')
const lang = [ukr, eng]

lang.forEach(item => item.addEventListener('click', l_active))
function l_active(event) {
    for (let i = 0; i < lang.length; i++) {
        if (lang[i] != event) {
            lang[i].classList.remove('active');
        }
        event.target.classList.add('active')
    }
}
// End active button //

ukr.addEventListener('click', () => switchLanguage('ukr'))
eng.addEventListener('click', () => switchLanguage('en'))
function switchLanguage(language) {
    let data = document.querySelectorAll('[data-i18]')
    data.forEach(words => {
        words.textContent = i18Obj[language][words.dataset.i18]
        if (words.placeholder) {
            words.placeholder = i18Obj[language][words.dataset.i18]
            words.textContent = ''

        }
    });
}

// End lang switch //

// ligth-theme //

const ligth_theme = document.querySelector('.theme');
const elements = ['.body', '.header_logo', '.navigation_link', '.navigation','.theme', '.lang_en','.lang_uk','.lang_line',
                '.section_hero', '.section_title_text', '.section_title_text:before','.section_title_text:after', '.skills_container_plug_title',
                '.skills_container_plug_subtitle','.price_plug_title','.price_plug_cost','.price_content_text','.footer_links_link_svg','.section_contact','.contact_title','.form_email',
                '.form_phone','.form_email::placeholder','.form_message::placeholder','.form_message','.github'];

ligth_theme.addEventListener('click', ligthTheme);

function ligthTheme(){
    elements.forEach((item) => {
        const items = document.querySelectorAll(item)
        items.forEach((classes) =>{
            classes.classList.toggle('ligth')
        })
    })
}
// End ligth-theme //

