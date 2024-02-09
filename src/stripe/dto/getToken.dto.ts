import { IsString } from "class-validator";

export class GetTokenDto{
    @IsString()
    country:string;
    
    @IsString()
    currency:string;
    
    @IsString()
    account_holder_name:string;
    
    @IsString()
    account_holder_type: 'company' | 'individual';
    
    @IsString()
    routing_number:string;
    
    @IsString()
    account_number:string;
}