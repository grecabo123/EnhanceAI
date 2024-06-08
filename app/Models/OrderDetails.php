<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{
    use HasFactory;

    protected $table = "tbl_order";

    protected $fillable = [
        "invoice_id",
        "from_user",
        "product_fk",
        "to_name",
        "to_address",
        "to_contact",
        "messages",
        'purchase_status',
        "owner_fk",
    ];
}
