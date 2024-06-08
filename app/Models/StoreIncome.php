<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreIncome extends Model
{
    use HasFactory;

    protected $table = "tbl_income";

    protected $fillable = [
        "product_fk",
        "amount",
        "image_gene",
        "user_fk",
    ];
}
