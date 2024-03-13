import { IsEnum, IsObject, IsOptional, IsString } from "class-validator";

export class CreateAccountDto{
    @IsString()
    type:any;
    
    @IsString()
    country:string;

    // @IsString()
    // email:string;
    
    @IsString()
    business_type:any;

    @IsObject()
    business_profile:object;
    
    @IsObject()
    capabilities:object;

}