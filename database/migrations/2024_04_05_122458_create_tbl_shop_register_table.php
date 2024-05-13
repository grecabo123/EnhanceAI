<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblShopRegisterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_shop_register', function (Blueprint $table) {
            $table->id();
            $table->string('shop_name');
            $table->string('shop_logo');
            $table->string('shop_city');
            $table->string('shop_address');
            $table->string('shop_permit');
            $table->string('shop_contact');
            $table->string('shop_description');
            $table->tinyInteger('shop_status')->default(0);
            $table->unsignedBigInteger('user_fk');
            $table->foreign('user_fk')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('tbl_shop_register');
    }
}
