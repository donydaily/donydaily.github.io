<?php
$tracksJson = file_get_contents('tracks.json');
$tracks = json_decode($tracksJson, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>DONYDAILY</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"/>
  <style>
    body {
      margin: 0;
      font-family: 'Fira Code', monospace;
      overflow: hidden;
      background: #000;
      color: #fff;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    .album-art {
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 250px;
      height: 250px;
      border-radius: 50%;
      object-fit: cover;
      display: none;
      border: 2px solid;
      animation: spin 20s linear infinite;
      z-index: 2;
    }
    @keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
    .info {
      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 2;
    }
    .playlist {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.5);
      padding: 10px;
      max-height: 500px;
      overflow-y: auto;
      z-index: 2;
      font-size: 0.9rem;
    }
    .playlist div {
      margin: 5px 0;
      cursor: pointer;
    }
    .playlist .active {
      color: var(--accent-color);
      font-weight: bold;
    }
    :root {
      --accent-color: #ff1493;
    }
    @media (prefers-color-scheme: light) {
      body { background: #fff; color: #000; }
      .album-art { border-color: #000; }
    }
    @media (prefers-color-scheme: dark) {
      body { background: #000; color: #fff; }
      .album-art { border-color: #fff; }
    }
  </style>
</head>
<body>
  <div id="audioContainer"></div>
  <img id="albumArt" class="album-art" src="" alt="Album Art"/>
  <div class="info">
    <h2 id="trackTitle">Track Title</h2>
    <p id="trackArtist">Track Artist</p>
  </div>
  <div class="playlist" id="playlist"></div>
  <canvas id="visualizer"></canvas>

  <script>
    const trackData = <?php echo json_encode($tracks, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>;

    document.addEventListener('DOMContentLoaded', () => {
      const canvas = document.getElementById('visualizer');
      const ctx = canvas.getContext('2d');
      const albumArt = document.getElementById('albumArt');
      const titleEl = document.getElementById('trackTitle');
      const artistEl = document.getElementById('trackArtist');
      const playlist = document.getElementById('playlist');

      let currentIndex = 0;
      let audio = new Audio();
      let sourceNode = null;

      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;

      function loadTrack(index) {
        if (sourceNode) sourceNode.disconnect();
        if (!audio.paused) audio.pause();

        currentIndex = index;
        audio.src = trackData[index].src;
        audio.load();
        sourceNode = audioContext.createMediaElementSource(audio);
        sourceNode.connect(analyser);
        analyser.connect(audioContext.destination);

        albumArt.src = trackData[index].art;
        albumArt.style.display = 'block';
        titleEl.textContent = trackData[index].title;
        artistEl.textContent = trackData[index].artist;

        updatePlaylist();
        audioContext.resume();
        audio.play();
      }

      function updatePlaylist() {
        playlist.innerHTML = '';
        trackData.forEach((track, i) => {
          const div = document.createElement('div');
          div.textContent = `${track.title} - ${track.artist}`;
          if (i === currentIndex) div.classList.add('active');
          div.addEventListener('click', () => {
            loadTrack(i);
          });
          playlist.appendChild(div);
        });
      }

      function drawVisualizer() {
        requestAnimationFrame(drawVisualizer);
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / bufferLength) * 1.5;
        const radius = barWidth / 2;
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');

        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i] / 2;
          ctx.fillStyle = accentColor;
          ctx.beginPath();
          ctx.moveTo(x + radius, canvas.height - barHeight);
          ctx.arc(x + radius, canvas.height - barHeight - radius, radius, Math.PI, 2 * Math.PI);
          ctx.lineTo(x + barWidth, canvas.height);
          ctx.lineTo(x, canvas.height);
          ctx.closePath();
          ctx.fill();
          x += barWidth + 1;
        }
      }

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      loadTrack(currentIndex);
      drawVisualizer();

      audio.addEventListener('ended', () => {
        currentIndex = (currentIndex + 1) % trackData.length;
        loadTrack(currentIndex);
    });
  </script>
</body>
</html>
