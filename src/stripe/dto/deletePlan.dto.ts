import { IsString } from "class-validator";

export class DeletePlanDto{
    @IsString()
    planId: string;
}