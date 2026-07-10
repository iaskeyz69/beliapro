function getAllowedHosts(): Set<string> {
  const hosts = new Set([
    'beliapro.com',
    'www.beliapro.com',
    'beliapro.vercel.app',
    'localhost:4321',
    'localhost:3000',
  ]);

  for (const envVar of [
    process.env.VERCEL_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ]) {
    if (envVar) hosts.add(envVar.replace(/^https?:\/\//, ''));
  }

  return hosts;
}

function isAllowedHost(host: string, allowedHosts: Set<string>): boolean {
  if (allowedHosts.has(host)) return true;
  if (host.endsWith('.vercel.app') && host.includes('beliapro')) return true;
  return false;
}

function isAllowedRequest(req: {
  headers: Record<string, string | string[] | undefined>;
}): boolean {
  const allowedHosts = getAllowedHosts();
  const hostsToCheck: string[] = [];

  for (const header of [req.headers.origin, req.headers.referer, req.headers.host]) {
    if (typeof header !== 'string') continue;
    try {
      hostsToCheck.push(new URL(header).host);
    } catch {
      hostsToCheck.push(header.replace(/^https?:\/\//, ''));
    }
  }

  return hostsToCheck.some((host) => isAllowedHost(host, allowedHosts));
}

export default async function handler(
  req: {
    method?: string;
    headers: Record<string, string | string[] | undefined>;
    body?: {
      name?: string;
      email?: string;
      inquiry?: string;
      message?: string;
      botcheck?: boolean | string;
    };
  },
  res: {
    status: (code: number) => { json: (data: unknown) => void };
  },
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (!isAllowedRequest(req)) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ success: false, message: 'Form not configured' });
  }

  const body = req.body ?? {};

  if (body.botcheck) {
    return res.status(200).json({ success: true, message: 'Message sent' });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const inquiry = body.inquiry?.trim() || 'General Enquiry';

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `BELIAPRO Enquiry: ${inquiry}`,
        from_name: name,
      }),
    });

    const result = await response.json();
    return res.status(response.ok ? 200 : 400).json(result);
  } catch {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
