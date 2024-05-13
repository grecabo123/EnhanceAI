<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDesign extends Model
{
    use HasFactory;

    protected $table = "tbl_product_design";

    protected $fillable = [
        "user_fk",
        "status",
        "product_name",
        "description",
        'price',
        "file_product_design",
    ];
}
