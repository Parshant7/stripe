import { IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class CreatePaymentIntent{

    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsString({each: true})
    payment_method_types: string[];

    @IsString()
    @IsOptional()
    transferGroup: string;
}