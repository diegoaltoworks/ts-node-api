import {writeFileSync} from 'fs';
import app from '../backend/src/app';

const PORT = 9000;

const fetchOpenApiJson = async (
  url: string,
  outputPath: string
): Promise<void> => {
  const json = await fetch(url).then(x => x.json());
  console.log('DOCS.md generator: loaded openapi.json', json);
  const text = JSON.stringify(json, null, 2);
  writeFileSync(outputPath, text);
  console.log(`DOCS.md generator: openapi.json saved to ${outputPath}`);
};

const main = async () => {
  try {
    const server = app.listen(PORT, () => {
      console.info(`DOCS.md generator: Server running on port ${PORT}`);
    });
    await fetchOpenApiJson(
      `http://localhost:${PORT}/openapi.json`,
      './docs/openapi.json'
    );
    server.close();
    console.info('DOCS.md generator: All done!');
  } catch (error) {
    console.error('DOCS.md generator: An error occurred:', error);
  }
};

main();
