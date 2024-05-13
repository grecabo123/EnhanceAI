<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisterShop extends Model
{
    use HasFactory;

    protected $table = "tbl_shop_register";

    protected $fillable = [
        "shop_name",
        "shop_logo",
        "shop_city",
        "shop_address",
        "shop_permit",
        "shop_contact",
        "shop_description",
        "user_fk",
        "shop_status",
    ];
}
