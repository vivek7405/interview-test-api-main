import 'dotenv/config';
import { setupDb } from '../db';
import { seedUsers, seedScores } from './helpers/seed';

async function main() {
  setupDb();
  await seedUsers();
  await seedScores();
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
