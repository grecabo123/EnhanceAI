<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ActivityLogs;
use App\Models\RegisterShop;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function FetchAllAccounts (){
        $data = User::where('status',1)->where('role',2)->get();
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


    public function Dashboaradmin($id){

        $all_user = User::all();
        $all_shop = RegisterShop::where('shop_status',1)->count();

        $user_count = User::selectRaw(
            'SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) as active, 
             SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) as pending' 
        )
        ->whereIn('status', [0,1])
        ->first();

        $shops = RegisterShop::join('users','users.id','=','tbl_shop_register.user_fk')
            ->selectRaw('tbl_shop_register.shop_name,tbl_shop_register.shop_logo,tbl_shop_register.shop_city,users.email,
            tbl_shop_register.created_at')
            ->get();

        return response()->json([
            "status"            =>          200,
            "all"               =>          $all_user->count(),
            "shop"              =>          $all_shop,
            "user_count"        =>          $user_count,
            "shope"             =>          $shops,
        ]);

    }
    
}
