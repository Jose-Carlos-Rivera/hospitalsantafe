const GITHUB_API = 'https://api.github.com';

export async function commitFile(
  filePath: string,
  content: string,
  message: string
): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER ?? 'hospitalsantafe';
  const repo = process.env.GITHUB_REPO ?? 'hospitalsantafe';
  const branch = process.env.GITHUB_BRANCH ?? 'main';

  if (!token) {
    throw new Error('GITHUB_TOKEN no está configurado. Configúralo en las variables de entorno de Vercel.');
  }

  // 1. Get current file SHA (needed to update existing files)
  const getRes = await fetch(
    `${GITHUB_API}/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  let sha: string | undefined;
  if (getRes.ok) {
    const data = await getRes.json();
    sha = data.sha;
  } else if (getRes.status !== 404) {
    const err = await getRes.text();
    throw new Error(`Error al leer archivo en GitHub: ${getRes.status} — ${err}`);
  }

  // 2. Ensure trailing newline (Git convention) and base64-encode
  const finalContent = content.endsWith('\n') ? content : content + '\n';
  const encoded = Buffer.from(finalContent, 'utf-8').toString('base64');

  // 3. Commit (create or update)
  const putRes = await fetch(
    `${GITHUB_API}/repos/${owner}/${repo}/contents/${filePath}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: encoded,
        branch,
        ...(sha ? { sha } : {}),
      }),
    }
  );

  if (!putRes.ok) {
    const err = await putRes.json().catch(() => putRes.text());
    throw new Error(`Error al hacer commit en GitHub: ${JSON.stringify(err)}`);
  }
}
