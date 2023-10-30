import * as fs from 'fs';
import sharp from 'sharp';
import { logger } from './logger';
import { AppError } from '../errors/AppError';

export async function imageToBase64(file: Express.Multer.File): Promise<string> {
  try {
    const readFile = await fs.promises.readFile(file.path);
    logger.info(file.path);
    const base64String = Buffer.from(readFile).toString('base64');
    const imageBuffer = Buffer.from(base64String, 'base64');

    // Redimensiona a imagem para 200x200 pixels
    const resizedImageBuffer = await sharp(imageBuffer).resize(200, 200).toBuffer();

    // Converte o Buffer redimensionado de volta para uma string de base64
    const resizedBase64String = resizedImageBuffer.toString('base64');

    // Exclui o arquivo após transformá-lo em base64
    await fs.promises.unlink(file.path);

    //adiciona o prefixo
    const imageWithPrefix = addPrefix(resizedBase64String)

    return imageWithPrefix;
    
  } catch (error) {
    logger.info('Error ao processar a imagem:', error);
    throw new AppError('Erro ao converter imagem');
  }
}

function addPrefix(imagem: string): string{
  return `data:image/png;base64,${imagem}`;
}
