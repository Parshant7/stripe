import { IsString } from "class-validator";

export class CreateRefundDto{

    @IsString()
    chargeId: string;
    
}