// Serverless function stub for Contact Form
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const data = req.body;

  // 1. Validate data (zod)
  // 2. Save to Supabase
  // 3. Send email via SendGrid

  /* 
    Example Supabase insert:
    const { error } = await supabase.from('leads').insert([data]);
  */

  // Mock Success
  return res.status(200).json({ success: true, message: 'Received' });
}
