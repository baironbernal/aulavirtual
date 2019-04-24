<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCareerMatterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('career_matter', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('career_id')->unsigned();
            $table->foreign('career_id')->references('id')->on('careers');
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
        Schema::dropIfExists('career_matter');
    }
}
