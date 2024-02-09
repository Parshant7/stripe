import { IsString } from "class-validator";

export class CheckAccountStatusDto{

    @IsString()
    bankId: string;
    
    @IsString()
    customerId: string;
}
