import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";

export class ResumeSubscriptionDto{
    @IsString()
    subId: string;
}