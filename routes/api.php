<?php

use App\Http\Controllers\API\ActivityController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\ShopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;


// Login
Route::post('Login',[AuthController::class, 'Login']);

// Logs
Route::get('Logs/{id}',[ActivityController::class,'Logs']);


// Create Account
Route::post('CreateAccount',[AuthController::class, 'CreateAccount']);

// Fetch All Product
Route::get('GetAllProduct/{id}',[ProductController::class, 'GetAllProduct']);
Route::get('DetailsProduct/{id}',[ProductController::class, 'DetailsProduct']);

Route::post('OrderNow',[OrderController::class, 'OrderNow']);
Route::get('PurchaseStatus/{id}',[OrderController::class, 'PurchaseStatus']);


Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function() {
    Route::get('/checking',function() {
        return response()->json([
            "status"        =>      200,
            "role"          =>      auth()->user()->role,
        ],200);
    });

    Route::get('FetchAllAccounts',[AdminController::class, 'FetchAllAccounts']);
    Route::get('FetchPending',[AdminController::class, 'FetchPending']);
    Route::get('AccountDetails/{id}',[AdminController::class,'AccountDetails']);
    Route::put('UpdateStatus',[AdminController::class, 'UpdateStatus']);


    // Request Form
    Route::get('FetchForm',[ShopController::class, 'FetchForm']);
    Route::get('ShopAccount',[ShopController::class, 'ShopAccount']);
    Route::get('ShopDetails/{id}',[ShopController::class, 'ShopDetails']);
    Route::put('UpdateAccount',[ShopController::class, 'UpdateAccount']);
});


// Csutomer
Route::middleware(['auth:sanctum','isAPIUser'])->group(function () {
    Route::get('/customer',function() {
        return response()->json([
            "status"        =>      200,
            "role"          =>      auth()->user()->role,
        ],200);
    });

    // Create Shop
    Route::post('RegisterShop',[ShopController::class, 'CreateShop']);
    Route::get('UserControl/{id}',[ShopController::class, 'UserControl']);


    // Add product
    Route::post('AddProduct',[ProductController::class, 'AddProduct']);
    Route::get('ListProduct/{id}',[ProductController::class, 'ListProduct']);
    Route::put('UpdateProduct',[ProductController::class, 'UpdateProduct']);

    // Design Product
    Route::post('AddProductDesign',[ProductController::class, 'AddProductDesign']);
    Route::get('DesignProduct/{id}',[ProductController::class, 'DesignProduct']);
    
    // List of buyer
    Route::get('ListoBuyer/{id}',[OrderController::class, 'ListoBuyer']);
});


// Logout
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthController::class, 'Logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
