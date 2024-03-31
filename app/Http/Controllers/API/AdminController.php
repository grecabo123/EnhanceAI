<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ActivityLogs;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function FetchAllAccounts (){
        $data = User::where('status',1)->get();
        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function FetchPending (){
        $data = User::where('status',0)->get();
        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function AccountDetails($id){

        $data = User::join('tbl_contact','tbl_contact.user_fk','=','users.id')
            ->selectRaw('users.name,users.email,users.role,tbl_contact.contact,tbl_contact.address,
            tbl_contact.city,tbl_contact.file_upload,users.created_at')
                ->where('users.id',$id)
                    ->first();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function UpdateStatus(Request $request){

        $data = User::find($request->user_id);

        if($data){

            $logs = new ActivityLogs;
            $logs->description = $data->name . " Has been " . ($request->status == 1 ? "Not Approved" : "Approved");
            $logs->user_fk = $request->user_fk;
            $logs->save();

            $data->status = $request->status == 1 ? 0 : 1;
            $data->update();

            return response()->json([
                "status"                =>          200,
                "nmae"                  =>          $data->name,
            ]);
        }
    }
    
}
