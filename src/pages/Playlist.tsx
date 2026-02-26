import { Music } from "lucide-react";

const songs = [
  { name: "Mexico", artist: "Karan Aujla", caption: "Vibes on another level" },
  { name: "Bargad", artist: "Arpit Bala", caption: "Deep cuts only" },
  { name: "Ucha Lamb Kad", artist: "Anand Raj Anand", caption: "Classic energy" },
  { name: "Over The Top", artist: "Drake", caption: "Always on top" },
  { name: "Sirra", artist: "Guru Randhawa", caption: "Feel good anthem" },
  { name: "SOMETHING ABOUT YOU", artist: "Drake", caption: "You know the vibe" },
  { name: "Hook Raja Ji", artist: "Arvind Akela Kallu Ji", caption: "Absolute banger" },
  { name: "Hypnotize", artist: "The Notorious B.I.G.", caption: "Legend status" },
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
          <div
            key={i}
            className={`fade-in-up stagger-${Math.min(i + 1, 8)} soft-card flex items-center gap-4 hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Music className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground truncate">{song.name}</h3>
              <p className="text-sm text-muted-foreground">{song.artist}</p>
              <p className="text-xs text-accent mt-0.5 italic">{song.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
