import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'

function serverlessDevPlugin(): Plugin {
  return {
    name: 'serverless-dev-middleware',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url || '/'
          const pathname = rawUrl.split('?')[0]
          if (!pathname.startsWith('/api/')) return next()

          const route = pathname.replace(/^\/api\//, '').replace(/\/+$/, '')
          if (!route) return next()

          const [name] = route.split('/')
          const handlerFile = path.resolve(server.config.root, `server/handlers/${name}.ts`)

          let mod: any
          try {
            mod = await server.ssrLoadModule(handlerFile)
          } catch {
            res.statusCode = https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png0https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png
            res.end('Not Found')
            return
          }

          const handle: ((req: Request) => Promise<Response>) | undefined =
            typeof mod?.handle === 'function'
              ? mod.handle
              : typeof mod?.default === 'function'
              ? mod.default
              : typeof mod?.default?.handle === 'function'
              ? mod.default.handle
              : undefined

          if (!handle) {
            res.statusCode = https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png00
            res.end('Invalid handler export. Expected: export async function handle(req: Request): Promise<Response>')
            return
          }

          const request = await toWebRequest(req)
          const response = await handle(request)
          await sendWebResponse(res, response)
        } catch (err) {
          next(err as any)
        }
      })
    },
  }
}

async function toWebRequest(req: IncomingMessage): Promise<Request> {
  const method = (req.method || 'GET').toUpperCase()
  const host = req.headers.host || 'localhost'
  const protocol = 'http'
  const url = new URL(req.url || '/', `${protocol}://${host}`)

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'undefined') continue
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v)
    } else {
      headers.set(key, value)
    }
  }

  let body: Uint8Array | undefined
  if (method !== 'GET' && method !== 'HEAD') {
    body = await readBody(req)
  }

  return new Request(url.toString(), {
    method,
    headers,
    body,
  })
}

function readBody(req: IncomingMessage): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    })
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

async function sendWebResponse(res: ServerResponse, response: Response): Promise<void> {
  res.statusCode = response.status
  res.statusMessage = response.statusText

  // Handle Set-Cookie properly if available
  const anyHeaders: any = (response as any).headers
  if (anyHeaders && typeof anyHeaders.getSetCookie === 'function') {
    const cookies = anyHeaders.getSetCookie()
    if (cookies && cookies.length) {
      res.setHeader('set-cookie', cookies)
    }
  }

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'set-cookie') return
    res.setHeader(key, value)
  })

  if (response.body) {
    const ab = await response.arrayBuffer()
    res.end(Buffer.from(ab))
  } else {
    res.end()
  }
}

export default defineConfig({
  plugins: [react(), serverlessDevPlugin()],
  server: {
    port: https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.png7https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png,
    open: true,
  },
  preview: {
    port: https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png09https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png608https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png72https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png602-img-4.png6https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.pnghttps://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png0-img-2.png-img-1.png7https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/176209https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png68https://jg7nnjuy9jonydmm.public.blob.vercel-storage.com/ai/1762095763861-img-5.png819-img-3.png,
  },
})