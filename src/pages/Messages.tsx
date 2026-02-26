import { useState } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  name: string;
  text: string;
  timestamp: Date;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!name.trim() || !text.trim()) return;
    const msg: Message = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [msg, ...prev]);
    setText("");
  };

  return (
    <div className="page-container max-w-2xl mx-auto">
      <div className="text-center mb-10 fade-in-up">
        <h1 className="page-title">Birthday Messages 💌</h1>
        <p className="page-subtitle">Leave a message for Samara!</p>
      </div>

      {/* Input form */}
      <div className="soft-card mb-8 fade-in-up stagger-1">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-none outline-none mb-3 text-sm"
        />
        <div className="relative">
          <textarea
            placeholder="Write a birthday message..."
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, 200))}
            maxLength={200}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border-none outline-none resize-none text-sm"
          />
          <span className="absolute bottom-3 right-3 text-xs text-muted-foreground">
            {text.length}/200
          </span>
        </div>
        <button
          onClick={handleSend}
          disabled={!name.trim() || !text.trim()}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-glow disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send size={16} /> Send Message
        </button>
      </div>

      {/* Message counter */}
      <p className="text-sm text-muted-foreground mb-4 fade-in-up stagger-2">
        {messages.length} message{messages.length !== 1 ? "s" : ""}
      </p>

      {/* Messages list */}
      <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
        {messages.length === 0 ? (
          <div className="soft-card text-center py-12 fade-in-up stagger-3">
            <p className="text-2xl mb-2">💌</p>
            <p className="text-muted-foreground">No messages yet — be the first!</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="soft-card fade-in-up">
              <p className="font-semibold text-foreground">{msg.name}</p>
              <p className="text-foreground/80 mt-1">{msg.text}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          ))
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8 fade-in-up">
        💡 Messages are stored in this session. Connect to Lovable Cloud for persistent storage!
      </p>
    </div>
  );
};

export default Messages;
