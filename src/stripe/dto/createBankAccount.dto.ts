import { IsString } from "class-validator";

export class CreateBankAccountDto{
    
    @IsString()
    customerId:string;
    
    @IsString()
    bankToken:string;
}