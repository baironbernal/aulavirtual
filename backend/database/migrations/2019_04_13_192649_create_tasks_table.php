<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 200);
            $table->bigInteger('type_tasks_id')->unsigned();
            $table->foreign('type_tasks_id')->references('id')->on('type_tasks');
            $table->integer('value');
            $table->dateTimeTz('expirated_at');
            $table->bigInteger('cut_id')->unsigned();
            $table->foreign('cut_id')->references('id')->on('cuts');
            $table->bigInteger('matter_id')->unsigned();
            $table->foreign('matter_id')->references('id')->on('matters');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
