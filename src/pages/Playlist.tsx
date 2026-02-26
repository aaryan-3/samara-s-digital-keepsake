import { Music, ExternalLink } from "lucide-react";

const songs = [
  { name: "Mexico", artist: "Karan Aujla", caption: "Vibes on another level", url: "https://open.spotify.com/track/4ZMm3bmCaFKv0jd0axAEDi", cover: "https://i.scdn.co/image/ab67616d00001e02c5545f29bba2a3542bc0a63f" },
  { name: "Bargad", artist: "Arpit Bala", caption: "Deep cuts only", url: "https://open.spotify.com/track/6Z8R0FhIGFqz4gE9Yj5tlf", cover: "https://i.scdn.co/image/ab67616d00001e02e1a37e23a3231824a7c3d8c7" },
  { name: "Ucha Lamb Kad", artist: "Anand Raj Anand", caption: "Classic energy", url: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe", cover: "https://i.scdn.co/image/ab67616d00001e020e40ac241ff86273692f18b2" },
  { name: "Over The Top", artist: "Drake", caption: "Always on top", url: "https://open.spotify.com/track/4fRBGLBMQIpHOMPfOQzFOx", cover: "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc22d" },
  { name: "Sirra", artist: "Guru Randhawa", caption: "Feel good anthem", url: "https://open.spotify.com/track/3yfZiFbRJhqWil0ogyMBMi", cover: "https://i.scdn.co/image/ab67616d00001e025f3ede47091b1bc76e8f18e5" },
  { name: "SOMETHING ABOUT YOU", artist: "Drake", caption: "You know the vibe", url: "https://open.spotify.com/track/5QFBjGJMQqGMXWog9p4nRY", cover: "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc22d" },
  { name: "Hook Raja Ji", artist: "Arvind Akela Kallu Ji", caption: "Absolute banger", url: "https://open.spotify.com/track/3Z0oQ8oGnGCCPYVNsWbU7z", cover: "https://i.scdn.co/image/ab67616d00001e02b5a8e27d4e6c1d4e6f5c8d3a" },
  { name: "Hypnotize", artist: "The Notorious B.I.G.", caption: "Legend status", url: "https://open.spotify.com/track/7KwZNVEaqikRSBbhqDHJ91", cover: "https://i.scdn.co/image/ab67616d00001e020da89f5b8bf766e42ceef786" },
];

const Playlist = () => {
  return (
    <div className="page-container max-w-4xl mx-auto">
      <div className="text-center mb-12 fade-in-up">
        <h1 className="page-title">Songs That Remind Me Of You 🎵</h1>
        <p className="page-subtitle">Every song tells a story</p>
      </div>

      {/* Main Spotify embed */}
      <div className="fade-in-up stagger-1 mb-12">
        <div className="soft-card overflow-hidden p-0">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Featured song"
          />
        </div>
      </div>

      {/* Song list */}
      <div className="grid gap-4 md:grid-cols-2">
        {songs.map((song, i) => (
          <a
            key={i}
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`fade-in-up stagger-${Math.min(i + 1, 8)} soft-card flex items-center gap-4 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 no-underline cursor-pointer group`}
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
              <img
                src={song.cover}
                alt={`${song.name} cover`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.classList.add("bg-primary/10", "flex", "items-center", "justify-center");
                  const icon = document.createElement("span");
                  icon.textContent = "🎵";
                  icon.className = "text-xl";
                  e.currentTarget.parentElement!.appendChild(icon);
                }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground truncate">{song.name}</h3>
              <p className="text-sm text-muted-foreground">{song.artist}</p>
              <p className="text-xs text-accent mt-0.5 italic">{song.caption}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
