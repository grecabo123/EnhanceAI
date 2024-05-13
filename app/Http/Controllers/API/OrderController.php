<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderDetails;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //

    public function OrderNow(Request $request){

        $order = new OrderDetails;

        $order->from_user = $request->user_fk;
        $order->product_fk = $request->product_fk;
        $order->to_name = $request->name;
        $order->to_address = $request->to_address;
        $order->to_contact = $request->contact;
        $order->messages = $request->message;
        $order->save();

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
}
