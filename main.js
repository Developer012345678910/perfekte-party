let volume = 1;
let new_audio = false

function song_player(source, name) {
    let audio = new Audio(source);
    
    let player = document.createElement("div");
    player.className = "audio";
    playlist1.appendChild(player);

    let title = document.createElement("p");
    title.className = "title";
    title.textContent = name;
    player.appendChild(title);

    let close_button = document.createElement("button");
    close_button.textContent = "x";
    close_button.className = "close_button";
    player.appendChild(close_button);
    
    audio.addEventListener("timeupdate", function () {if (new_audio == true) {audio.currentTime = 0; new_audio = false;}});
    audio.addEventListener("timeupdate", function() {audio.volume = volume_slider.value});
    audio.addEventListener("loadedmetadata", function() {main_controller.max = audio.duration;});
    audio.addEventListener("timeupdate", function() {main_controller.value = audio.currentTime;});
    audio.addEventListener("timeupdate", function() {if (audio.currentTime >= audio.duration) {main_controller.value = "0"; main_start_stop.textContent = "Starten";}});
    main_controller.addEventListener("input", function() {audio.currentTime = main_controller.value;});
    main_start_stop.addEventListener("click", function() {if (audio.paused == false) {audio.pause(); main_start_stop.textContent = "Starten";} else {audio.play(); main_start_stop.textContent = "Stoppen";}});
    close_button.addEventListener("click", function() {audio.pause(); playlist1.removeChild(player); audio = null; songs.style.display = "flex"; new_audio = true;});
}

function beat_player(source, name) {
    let audio = new Audio(source);
    
    let palyer = document.createElement("div");
    palyer.className = "audio";
    playlist2.appendChild(palyer);

    let title = document.createElement("p");
    title.className = "title";
    title.textContent = name;
    palyer.appendChild(title);

    let palyer_box = document.createElement("div");
    palyer_box.style.display = "flex";
    palyer.appendChild(palyer_box);

    let close_button = document.createElement("button");
    close_button.textContent = "x";
    close_button.className = "close_button";
    palyer_box.appendChild(close_button);

    audio.addEventListener("timeupdate", function () {if (new_audio == true) {audio.currentTime = 0; new_audio = false;}});
    audio.addEventListener("timeupdate", function() {audio.volume = volume_slider.value});
    audio.addEventListener("loadedmetadata", function() {main_controller.max = audio.duration;});
    audio.addEventListener("timeupdate", function() {main_controller.value = audio.currentTime;});
    audio.addEventListener("timeupdate", function() {if (audio.currentTime >= audio.duration) {main_controller.value = "0"; main_start_stop.textContent = "Starten";}});
    main_controller.addEventListener("input", function() {audio.currentTime = main_controller.value;});
    main_start_stop.addEventListener("click", function() {if (audio.paused == false) {audio.pause(); main_start_stop.textContent = "Starten";} else {audio.play(); main_start_stop.textContent = "Stoppen";}});
    close_button.addEventListener("click", function() {audio.pause(); playlist2.removeChild(palyer); new_audio = true; audio = null; beats.style.display = "flex";});}

function check1() {
    if (song.value != "Songauswahl") {
        new_audio = true;
        song_player(song.value + ".mp3", song.value);
        song.value = "Songauswahl";
        songs.style.display = "none";
        main_controller.value = "0";
    }
}

function check2() {
    if (beat.value != "Beatauswahl") {
        new_audio = true;
        beat_player(beat.value + ".mp3", beat.value);
        beat.value = "Beatauswahl";
        beats.style.display = "none";
        main_controller.value = "0";
    }
}

setInterval(check1, 60);
setInterval(check2, 60);

function player_player(source, name, text) {
    let audio = new Audio(source);
    
    let palyer = document.createElement("div");
    palyer.className = "audio";
    playlists2.appendChild(palyer);

    let title = document.createElement("p");
    title.className = "title";
    title.textContent = name;
    palyer.appendChild(title);

    let palyer_box = document.createElement("div");
    palyer_box.style.display = "flex";
    palyer.appendChild(palyer_box);

    let start_stop = document.createElement("button");
    start_stop.textContent = "Starten";
    start_stop.className = "start_stop";
    palyer_box.appendChild(start_stop);

    let time_controls = document.createElement("input");
    time_controls.type = "range";
    time_controls.max = "0";
    time_controls.min = "0";
    time_controls.step = "0.1";
    time_controls.value = "0"; 
    time_controls.className = "time_controls";
    time_controls.id = "second_mainer";
    palyer_box.appendChild(time_controls);

    let close_button = document.createElement("button");
    close_button.textContent = text;
    close_button.className = "close_button";
    palyer_box.appendChild(close_button);

    audio.addEventListener("timeupdate", function() {audio.volume = volume_slider.value});
    audio.addEventListener("loadedmetadata", function() {time_controls.max = audio.duration;});
    audio.addEventListener("timeupdate", function() {time_controls.value = audio.currentTime;});
    audio.addEventListener("timeupdate", function() {if (audio.currentTime >= audio.duration) {time_controls.value = "0"; start_stop.textContent = "Starten";}});
    time_controls.addEventListener("input", function() {audio.currentTime = time_controls.value;});
    start_stop.addEventListener("click", function() {if (audio.paused == false) {audio.pause(); start_stop.textContent = "Starten";} else {audio.play(); start_stop.textContent = "Stoppen";}});
}

player_player("DanceTrack01.mp3", "DanceTrack01", "1");
player_player("DanceTrack02.mp3", "DanceTrack02", "2");
player_player("DanceTrack03.mp3", "DanceTrack03", "3");
player_player("Day and Night.mp3", "Day and Night", "4");
player_player("Emotion.mp3", "Emotion", "5");
player_player("Livia.mp3", "Livia", "6");
player_player("Summer.mp3", "Summer", "7");
player_player("World.mp3", "World", "8");

function navigation1() {
    playlists.style.display = "none";
    playlists3.style.display = "flex";
    effect_box.style.display = "none";
}

function navigation2() {
    playlists.style.display = "block";
    playlists3.style.display = "none";
    effect_box.style.display = "flex";
}

navigation1();

function play_sound(source) {
    let audio = new Audio(source);
    audio.volume = volume_slider.value;
    audio.play();
}