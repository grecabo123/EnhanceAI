<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderDetails;
use App\Models\ProductDesign;
use App\Models\StoreIncome;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //

    public function AllDataCustomer($id){

        $income = StoreIncome::selectRaw('sum(amount) as total, count(id) as total_sold')->where('user_fk',$id)->first();
        $pending = OrderDetails::selectRaw('count(id) as total_pending')->where('purchase_status',0)
            ->where('owner_fk',$id)
            ->first();
        $product_design = ProductDesign::selectRaw('count(user_fk) as total')->where('user_fk',$id)->first();
        
        $customer = OrderDetails::leftjoin('users','users.id','=','tbl_order.from_user')
            ->selectRaw('users.name,tbl_order.created_at,tbl_order.purchase_status,users.name,users.email')
            ->where('tbl_order.owner_fk',$id)
            ->where('tbl_order.purchase_status',1)
            ->orderBy('tbl_order.created_at','DESC')
            ->get();


        return response()->json([
            "status"            =>          200,
            "income"            =>          $income,
            "pending"           =>          $pending,
            "design"            =>          $product_design,
            "customer"          =>          $customer,
        ]);
        
    }
}
