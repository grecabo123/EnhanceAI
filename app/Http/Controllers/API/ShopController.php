<?php

namespace App\Http\Controllers\API;

use App\Models\ActivityLogs;
use App\Models\RegisterShop;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ShopController extends Controller
{
    //

    public function CreateShop(Request $request){

        $validate = Validator::make($request->all(), [
            "shop_name"                 =>          "required",
            "shop_contact"              =>          "required",
            "shop_city"                 =>          "required",
            "shop_address"              =>          "required",
            "logo_file"                 =>          "required|mimes:png,jpg",
            "file_permit"               =>          "required|mimes:pdf",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"             =>          $validate->messages(),
            ]);
        }
        else{

            $register = new RegisterShop;

            $register->shop_name = $request->shop_name;
            $register->shop_city = $request->shop_city;
            $register->shop_address = $request->shop_address;
            $register->shop_contact = $request->shop_contact;
            $register->shop_description = $request->shop_description;
            $register->user_fk = $request->user_fk;


            if($request->hasFile('logo_file') && $request->hasFile('file_permit')){
                $file = $request->file('logo_file');
                $extension = $file->getClientOriginalExtension();
                $filename = $request->shop_name.".".$extension;
                $file->move('Upload/Files/',$filename);
                $register->shop_logo = "Upload/Files/".$filename;

                $file_permit = $request->file('file_permit');
                $permit_extension = $file_permit->getClientOriginalExtension();
                $permit_file_name = $request->shop_name.".".$permit_extension;
                $file_permit->move('Upload/Files/',$permit_file_name);
                $register->shop_permit = "Upload/Files/".$permit_file_name;
                
            }
            $register->save();

            $logs = new ActivityLogs;
            $logs->description = "Request Form to a Flower Shop"." ".$request->shop_name;
            $logs->user_fk = $request->user_fk;
            $logs->save();


            return response()->json([
                "status"                =>              200,
            ]);
            
        }
    }

    public function FetchForm(){
        $data = RegisterShop::where('shop_status',0)->orderBy('shop_name','ASC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function ShopAccount(){
        $data = RegisterShop::where('shop_status',1)->orderBy('shop_name','ASC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function ShopDetails($id){

        $data = RegisterShop::join('users','users.id','=','tbl_shop_register.user_fk')
            ->where('tbl_shop_register.id',$id)
                ->first();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }


    public function UpdateAccount(Request $request){

        $user = RegisterShop::where('user_fk',$request->account)->first();

        if($user){
            $user->shop_status = $request->status_choose;
            $user->update();

            return response()->json([
                "status"            =>          200,
            ]);
        }
        else{
            return response()->json([
                "status"            =>      504,
            ]);
        }

    }

    public function UserControl($id){

        $data = User::leftJoin('tbl_shop_register','tbl_shop_register.user_fk','=','users.id')
            ->where('users.id',$id)
            ->first();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function ShopStatus($id){

        $shop = RegisterShop::where('user_fk',$id)->get();


        return response()->json([
            "status"            =>          200,
            "data"              =>          $shop,
        ]);
    }
}
