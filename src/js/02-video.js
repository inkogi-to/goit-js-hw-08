import Vimeo from "@vimeo/player";
import _ from "lodash.throttle"


let player = new Vimeo(document.querySelector('#vimeo-player'));

function updateTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', _(updateTime, 1000));

const time = localStorage.getItem('videoplayer-current-time')
if (time) {
    player.setCurrentTime(time);
}

window.addEventListener('click',clearStorages);

function clearStorages() {
    localStorage.removeItem('videoplayer-current-time')
    player.setCurrentTime(0.0);

}
//
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//
//
// const removeTime = () => {
//     localStorage.removeItem('videoplayer-current-time');
// }
// player.pause().then(() => {
//     player.unload()
// })
// player.unload(player)
//




