// ==========================================
// 🛠️ PENGATURAN USERNAME & PLAYLIST
// ==========================================
const GITHUB_USERNAME = 'donydaily'; 

const PLAYLIST = [
    {
        title: "2002",
        artist: "Anne Marie",
        cover: "assets/images/2002.png",
        url: "assets/audio/2002.mp3"
    },
    {
        title: "All I Wanted",
        artist: "Paramore",
        cover: "assets/images/all_i_wanted.jpg",
        url: "assets/audio/all_i_wanted.mp3" 
    },
    {
        title: "APT.",
        artist: "ROSÉ & Bruno Mars",
        cover: "assets/images/apt..png",
        url: "assets/audio/apt..mp3"
    },
    {
        title: "Be Alone",
        artist: "Paramore",
        cover: "assets/images/be_alone.jpg",
        url: "assets/audio/be_alone.mp3"
    },
    {
        title: "Bite Me",
        artist: "Avril Lavigne",
        cover: "assets/images/bite_me.png",
        url: "assets/audio/bite_me.mp3"
    },
    {
        title: "Brick by Boring Brick",
        artist: "Paramore",
        cover: "assets/images/brick_by_boring_brick.jpg",
        url: "assets/audio/brick_by_boring_brick.mp3"
    },
    {
        title: "Caught In The Middle",
        artist: "Paramore",
        cover: "assets/images/caught_in_the_middle.jpg",
        url: "assets/audio/caught_in_the_middle.mp3"
    },
    {
        title: "Decode",
        artist: "Paramore",
        cover: "assets/images/decode.jpg",
        url: "assets/audio/decode.mp3"
    },
    {
        title: "Fake Happy",
        artist: "Paramore",
        cover: "assets/images/fake_happy.jpg",
        url: "assets/audio/fake_happy.mp3"
    },
    {
        title: "Galau",
        artist: "Five Minutes",
        cover: "assets/images/galau.png",
        url: "assets/audio/galau.mp3"
    },
    {
        title: "Hallelujah",
        artist: "Paramore",
        cover: "assets/images/hallelujah.jpg",
        url: "assets/audio/hallelujah.mp3"
    },
    {
        title: "Happier",
        artist: "Olivia Rodrigo",
        cover: "assets/images/happier.png",
        url: "assets/audio/happier.mp3"
    },
    {
        title: "Head Above Water",
        artist: "Avril Lavigne",
        cover: "assets/images/head_above_water.png",
        url: "assets/audio/head_above_water.mp3"
    },
    {
        title: "Kehadiranmu",
        artist: "Vagetoz",
        cover: "assets/images/Kehadiranmu.png",
        url: "assets/audio/kehadiranmu.mp3"
    },
    {
        title: "Komang",
        artist: "Raim Laode",
        cover: "assets/images/Komang.png",
        url: "assets/audio/komang.mp3"
    },
    {
        title: "Main Hati",
        artist: "Andra And The BackBone",
        cover: "assets/images/main_hati.png",
        url: "assets/audio/main_hati.mp3"
    },
    {
        title: "Manusia Bodoh",
        artist: "Ada Band",
        cover: "assets/images/manusia_bodoh.png",
        url: "assets/audio/manusia_bodoh.mp3"
    },
    {
        title: "Masih Ada",
        artist: "Ello",
        cover: "assets/images/masih_ada.png",
        url: "assets/audio/masih_ada.mp3"
    },
    {
        title: "Misery Business",
        artist: "Paramore",
        cover: "assets/images/misery_business.jpg",
        url: "assets/audio/misery_business.mp3"
    },
    {
        title: "Monster",
        artist: "Paramore",
        cover: "assets/images/monster.jpg",
        url: "assets/audio/monster.mp3"
    },
    {
        title: "Ruang Rindu",
        artist: "Letto",
        cover: "assets/images/ruang_rindu.png",
        url: "assets/audio/ruang_rindu.mp3"
    },
    {
        title: "Satu Satu",
        artist: "Idgitaf",
        cover: "assets/images/satu_satu.png",
        url: "assets/audio/satu_satu.mp3"
    },
    {
        title: "Sebelum Cahaya",
        artist: "Letto",
        cover: "assets/images/sebelum_cahaya.png",
        url: "assets/audio/sebelum_cahaya.mp3"
    },
    {
        title: "Sedia Aku Sebelum Hujan",
        artist: "Idgitaf",
        cover: "assets/images/sedia_aku_sebelum_hujan.png",
        url: "assets/audio/sedia_aku_sebelum_hujan.mp3"
    },
    {
        title: "Semakin Ku Kejar Semakin Kau Jauh",
        artist: "Five Minutes",
        cover: "assets/images/semakin_ku_kejar_semakin_kau_jauh.png",
        url: "assets/audio/semakin_ku_kejar_semakin_kau_jauh.mp3"
    },
    {
        title: "Serana",
        artist: "For Revenge",
        cover: "assets/images/serana.png",
        url: "assets/audio/serana.mp3"
    },
    {
        title: "Still Into You",
        artist: "Paramore",
        cover: "assets/images/still_into_you.jpg",
        url: "assets/audio/still_into_you.mp3"
    },
    {
        title: "Supernatural",
        artist: "Ariana Grande",
        cover: "assets/images/supernatural.png",
        url: "assets/audio/supernatural.mp3"
    },
    {
        title: "Surga Cinta",
        artist: "Ada Band",
        cover: "assets/images/surga_cinta.png",
        url: "assets/audio/surga_cinta.mp3"
    },
    {
        title: "Yang Terbaik Bagimu",
        artist: "Ada Band",
        cover: "assets/images/yang_terbaik_bagimu.png",
        url: "assets/audio/yang_terbaik_bagimu.mp3"
    }
];

const TYPING_WORDS = [
    "I enjoy tweaking my desktop appearance, writing automation scripts, and exploring web technologies."
];

// Setup Info Dasar Halaman
document.getElementById('user-avatar').src = `https://github.com/${GITHUB_USERNAME}.png`;
document.getElementById('profile-username').innerText = `@${GITHUB_USERNAME}`;

// ==========================================
// 1. MUSIC PLAYER & PLAYLIST LOGIC
// ==========================================
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playlistBtn = document.getElementById('playlist-btn');
const playIcon = document.getElementById('play-icon');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const audioTitle = document.getElementById('audio-title');
const audioArtist = document.getElementById('audio-artist');
const albumArt = document.getElementById('album-art');
const playlistContainer = document.getElementById('playlist-container');

let currentTrackIndex = 0;

function renderPlaylist() {
    playlistContainer.innerHTML = '';
    PLAYLIST.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
        item.innerHTML = `
            <div class="playlist-item-info">
                <span class="playlist-item-title">${track.title}</span>
                <span class="playlist-item-artist">${track.artist}</span>
            </div>
            ${index === currentTrackIndex ? '<i class="fas fa-volume-high" style="font-size: 0.75rem; color: var(--accent);"></i>' : ''}
        `;
        item.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            playTrack();
        });
        playlistContainer.appendChild(item);
    });
}

function loadTrack(index) {
    const track = PLAYLIST[index];
    audioTitle.innerText = track.title;
    audioArtist.innerText = track.artist;
    albumArt.src = track.cover;
    audioPlayer.src = track.url;
    progressBar.style.width = '0%';
    renderPlaylist();
}

function playTrack() {
    audioPlayer.play().then(() => {
        playIcon.className = 'fas fa-pause';
        albumArt.classList.add('playing');
    }).catch(() => {});
}

function pauseTrack() {
    audioPlayer.pause();
    playIcon.className = 'fas fa-play';
    albumArt.classList.remove('playing');
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

// Inisialisasi
loadTrack(currentTrackIndex);

// Event Listeners Kontrol Musik
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

playlistBtn.addEventListener('click', () => {
    playlistContainer.classList.toggle('active');
});

audioPlayer.addEventListener('ended', nextTrack);

audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    if (duration) {
        audioPlayer.currentTime = (clickX / width) * duration;
    }
});

// ==========================================
// 2. TYPING EFFECT & AUTOPLAY HANDLER
// ==========================================
const typingText = document.getElementById('typing-text');
let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
    const currentWord = TYPING_WORDS[wordIndex];
    typingText.textContent = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    let speed = isDeleting ? 30 : 60;
    if (!isDeleting && charIndex === currentWord.length) { speed = 5000; isDeleting = true; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % TYPING_WORDS.length; speed = 500; }
    setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('year').innerText = new Date().getFullYear();
	
    setTimeout(typeEffect, 1000);

    let playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            playIcon.className = 'fas fa-pause';
            albumArt.classList.add('playing');
        }).catch(() => {
            const startMusicOnFirstTouch = () => {
                playTrack();
                document.removeEventListener('click', startMusicOnFirstTouch);
                document.removeEventListener('touchstart', startMusicOnFirstTouch);
            };
            document.addEventListener('click', startMusicOnFirstTouch);
            document.addEventListener('touchstart', startMusicOnFirstTouch);
        });
    }
});

// ==========================================
// 3. GITHUB API REPOSITORIES FETCH
// ==========================================
const repoBtn = document.getElementById('repo-btn');
const repoContainer = document.getElementById('repo-container');
const repoArrow = document.getElementById('repo-arrow');
let isFetched = false;

repoBtn.addEventListener('click', async () => {
    repoContainer.classList.toggle('active');
    repoArrow.style.transform = repoContainer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';

    if (!isFetched) {
        repoContainer.innerHTML = '<div class="loading-text"><i class="fas fa-spinner fa-spin"></i> Loading repository...</div>';
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`);
            if (!response.ok) throw new Error();
            const repos = await response.json();
            repoContainer.innerHTML = '';
            if (repos.length === 0) { repoContainer.innerHTML = '<div class="loading-text">There are no public repositories.</div>'; return; }
            repos.forEach(repo => {
                const repoItem = document.createElement('a');
                repoItem.href = repo.html_url; repoItem.target = '_blank'; repoItem.className = 'repo-item';
                repoItem.innerHTML = `
                    <div class="repo-header"><span class="repo-name">${repo.name}</span><span class="repo-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span></div>
                    <p class="repo-desc">${repo.description || 'No description.'}</p>
                `;
                repoContainer.appendChild(repoItem);
            });
            isFetched = true;
        } catch { repoContainer.innerHTML = '<div class="loading-text" style="color: #ef4444;">Failed to load the repository.</div>'; }
    }
});
