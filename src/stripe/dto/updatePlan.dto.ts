import { IsObject, IsString } from "class-validator";

export class UpdatePlanDto{

    @IsString()
    planId: string;

    @IsObject()
    updates: any;
    
}