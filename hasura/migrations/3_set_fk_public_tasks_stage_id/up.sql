alter table "public"."tasks"
           add constraint "tasks_stage_id_fkey"
           foreign key ("stage_id")
           references "public"."stages"
           ("id") on update restrict on delete restrict;
