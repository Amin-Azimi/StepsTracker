CREATE TABLE "public"."tasks"("id" serial NOT NULL, "title" text NOT NULL,"stage_id" integer NOT NULL,"completed" BOOLEAN NOT NULL, PRIMARY KEY ("id") );