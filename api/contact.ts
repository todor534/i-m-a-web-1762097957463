import { handle } from '../server/handlers/contact';

export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  return handle(req);
}