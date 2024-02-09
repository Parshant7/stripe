import { Type } from "class-transformer";
import { IsArray, IsObject, IsString, ValidateNested } from "class-validator";

export class UpdateSubscriptionDto{
    @IsString()
    subId: string;

    @IsObject()
    updates: any;
}
