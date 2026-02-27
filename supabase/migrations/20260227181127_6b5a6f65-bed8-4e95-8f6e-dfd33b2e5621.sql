-- Create messages table for birthday messages
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  text TEXT NOT NULL CHECK (char_length(text) <= 200),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can read messages" ON public.messages FOR SELECT USING (true);

-- Public insert access
CREATE POLICY "Anyone can send a message" ON public.messages FOR INSERT WITH CHECK (true);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;