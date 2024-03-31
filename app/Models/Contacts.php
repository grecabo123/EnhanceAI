<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    use HasFactory;

    protected $table = "tbl_contact";

    protected $fillable = [
        "contact",
        "address",
        "city",
        "file_upload",
        "users",
    ];
}
