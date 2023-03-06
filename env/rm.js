import { rm } from 'fs/promises';

export default async function remove(path = ['dist']) {
    try {
        for (const p of path) {
            await rm(p, { recursive: true });
        }
    } catch {
        console.log(`${path}`);
    }
}
