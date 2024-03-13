import { IsOptional, IsString } from "class-validator";

export class CreateAccountlinkDto{
    
    @IsString()
    account:string;

    @IsString()
    refresh_url:string;

    @IsString()
    return_url:string;
    
    @IsString()
    type:any;
}