import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // let valueEncoded = value;
    // for (let i = 0; i < 4; i++) {
    //   valueEncoded = Buffer.from(valueEncoded, 'utf8').toString('base64')
    // }
    // let valueDecoded = valueEncoded;
    // console.log(valueEncoded);
    // for (let i = 0; i < 4; i++) {
    //   valueDecoded = Buffer.from(valueDecoded, "base64").toString("utf8");
    // }
    // console.log(valueDecoded);

    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid ID`);
    }
    return value;
  }
}
