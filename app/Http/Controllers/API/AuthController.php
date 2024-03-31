<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Contacts;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //

    public function Login(Request $request){

        $validate = Validator::make($request->all(), [
            "email"         =>      "required|email",
            "password"      =>      "required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"     =>      $validate->messages(),
            ]);
        }
        else{
            $user = User::where('email',$request->email)->first();
            if($user || Hash::check($request->password, $user->password)){   

                // 1 = Verified
                if($user->status == 1){
                    // Super Admin
                    if($user->role == 1){
                        $token = $user->createToken($user->email.'_Admin',['server:admin'])->plainTextToken;
                    }
                    else{
                        // Customer
                        $token = $user->createToken($user->email.'_customer',['server:customer'])->plainTextToken;
                    }
                    return response()->json([
                        "status"            =>      200,
                        "role"              =>      $user->role,
                        "id"                =>      $user->id,
                        "token"             =>      $token,
                        "name"              =>      $user->name_user,
                        "message"           =>      "Logged In Successfuly",
                    ]);
                }
                else{
                    // check if the account is not verified
                    return response()->json([
                        "status"        =>          501,
                        "message"       =>          "Your Account is not verified",
                    ]);
                }
            }
            else{
                // Wrong input credintials
                return response()->json([
                    "status"        =>          504,
                    "message"       =>          "Wrong Credintials",
                ]);
                
            }
        }
    }

    public function Logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            "status"        =>      200,
            'message'       =>      "Logout Successfully",
        ]);
    }

    public function CreateAccount(Request $request){

        $validate = Validator::make($request->all(), [
            "name"              =>          "required",
            "email"             =>          "required|email|unique:users,email",
            "city"              =>          "required",
            "address"           =>          "required",
            "password"          =>          "required",
            "file"              =>          "required|mimes:png,jpg",
            "contact"           =>          "required",
        ]);

        if($validate->fails()) {
            return response()->json([
                "error"         =>          $validate->messages(),
            ]);
        }
        else{

            $user = new User;

            $user->name = $request->name;
            $user->email = $request->email;
            $user->role = 2;
            $user->status = 0;
            $user->secret_key = $request->password;
            $user->password = Hash::make($request->password);
            $user->save();

            $contact = new Contacts;
            $contact->contact = $request->contact;
            $contact->address = $request->address;
            $contact->city = $request->city;
            $contact->user_fk = $user->id;
            if($request->hasFile('file')){

                $file = $request->file('file');
                $extension = $file->getClientOriginalExtension();
                $filename = $request->name.".".$extension;
                $file->move('Upload/ID/',$filename);
                $contact->file_upload = "Upload/ID/".$filename;
            }
            $contact->save();

            return response()->json([
                "status"            =>          200,
            ]);
        }
    }
}
