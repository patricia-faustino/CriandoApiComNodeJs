import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    //verificar se arquivo existe no diretorio
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  
  //caso exista deletar arquivo
  await fs.promises.unlink(filename);
};
