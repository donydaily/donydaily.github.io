// ==========================================
// 🛠️ PENGATURAN USERNAME & PLAYLIST
// ==========================================
const GITHUB_USERNAME = 'donydaily';

const TYPING_WORDS = [
    "I enjoy tweaking my desktop appearance, writing automation scripts, and exploring web technologies."
];

// ==========================================
// MULTIPLE TRACKS MUSIC PLAYER LOGIC
// ==========================================
const playlist = [
    {
        title: "2002",
        artist: "Anne Marie",
        cover: "assets/images/2002.png",
        src: "assets/audio/2002.mp3"
    },
    {
        title: "All I Wanted",
        artist: "Paramore",
        cover: "assets/images/all_i_wanted.jpg",
        src: "assets/audio/all_i_wanted.mp3" 
    },
    {
        title: "APT.",
        artist: "ROSÉ & Bruno Mars",
        cover: "assets/images/apt..png",
        src: "assets/audio/apt..mp3"
    },
    {
        title: "Be Alone",
        artist: "Paramore",
        cover: "assets/images/be_alone.jpg",
        src: "assets/audio/be_alone.mp3"
    },
    {
        title: "Bite Me",
        artist: "Avril Lavigne",
        cover: "assets/images/bite_me.png",
        src: "assets/audio/bite_me.mp3"
    },
    {
        title: "Brick by Boring Brick",
        artist: "Paramore",
        cover: "assets/images/brick_by_boring_brick.jpg",
        src: "assets/audio/brick_by_boring_brick.mp3"
    },
    {
        title: "Caught In The Middle",
        artist: "Paramore",
        cover: "assets/images/caught_in_the_middle.jpg",
        src: "assets/audio/caught_in_the_middle.mp3"
    },
    {
        title: "Decode",
        artist: "Paramore",
        cover: "assets/images/decode.jpg",
        src: "assets/audio/decode.mp3"
    },
    {
        title: "Fake Happy",
        artist: "Paramore",
        cover: "assets/images/fake_happy.jpg",
        src: "assets/audio/fake_happy.mp3"
    },
    {
        title: "Galau",
        artist: "Five Minutes",
        cover: "assets/images/galau.png",
        src: "assets/audio/galau.mp3"
    },
    {
        title: "Hallelujah",
        artist: "Paramore",
        cover: "assets/images/hallelujah.jpg",
        src: "assets/audio/hallelujah.mp3"
    },
    {
        title: "Happier",
        artist: "Olivia Rodrigo",
        cover: "assets/images/happier.png",
        src: "assets/audio/happier.mp3"
    },
    {
        title: "Head Above Water",
        artist: "Avril Lavigne",
        cover: "assets/images/head_above_water.png",
        src: "assets/audio/head_above_water.mp3"
    },
    {
        title: "Kehadiranmu",
        artist: "Vagetoz",
        cover: "assets/images/kehadiranmu.png",
        src: "assets/audio/kehadiranmu.mp3"
    },
    {
        title: "Komang",
        artist: "Raim Laode",
        cover: "assets/images/komang.png",
        src: "assets/audio/komang.mp3"
    },
    {
        title: "Main Hati",
        artist: "Andra And The BackBone",
        cover: "assets/images/main_hati.png",
        src: "assets/audio/main_hati.mp3"
    },
    {
        title: "Manusia Bodoh",
        artist: "Ada Band",
        cover: "assets/images/manusia_bodoh.png",
        src: "assets/audio/manusia_bodoh.mp3"
    },
    {
        title: "Masih Ada",
        artist: "Ello",
        cover: "assets/images/masih_ada.png",
        src: "assets/audio/masih_ada.mp3"
    },
    {
        title: "Misery Business",
        artist: "Paramore",
        cover: "assets/images/misery_business.jpg",
        src: "assets/audio/misery_business.mp3"
    },
    {
        title: "Monster",
        artist: "Paramore",
        cover: "assets/images/monster.jpg",
        src: "assets/audio/monster.mp3"
    },
    {
        title: "Ruang Rindu",
        artist: "Letto",
        cover: "assets/images/ruang_rindu.png",
        src: "assets/audio/ruang_rindu.mp3"
    },
    {
        title: "Satu Satu",
        artist: "Idgitaf",
        cover: "assets/images/satu_satu.png",
        src: "assets/audio/satu_satu.mp3"
    },
    {
        title: "Sebelum Cahaya",
        artist: "Letto",
        cover: "assets/images/sebelum_cahaya.png",
        src: "assets/audio/sebelum_cahaya.mp3"
    },
    {
        title: "Sedia Aku Sebelum Hujan",
        artist: "Idgitaf",
        cover: "assets/images/sedia_aku_sebelum_hujan.png",
        src: "assets/audio/sedia_aku_sebelum_hujan.mp3"
    },
    {
        title: "Semakin Ku Kejar Semakin Kau Jauh",
        artist: "Five Minutes",
        cover: "assets/images/semakin_ku_kejar_semakin_kau_jauh.png",
        src: "assets/audio/semakin_ku_kejar_semakin_kau_jauh.mp3"
    },
    {
        title: "Serana",
        artist: "For Revenge",
        cover: "assets/images/serana.png",
        src: "assets/audio/serana.mp3"
    },
    {
        title: "Still Into You",
        artist: "Paramore",
        cover: "assets/images/still_into_you.jpg",
        src: "assets/audio/still_into_you.mp3"
    },
    {
        title: "Supernatural",
        artist: "Ariana Grande",
        cover: "assets/images/supernatural.png",
        src: "assets/audio/supernatural.mp3"
    },
    {
        title: "Surga Cinta",
        artist: "Ada Band",
        cover: "assets/images/surga_cinta.png",
        src: "assets/audio/surga_cinta.mp3"
    },
    {
        title: "Yang Terbaik Bagimu",
        artist: "Ada Band",
        cover: "assets/images/yang_terbaik_bagimu.png",
        src: "assets/audio/yang_terbaik_bagimu.mp3"
    }
];

let currentTrackIndex = 0;
const audio = new Audio(playlist[currentTrackIndex].src);
let isMusicPlaying = false;

const mainPlayBtn = document.getElementById('main-play-btn');
const mainPlayIcon = document.getElementById('main-play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const fullCover = document.getElementById('full-player-cover');
const fullTitle = document.getElementById('full-track-title');
const fullArtist = document.getElementById('full-track-artist');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');

// Elemen Playlist
const playlistToggleBtn = document.getElementById('playlist-toggle-btn');
const playlistContainer = document.getElementById('playlist-container');
const playlistItemsUl = document.getElementById('playlist-items');

// Render Daftar Lagu ke HTML
function renderPlaylist() {
    if (!playlistItemsUl) return;
    playlistItemsUl.innerHTML = '';

    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
        li.innerHTML = `
            <img src="${track.cover}" alt="Cover">
            <div class="playlist-item-info">
                <span class="playlist-item-title">${track.title}</span>
                <span class="playlist-item-artist">${track.artist}</span>
            </div>
        `;

        li.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            playTrack();
        });

        playlistItemsUl.appendChild(li);
    });
}

// Toggle Buka/Tutup Playlist
if (playlistToggleBtn && playlistContainer) {
    playlistToggleBtn.addEventListener('click', () => {
        const isHidden = playlistContainer.style.display === 'none';
        playlistContainer.style.display = isHidden ? 'block' : 'none';
        playlistToggleBtn.classList.toggle('active', isHidden);
    });
}

// Memuat Lagu Terpilih
function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.src;
    if (fullTitle) fullTitle.innerText = track.title;
    if (fullArtist) fullArtist.innerText = track.artist;
    if (fullCover) fullCover.src = track.cover;
    renderPlaylist(); // Update status item aktif
}

function playTrack() {
    audio.play().then(() => {
        isMusicPlaying = true;
        if (mainPlayIcon) mainPlayIcon.className = 'fas fa-pause';
        if (fullCover) fullCover.classList.add('playing');
    }).catch(err => console.log("Gagal memutar audio:", err));
}

function pauseTrack() {
    audio.pause();
    isMusicPlaying = false;
    if (mainPlayIcon) mainPlayIcon.className = 'fas fa-play';
    if (fullCover) fullCover.classList.remove('playing');
}

// Event Listeners Kontrol Playback
if (mainPlayBtn) {
    mainPlayBtn.addEventListener('click', () => {
        isMusicPlaying ? pauseTrack() : playTrack();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });
}

// Update Progress Bar
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        if (progressBar) progressBar.value = progressPercent;

        const curMins = Math.floor(audio.currentTime / 60);
        const curSecs = Math.floor(audio.currentTime % 60);
        const durMins = Math.floor(audio.duration / 60);
        const durSecs = Math.floor(audio.duration % 60);

        if (currentTimeEl) currentTimeEl.innerText = `${curMins}:${curSecs < 10 ? '0' : ''}${curSecs}`;
        if (totalDurationEl) totalDurationEl.innerText = `${durMins}:${durSecs < 10 ? '0' : ''}${durSecs}`;
    }
});

if (progressBar) {
    progressBar.addEventListener('input', () => {
        if (audio.duration) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });
}

// Otomatis Pindah ke Lagu Berikutnya Saat Habis
audio.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

// Inisialisasi awal
loadTrack(currentTrackIndex);

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

// // ==========================================
// 3. GITHUB API REPOSITORIES FETCH & SEARCH
// ==========================================
const repoBtn = document.getElementById('repo-btn');
const repoContainer = document.getElementById('repo-container');
const repoArrow = document.getElementById('repo-arrow');
const searchBoxWrapper = document.getElementById('search-box-wrapper');
const repoSearch = document.getElementById('repo-search');
const repoList = document.getElementById('repo-list');

let isFetched = false;
let fetchedRepos = []; // Menyimpan data repositori asli dari API

// Fungsi Render List Repositori
function renderRepos(repos) {
    repoList.innerHTML = '';
    if (repos.length === 0) {
        repoList.innerHTML = '<div class="loading-text">No repository found.</div>';
        return;
    }
    repos.forEach(repo => {
        const repoItem = document.createElement('a');
        repoItem.href = repo.html_url;
        repoItem.target = '_blank';
        repoItem.className = 'repo-item';
        repoItem.innerHTML = `
            <div class="repo-header">
                <span class="repo-name">${repo.name}</span>
                <span class="repo-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
            </div>
            <p class="repo-desc">${repo.description || 'No description.'}</p>
        `;
        repoList.appendChild(repoItem);
    });
}

// Fetch Repositori saat Dropdown Diklik
repoBtn.addEventListener('click', async () => {
    repoContainer.classList.toggle('active');
    repoArrow.style.transform = repoContainer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';

    if (!isFetched) {
        repoList.innerHTML = '<div class="loading-text"><i class="fas fa-spinner fa-spin"></i> Loading repository...</div>';
        try {
            const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`);
            if (!response.ok) throw new Error();
            fetchedRepos = await response.json();
            
            if (fetchedRepos.length === 0) {
                repoList.innerHTML = '<div class="loading-text">No public repositories.</div>';
            } else {
                searchBoxWrapper.style.display = 'flex'; // Tampilkan search bar
                renderRepos(fetchedRepos);
            }
            isFetched = true;
        } catch {
            repoList.innerHTML = '<div class="loading-text" style="color: #ef4444;">Failed to load repository.</div>';
        }
    }
});

// Real-Time Filter / Search Logic
repoSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredRepos = fetchedRepos.filter(repo => 
        repo.name.toLowerCase().includes(query) || 
        (repo.description && repo.description.toLowerCase().includes(query))
    );
    renderRepos(filteredRepos);
});

// ==========================================
// 4. LIVE CLOCK LOGIC
// ==========================================
function updateClock() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Jakarta', // Zona waktu WIB
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        clockElement.innerText = `${timeString} WIB`;
    }
}

// Jalankan fungsi jam setiap 1 detik
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali di awal agar tidak ada jeda detik pertama

// ==========================================
// 5. PAGE SWITCHING LOGIC (SPA)
// ==========================================
const navItems = document.querySelectorAll('.nav-item[data-target]');
const pageSections = document.querySelectorAll('.page-section');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('data-target');

        // Ganti status tombol navbar
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Tampilkan halaman sesuai target
        pageSections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// ==========================================
// 6. SCRATCHPAD / TEXT EDITOR LOGIC
// ==========================================
const editorTextarea = document.getElementById('editor-textarea');
const copyEditorBtn = document.getElementById('copy-editor-btn');

if (editorTextarea) {
    // Muat catatan yang pernah diketik dari LocalStorage
    editorTextarea.value = localStorage.getItem('scratchpad_note') || '';

    // Otomatis simpan setiap kali ada perubahan teks
    editorTextarea.addEventListener('input', () => {
        localStorage.setItem('scratchpad_note', editorTextarea.value);
    });
}

if (copyEditorBtn && editorTextarea) {
    // Salin teks ke clipboard
    copyEditorBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(editorTextarea.value).then(() => {
            const originalHTML = copyEditorBtn.innerHTML;
            copyEditorBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyEditorBtn.innerHTML = originalHTML;
            }, 2000);
        });
    });
}

// ==========================================
// 7. MECHANICAL KEYBOARD SOUND (ALWAYS ACTIVE)
// ==========================================
let audioCtx = null;

// Fungsi Sintesis Suara Klik Keyboard Mekanikal
function playKeyClick() {
    // Inisialisasi AudioContext saat interaksi pertama pengunjung
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // 1. Buat Noise Buffer (Klik Tactile)
    const bufferSize = audioCtx.sampleRate * 0.012; // Durasi 12ms
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    // 2. Filter Frekuensi (Karakter Switch Mekanikal)
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1700 + Math.random() * 300; // Pitch acak
    filter.Q.value = 3.5;

    // 3. Amplifier Envelope (Volume & Decay)
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.50, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.012);

    // Hubungkan Audio Nodes
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
}

// Pasang Efek Suara pada Semua Tombol Navigasi & Sosmed
document.querySelectorAll('.nav-item, .btn-link, .social-icon, .editor-btn').forEach(element => {
    element.addEventListener('click', () => {
        playKeyClick();
    });
});

// Pasang Efek Suara Saat Mengetik di Text Editor
const editorArea = document.getElementById('editor-textarea');
if (editorArea) {
    editorArea.addEventListener('keydown', (e) => {
        if (!['Shift', 'Control', 'Alt', 'Meta', 'CapsLock'].includes(e.key)) {
            playKeyClick();
        }
    });
}

// ==========================================
// 8. TOUCH SWIPE NAVIGATION (SWIPE RIGHT / LEFT)
// ==========================================
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

// Daftar ID halaman sesuai urutan tab navbar
const pageOrder = ['page-home', 'page-editor', 'page-music'];
const minSwipeDistance = 50; // Jarak minimal usapan jari (piksel)

// Ambil indeks halaman yang sedang aktif saat ini
function getCurrentPageIndex() {
    const activeSection = document.querySelector('.page-section[style*="display: block"], .page-section.active');
    if (!activeSection) return 0;
    const index = pageOrder.indexOf(activeSection.id);
    return index !== -1 ? index : 0;
}

// Fungsi pindah ke halaman berdasarkan indeks
function switchPageByIndex(index) {
    if (index >= 0 && index < pageOrder.length) {
        const targetId = pageOrder[index];
        const targetNavBtn = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (targetNavBtn) {
            targetNavBtn.click(); // Memicu klik tombol navbar (otomatis memutar suara klik jika aktif)
        }
    }
}

// Tangkap posisi awal sentuhan jari
document.addEventListener('touchstart', (e) => {
    // Abaikan gestur jika pengguna sedang menggeser slider lagu atau mengetik di editor
    if (e.target.closest('#progress-bar') || e.target.closest('#editor-textarea')) {
        touchStartX = 0;
        touchStartY = 0;
        return;
    }
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

// Tangkap posisi akhir saat sentuhan dilepas
document.addEventListener('touchend', (e) => {
    if (touchStartX === 0) return; // Jika sentuhan diawali dari slider/editor, abaikan

    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    handleSwipe();
}, { passive: true });

// Logika penentuan arah swipe
function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Pastikan gerakan dominan horizontal (bukan scroll halaman ke atas/bawah)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) >= minSwipeDistance) {
        const currentIndex = getCurrentPageIndex();

        if (deltaX < 0) {
            // Swipe ke Kiri 👈 -> Pindah ke Tab Selanjutnya (Home -> Editor -> Music)
            switchPageByIndex(currentIndex + 1);
        } else {
            // Swipe ke Kanan 👉 -> Pindah ke Tab Sebelumnya (Music -> Editor -> Home)
            switchPageByIndex(currentIndex - 1);
        }
    }

    // Reset koordinat
    touchStartX = 0;
    touchStartY = 0;
}

