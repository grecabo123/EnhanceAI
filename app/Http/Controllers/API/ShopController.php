<?php

namespace App\Http\Controllers\API;

use App\Models\ActivityLogs;
use App\Models\OrderDetails;
use App\Models\OrderStatus;
use App\Models\ProductDesign;
use App\Models\RegisterShop;
use App\Models\StoreIncome;
use App\Models\StoreProducts;
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


    public function ShopInformation($id){

        $data = RegisterShop::find($id);
        $income = StoreIncome::selectRaw('sum(amount) as total_amt')->where('user_fk',$data->user_fk)->first();
        $user = User::join('tbl_contact','tbl_contact.user_fk','=','users.id')
            ->where('users.id',$data->user_fk)
            ->first();
        $products = StoreProducts::selectRaw('count(*) as total_product')->where('user_fk',$data->user_fk)->first();
        $design = ProductDesign::selectRaw('count(*) as total_design')->where('user_fk',$data->user_fk)->first();

        $list_product = StoreProducts::where('user_fk',$data->user_fk)->get();
        $list_design = ProductDesign::where('user_fk',$data->user_fk)->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $user,
            "shop"              =>          $data,
            "income"            =>          $income,
            "product"           =>          $products,
            "design"            =>          $design,
            "list_product"      =>          $list_product,
            "list_design"       =>          $list_design,
        ]);
            
    }


    public function ShopList($id){

        $shop = RegisterShop::join('users','users.id','=','tbl_shop_register.user_fk')->where('tbl_shop_register.user_fk','!=',$id)->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $shop,
        ]);
    }

    public function ProductList($id){

        // $shop = RegisterShop::where('user_fk',$id)->first();
        $data = ProductDesign::where('user_fk',$id)->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,

        ]);
    }

    public function OrderStatusUpdate(Request $request){

        $data = OrderDetails::where('invoice_id',$request->invoice)->first();
        if($data){
            $data->purchase_status = 2;
            $data->update();
            return response()->json([
                "status"            =>          200,
            ]);
        }
    }

    public function ShopInfo($id){

        $data = RegisterShop::join('users','users.id','=', 'tbl_shop_register.user_fk')
            ->selectRaw('users.name,users.email,tbl_shop_register.shop_name,tbl_shop_register.shop_logo,
            tbl_shop_register.shop_contact,users.id as user_id,tbl_shop_register.id as shop_id,users.name')    
        ->where('tbl_shop_register.user_fk',$id)
            ->first();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function BookDataForm(Request $request){

        $validate = Validator::make($request->all(), [
            "file"          =>              "required"
        ]);

        if($validate->fails()) {
            return response()->json([
                "status"            =>          $validate->messages(),
            ]);
        }
        else{

            $rand = rand(1111,9999)."".rand(1111,9999);
    
            $data = new OrderDetails;
            $data->invoice_id = $rand;
            $data->type_order = 1;
            $data->from_user = $request->user_;
            if($request->hasFile('file')){
                $file = $request->file('file');
                $extension = $file->getClientOriginalExtension();
                $filename = $request->name.".".$extension;
                $file->move('Upload/ID/',$filename);
                $data->file_attach = "Upload/ID/".$filename;
            }
            $data->to_name = $request->name;
            $data->to_address = $request->address;
            $data->to_contact = $request->contact;
            $data->messages = $request->desc;
            $data->owner_fk = $request->owner_fk;
            $data->purchase_status = 0;
            $data->order_date = $request->date_;
            $data->save();


            $track = new OrderStatus;

            $track->order_fk = $data->id;
            $track->description = "Order Product Successfully with Order ID ".$rand;
            $track->save();
    
            return response()->json([
                "status"            =>          200,
            ]);
        }

    }
}
