<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_order', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id');
            $table->unsignedBigInteger('from_user');
            $table->foreign('from_user')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('product_fk');
            $table->foreign('product_fk')->references('id')->on('tbl_product_design')->onDelete('cascade')->onUpdate('cascade');
            $table->string('to_name')->nullable();
            $table->string('to_address')->nullable();
            $table->bigInteger('to_contact')->nullable();
            $table->longText('messages')->nullable();
            $table->tinyInteger('purchase_status')->default(0);
            $table->unsignedBigInteger('owner_fk');
            $table->foreign('owner_fk')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('tbl_order');
    }
}
