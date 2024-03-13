import { IsString } from "class-validator";

export class VerfiyAccountDto{

    @IsString()
    bankId: string;
    
    @IsString()
    customerId: string;
}
