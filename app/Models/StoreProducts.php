<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreProducts extends Model
{
    use HasFactory;

    protected $table = "tbl_product";

    protected $fillable = [
        "user_fk",
        "number_pcs",
        "product_name",
        "price",
        "file_product",
        "status",
    ];
}
