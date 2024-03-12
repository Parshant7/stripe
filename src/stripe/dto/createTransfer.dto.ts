import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested, IsNumber } from "class-validator";

export class CreateTransferDto{
    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsString()
    destination: string;

    @IsString()
    transferGroup: string;
}
