import { failSpinner, startSpinner, successSpinner } from '../utils/logger.js';
import { rm } from 'fs/promises';
import path from 'path';

export async function directoryClear(targetDir, files) {
  try {
    startSpinner('🗑  Removing existing files...');

    await Promise.all(
      files.map((file) => rm(path.join(targetDir, file), { recursive: true, force: true })),
    );

    successSpinner('Files removed successfully.');
  } catch (err) {
    failSpinner('Error removing files.');
    throw err;
  }
}
