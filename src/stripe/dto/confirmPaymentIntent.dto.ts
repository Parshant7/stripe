import { IsOptional, IsString } from "class-validator";

export class ConfirmPaymentIntentDto{
    
    @IsString()
    intentId:string;
    
    @IsOptional()
    @IsString()
    paymentMethod:string;
}