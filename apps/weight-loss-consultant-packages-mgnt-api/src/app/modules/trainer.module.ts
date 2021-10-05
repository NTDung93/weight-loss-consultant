import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TrainerMapper} from "../mappers/trainer.mapper";
import {TrainerRepository} from "../repositories/trainer.repository";
import {TrainerController} from "../controllers/trainer.controller";
import {TrainerService} from "../services/impls/trainer.service.impl";


@Module({
  imports: [TypeOrmModule.forFeature([TrainerRepository])],
  providers: [TrainerService, TrainerMapper],
  exports: [TrainerService, TrainerMapper],
  controllers: [TrainerController]
})
export class TrainerModule {

}