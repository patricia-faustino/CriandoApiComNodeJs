import fs from 'fs';

import csvParse from 'csv-parse';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    //createReadStream: permite que faça a leitura do arquivo em partes
    const stream = fs.createReadStream(file.path);

    // lê linha por linha
    const parseFile = csvParse();

    //pegar o stream e pegar cada pedaço e passar para o parseFile ou outro método
    stream.pipe(parseFile);

    parseFile.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
