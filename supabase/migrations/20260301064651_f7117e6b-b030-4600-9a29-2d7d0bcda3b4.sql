-- Drop restrictive policies and recreate as permissive
DROP POLICY IF EXISTS "Anyone can read messages" ON public.messages;
DROP POLICY IF EXISTS "Anyone can send a message" ON public.messages;

CREATE POLICY "Anyone can read messages" ON public.messages FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can send a message" ON public.messages FOR INSERT TO anon, authenticated WITH CHECK (true);