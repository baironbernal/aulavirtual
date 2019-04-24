<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersContactInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_contact_info', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('address');
            $table->bigInteger('cellphone')->unique();
            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users_1');
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
        Schema::dropIfExists('users_contact_info');
    }
}
