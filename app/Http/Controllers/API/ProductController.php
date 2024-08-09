<?php

namespace App\Http\Controllers\API;

use App\Models\ActivityLogs;
use Illuminate\Http\Request;
use App\Models\ProductDesign;
use App\Models\StoreProducts;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    //

    public function AddProduct (Request $request) {

        $validate = Validator::make($request->all(), [
            "name"          =>          "required",
            "pcs"           =>          "required",
            "Amount"        =>          "required",
            "file"          =>          "required|mimes:png,jpg",
        ],[
            "name.required"         =>          "Product Name Field is required",
            "pcs.required"          =>          "Product Pcs Field is required",
            "Amount.required"       =>          "Product Price Field is required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"         =>          $validate->messages(),
            ]);
        }
        else{
            
            $product = new StoreProducts;

            $product->user_fk = $request->user_fk;
            $product->number_pcs = $request->pcs;
            $product->product_name = $request->name;
            $product->price = $request->Amount;
            if($request->hasFile('file')){
                $file = $request->file('file');
                $extension = $file->getClientOriginalExtension();
                $file_name = $request->name."".rand(111,999).".".$extension;
                $file->move('Uploads/Flowers/',$file_name);
                $product->file_product = "Uploads/Flowers/".$file_name;
            }

            $product->save();

            return response()->json([
                "status"            =>          200,
            ]);
        }
    }

    public function ListProduct($id){

        $product = StoreProducts::where('user_fk',$id)->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $product,
        ]);
    }

    public function DesignProduct($id){

        $design = ProductDesign::where('user_fk',$id)->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $design,
        ]);
    }

    public function AddProductDesign(Request $request){
        $validate = Validator::make($request->all(), [
            "name"                  =>          "required",
            "file"                  =>          "required",
            "pricedata"             =>          "required",
        ],[
            "name.required"             =>          "Product Name field is required",
            "pricedata.required"        =>          "Product Price field is required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"         =>          $validate->messages(),
            ]);
        }
        else{
            
            $product = new ProductDesign;

            $product->user_fk = $request->user_fk;
            $product->status = 1;
            $product->description = $request->desc;
            $product->price = $request->pricedata == 0 ? 0.00 : $request->pricedata; 
            $product->product_name = $request->name;
            if($request->hasFile('file')){
                $file = $request->file('file');
                $extension = $file->getClientOriginalExtension();
                $file_name = $request->name."".rand(111,999).".".$extension;
                $file->move('Uploads/DesignProducts/',$file_name);
                $product->file_product_design = "Uploads/DesignProducts/".$file_name;
            }

            $product->save();

            return response()->json([
                "status"            =>          200,
            ]);
        }
    }

    public function UpdateProduct(Request $request){
        $data = StoreProducts::find($request->id);

        if($data) {

            if($request->hasFile('file_new')){
                $path = $data->file_product;
                if(File::exists($path)){
                    File::delete($path);
                }
                $file = $request->file('file_new');
                $extention = $file->getClientOriginalExtension();
                $filename = $request->name.".".$extention;
                $file->move('Uploads/Flowers/',$filename);
                $data->file_product = "Uploads/Flowers/".$filename;
                $data->number_pcs = $request->pcs;
                $data->product_name = $request->name;
                $data->update();

                $logs = new ActivityLogs;

                $logs->description = $data->product_name. " "."Updated Data";
                $logs->user_fk = $request->user;
                $logs->save();

            }


            

            return response()->json([
                "status"            =>          200,
            ]);
        }
        else{
            return response()->json([
                "status"            =>          504,
            ]);
        }
    }

    public function GetAllProduct($id){
        
        $data = ProductDesign::join('users','users.id','=','tbl_product_design.user_fk')
            ->join('tbl_contact','tbl_contact.user_fk','=','users.id')
            ->selectRaw('tbl_product_design.description,tbl_product_design.product_name,tbl_product_design.file_product_design,tbl_product_design.created_at,
            users.name,users.email,tbl_product_design.id,users.id as user_id,tbl_product_design.price,tbl_contact.contact')
            ->where('tbl_product_design.user_fk',"!=",$id)
        ->orderBy('tbl_product_design.created_at','DESC')->get();

        return response()->json([
            "status"            =>          200,
            "data"              =>          $data,
        ]);
    }

    public function DetailsProduct($id){

        $data = ProductDesign::join('users','users.id','=','tbl_product_design.user_fk')
        ->join('tbl_contact','tbl_contact.user_fk','=','users.id')
        ->selectRaw('tbl_product_design.description,tbl_product_design.product_name,tbl_product_design.file_product_design,tbl_product_design.created_at,
        users.name,users.email,tbl_product_design.id,users.id as user_id,tbl_product_design.price,tbl_contact.contact')
        ->where('tbl_product_design.id',$id)
    ->orderBy('tbl_product_design.created_at','DESC')->first();

    return response()->json([
        "status"            =>          200,
        "data"              =>          $data,
    ]);

    }

    public function ProductDesignUpdate(Request $request){

        $validate = Validator::make($request->all(), [
            "file_new"           =>          "required",
        ],[
            "file_new.required"          =>          "Product Design field is required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"         =>          $validate->messages(),
            ]);
        }
        else{
            $data = ProductDesign::find($request->product_id);
            
            if($data) {
    
                if($request->hasFile('file_new')){
                    $path = $data->file_product_design;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $data->product_name = $request->name;
                    $data->price = $request->price;
                    $file = $request->file('file_new');
                    $extention = $file->getClientOriginalExtension();
                    $filename = $request->name.".".$extention;
                    $file->move('Uploads/DesignProducts/',$filename);
                    $data->file_product_design = "Uploads/DesignProducts/".$filename;
                    $data->update();
    
                    return response()->json([
                        "status"            =>          200,
                    ]);
                }
            }
        }


    }
}
