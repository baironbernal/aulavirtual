<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudyMaterialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_materials', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('task_id')->unsigned();
            $table->foreign('task_id')->references('id')->on('tasks');
            $table->longText('route_file');
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
        Schema::dropIfExists('study_materials');
    }
}
