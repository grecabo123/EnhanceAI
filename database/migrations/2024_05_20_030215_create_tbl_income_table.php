<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblIncomeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_income', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_fk')->nullable();
            $table->foreign('product_fk')->references('id')->on('tbl_product_design')->onDelete('cascade')->onUpdate('cascade');
            $table->double('amount',10,2);
            $table->string('image_gene')->nullable();
            $table->unsignedBigInteger('user_fk')->nullable();
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
        Schema::dropIfExists('tbl_income');
    }
}
