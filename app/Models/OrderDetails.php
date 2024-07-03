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
        "type_order",
        "from_user",
        "file_attach",
        "product_fk",
        "to_name",
        "to_address",
        "to_contact",
        "messages",
        'purchase_status',
        "order_date",
        "owner_fk",
    ];
}
