import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, 'dist')
const PORT = Number(process.env.PORT) || 3000
const HOST = process.env.HOST || '0.0.0.0'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json',
}

function resolveUnderRoot(root, requestPath) {
  let pathname = requestPath.split('?')[0] || '/'
  try {
    pathname = decodeURIComponent(pathname)
  } catch {
    return null
  }
  const rel = pathname.replace(/^\/+/, '') || 'index.html'
  const abs = path.resolve(root, rel)
  const rootResolved = path.resolve(root)
  if (!abs.startsWith(rootResolved + path.sep) && abs !== rootResolved) {
    return null
  }
  return abs
}

/** @param {import('node:http').IncomingMessage} req */
const server = http.createServer((req, res) => {
  if (!req.url || (req.method !== 'GET' && req.method !== 'HEAD')) {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Method Not Allowed')
    return
  }

  const pathnameOnly = req.url.split('?')[0] || '/'
  const basename = path.basename(pathnameOnly)
  const looksLikeStaticFile = path.extname(basename) !== ''

  let filePath = resolveUnderRoot(DIST, req.url)

  const send = (status, file, type) => {
    res.writeHead(status, {
      'Content-Type': type,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': status === 200 && path.extname(file) !== '.html' ? 'public, max-age=31536000, immutable' : 'no-cache',
    })
    if (req.method === 'HEAD') {
      res.end()
      return
    }
    fs.createReadStream(file).pipe(res)
  }

  const tryFile = (abs) => {
    try {
      const st = fs.statSync(abs)
      if (st.isFile()) return abs
      if (st.isDirectory()) {
        const idx = path.join(abs, 'index.html')
        if (fs.existsSync(idx) && fs.statSync(idx).isFile()) return idx
      }
    } catch {
      return null
    }
    return null
  }

  let found = filePath ? tryFile(filePath) : null

  if (!found && filePath && looksLikeStaticFile) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not Found')
    return
  }

  if (!found) {
    const spa = path.join(DIST, 'index.html')
    if (fs.existsSync(spa)) {
      found = spa
    }
  }

  if (!found) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not Found')
    return
  }

  const ext = path.extname(found)
  const type = MIME[ext] || 'application/octet-stream'
  send(200, found, type)
})

server.listen(PORT, HOST, () => {
  console.error(`LuxeDrive Detailing static server listening on http://${HOST}:${PORT}`)
})
