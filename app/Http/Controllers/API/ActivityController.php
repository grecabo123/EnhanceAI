<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ActivityLogs;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    //

    public function Logs($id){

        $data = ActivityLogs::where('user_fk',$id)->orderBy('created_at','DESC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }
}
