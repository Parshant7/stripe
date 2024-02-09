import { IsNumber, IsObject, IsString } from "class-validator";

export class CreatePayoutDto{

    @IsNumber()
    amount: number;

    @IsString()
    currency: string;
}