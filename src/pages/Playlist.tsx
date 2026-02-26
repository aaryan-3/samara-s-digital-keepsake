import { ExternalLink } from "lucide-react";

const songs = [
  { name: "Mexico", artist: "Karan Aujla", url: "https://open.spotify.com/track/4ZMm3bmCaFKv0jd0axAEDi" },
  { name: "Bargad", artist: "Arpit Bala", url: "https://open.spotify.com/track/6Z8R0FhIGFqz4gE9Yj5tlf" },
  { name: "Ucha Lamb Kad", artist: "Anand Raj Anand", url: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe" },
  { name: "Over The Top", artist: "Drake", url: "https://open.spotify.com/track/4fRBGLBMQIpHOMPfOQzFOx" },
  { name: "Sirra", artist: "Guru Randhawa", url: "https://open.spotify.com/track/3yfZiFbRJhqWil0ogyMBMi" },
  { name: "SOMETHING ABOUT YOU", artist: "Drake", url: "https://open.spotify.com/track/5QFBjGJMQqGMXWog9p4nRY" },
  { name: "Hook Raja Ji", artist: "Arvind Akela Kallu Ji", url: "https://open.spotify.com/track/3Z0oQ8oGnGCCPYVNsWbU7z" },
  { name: "Hypnotize", artist: "The Notorious B.I.G.", url: "https://open.spotify.com/track/7KwZNVEaqikRSBbhqDHJ91" },
];

const pastelColors = [
  "hsl(350 80% 92%)", "hsl(30 60% 92%)", "hsl(200 50% 92%)", "hsl(150 40% 92%)",
  "hsl(280 40% 92%)", "hsl(340 50% 92%)", "hsl(40 60% 92%)", "hsl(170 40% 92%)",
];

const Playlist = () => {
  return (
    <div className="page-container max-w-4xl mx-auto">
      <div className="text-center mb-12 fade-in-up">
        <h1 className="page-title">Songs That Remind Me Of You 🎵</h1>
        <p className="page-subtitle">Every song tells a story</p>
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
            <div
              className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl border-2 border-dashed border-primary/20"
              style={{ backgroundColor: pastelColors[i] }}
            >
              📷
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground truncate">{song.name}</h3>
              <p className="text-sm text-muted-foreground">{song.artist}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
