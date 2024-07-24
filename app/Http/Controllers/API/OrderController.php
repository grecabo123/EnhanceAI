<?php

namespace App\Http\Controllers\API;

use App\Models\OrderStatus;
use App\Models\StoreIncome;
use App\Models\ActivityLogs;
use App\Models\OrderDetails;
use App\Models\RegisterShop;
use Illuminate\Http\Request;
use App\Models\ProductDesign;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    //

    public function OrderNow(Request $request){

        $order = new OrderDetails;

        $rand = rand(1111,9999)."".rand(1111,9999);

        $order->invoice_id = $rand;
        $order->from_user = $request->user_fk;
        $order->product_fk = $request->product_fk;
        $order->to_name = $request->name;
        $order->to_address = $request->to_address;
        $order->to_contact = $request->contact;
        $order->messages = $request->message;
        $order->owner_fk = $request->from_buyer;
        $order->order_date = $request->schedule;
        $order->save();

        $track = new OrderStatus;
        $track->order_fk = $order->id;
        $track->description = "Order Product Successfully with Order ID". " ".$rand;
        $track->save();

        $logs = new ActivityLogs;
        $logs->description = "Your Order ID ". $rand. " ";
        $logs->user_fk = $request->user_fk;
        $logs->save();

        return response()->json([
            "status"            =>          200,

        ]);
    }

    public function PurchaseStatus($id){

        $data = OrderDetails::join('tbl_product_design','tbl_product_design.id','=','tbl_order.product_fk')
            ->where('tbl_order.from_user',$id)
                ->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function ListoBuyer($id){

        $data = OrderDetails::join('users','users.id','=','tbl_order.from_user')
        ->join('tbl_product_design','tbl_product_design.id','=','tbl_order.product_fk')
        ->join('tbl_contact','tbl_contact.user_fk','=','users.id')
        ->selectRaw('users.name,tbl_contact.contact,tbl_contact.address,tbl_contact.city,
        tbl_order.to_name,tbl_order.to_address,tbl_order.to_contact,tbl_order.messages,tbl_product_design.product_name,
        tbl_product_design.description,tbl_product_design.price,tbl_product_design.file_product_design,tbl_order.id as order_id,
        tbl_order.order_date,tbl_order.invoice_id')
        ->where('tbl_order.owner_fk',$id)
        ->where('tbl_order.purchase_status',0)
        ->orderBy('tbl_order.created_at','DESC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
        // $user = "2,4,56,7,8,9,0"

        // foreach($user as $user_data) {
        //     $user_id = $user_data->id;

        //     $user_array = explode(',',ltrim($user_id, ','));

            
        //     // To check if the id is matching
        //     if(in_array($num,$user_array)){
        //         // Match Number
        //     }
        // }


    }

    public function ListoBuyerHistory($id){

        $data = OrderDetails::join('users','users.id','=','tbl_order.from_user')
        ->join('tbl_product_design','tbl_product_design.id','=','tbl_order.product_fk')
        ->leftJoin('tbl_contact','tbl_contact.user_fk','=','users.id')
        ->selectRaw('users.name,tbl_order.invoice_id,tbl_order.order_date,
        tbl_order.to_name,tbl_order.to_address,tbl_order.to_contact,tbl_order.messages,tbl_product_design.product_name,
        tbl_product_design.description,tbl_product_design.price,tbl_product_design.file_product_design,tbl_order.id as order_id,
        tbl_contact.contact,tbl_contact.address,tbl_contact.city')
        ->where('tbl_order.owner_fk',$id)
        ->where('tbl_order.purchase_status',1)
        ->orderBy('tbl_order.created_at','DESC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }


    public function UpdateProductBuyer(Request $request){

        $validate = Validator::make($request->all(), [
            "amt"           =>          "required",
        ],[
            "amt.required"          =>          "Total Amount field is required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"         =>          $validate->messages(),
            ]);
        }
        else{
            $data = OrderDetails::find($request->product_id);
            $price = ProductDesign::find($data->product_fk);
    
            if($data){
                $data->purchase_status = 1;
                $data->update();
    
                $income = new StoreIncome;
                $income->product_fk = $data->product_fk;
                $income->amount = $request->amt;
                $income->user_fk = $request->user_fk;
                $income->save();

                $track = new OrderStatus;
                $track->order_fk =  $request->product_id;
                $track->description = "Your product order has been approved!";
                $track->save();

                $track = new OrderStatus;
                $track->order_fk =  $request->product_id;
                $track->description = "Your Product will deliver on "." ".$request->date_;
                $track->save();
                
    
                return response()->json([
                    "status"            =>          200,
                ]);
            }

        }

    }

    public function OrderStatus($id){

        $data = OrderDetails::leftJoin('tbl_product_design','tbl_product_design.id','=','tbl_order.product_fk')
        ->leftJoin('tbl_shop_register','tbl_shop_register.user_fk','=','tbl_order.owner_fk')
        ->selectRaw('tbl_order.id,tbl_product_design.product_name,tbl_product_design.file_product_design,tbl_order.created_at,tbl_order.purchase_status,
        tbl_order.invoice_id,tbl_order.order_date,tbl_shop_register.shop_name,tbl_product_design.price,tbl_order.type_order,
        tbl_order.file_attach')
        ->where('tbl_order.from_user',$id)->orderBy('tbl_order.created_at','DESC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
            "id"                =>          $id,
        ]);
    }

    public function OrderStatusDetails($id){

        $data = OrderDetails::join('users as from_user','from_user.id','=','tbl_order.from_user')
            ->join('tbl_product_design','tbl_product_design.id','=','tbl_order.product_fk')
            ->join('users as owner_user','owner_user.id','=','tbl_order.owner_fk')
            ->selectRaw('from_user.name as from_name,from_user.email as from_email,owner_user.name as owner_name,owner_user.email,tbl_order.to_name,
            tbl_order.to_address,tbl_order.to_contact,tbl_order.messages,tbl_product_design.product_name,tbl_product_design.file_product_design,
            tbl_product_design.id as pro,tbl_product_design.price,tbl_order.invoice_id,tbl_order.order_date,owner_user.id as user_id')
            ->where('tbl_order.id',$id)
            ->first();

        $track = OrderStatus::where('order_fk',$id)->get();

        // $store = RegisterShop::where('user_fk',$data->user_id)->first();

            return response()->json([
                "status"            =>          200,
                "data"              =>          $data,
                // "store"             =>          $store,
                "track"             =>          $track,
            ]);

    }

    public function OrderRemove($id){

        $data = OrderDetails::find($id);

        if($data) {
            $data->delete();
            return response()->json([
                "status"            =>          200,
            ]);
        }
    }

    public function DeleteOrder($id){

        $data = OrderDetails::find($id);

        if($data) {
            $data->delete();
            return response()->json([
                "status"            =>              200,
            ]);
        }
    }

    public function BuyerHistory($id){

        $data = OrderDetails::join('users','users.id','=','tbl_order.from_user')
        ->join('tbl_product_design','tbl_product_design.id','=','tbl_order.product_fk')
        ->selectRaw('users.name,tbl_order.invoice_id,tbl_order.order_date,
        tbl_order.to_name,tbl_order.to_address,tbl_order.to_contact,tbl_order.messages,tbl_product_design.product_name,
        tbl_product_design.description,tbl_product_design.price,tbl_product_design.file_product_design,tbl_order.id as order_id')
        ->where('tbl_order.owner_fk',$id)
        ->where('tbl_order.purchase_status',2)
        ->orderBy('tbl_order.created_at','DESC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }
}
