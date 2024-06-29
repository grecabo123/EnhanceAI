<?php

use App\Http\Controllers\API\ActivityController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\DashboardController;
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
    Route::get('FetchAllAccountsLock',[AdminController::class, 'FetchAllAccountsLock']);
    
    Route::get('FetchPending',[AdminController::class, 'FetchPending']);
    Route::get('AccountDetails/{id}',[AdminController::class,'AccountDetails']);
    Route::get('AccountDetailsInformation/{id}',[AdminController::class,'AccountDetailsInformation']);
    Route::put('UpdateStatus',[AdminController::class, 'UpdateStatus']);
    Route::put('AccountUpdate',[AdminController::class, 'AccountUpdate']);

    Route::delete('RemoveAccount/{id}',[AdminController::class, 'RemoveAccount']);

    Route::get('Dashboaradmin/{id}',[AdminController::class, 'Dashboaradmin']);

    // Request Form
    Route::get('FetchForm',[ShopController::class, 'FetchForm']);
    Route::get('ShopAccount',[ShopController::class, 'ShopAccount']);
    Route::get('ShopDetails/{id}',[ShopController::class, 'ShopDetails']);
    Route::put('UpdateAccount',[ShopController::class, 'UpdateAccount']);


    Route::get('ShopInformation/{id}',[ShopController::class,'ShopInformation']);
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
    Route::get('ListoBuyerHistory/{id}',[OrderController::class, 'ListoBuyerHistory']);
    Route::get('BuyerHistory/{id}',[OrderController::class, 'BuyerHistory']);

    Route::post('UpdateProductBuyer',[OrderController::class, 'UpdateProductBuyer']);

    // Dashboard
    Route::get('AllDataCustomer/{id}',[DashboardController::class,'AllDataCustomer']);

    // order
    Route::get('OrderStatus/{id}',[OrderController::class,'OrderStatus']);
    Route::get('OrderStatusDetails/{id}',[OrderController::class, 'OrderStatusDetails']);
    Route::delete('OrderRemove/{id}',[OrderController::class, 'OrderRemove']);


    Route::get('ShopStatus/{id}',[ShopController::class,'ShopStatus']);


    Route::delete('DeleteOrder/{id}',[OrderController::class, 'DeleteOrder']);

    // Shop List
    Route::get('ShopList/{id}',[ShopController::class,'ShopList']);
    Route::get('ProductList/{id}',[ShopController::class, 'ProductList']);


    Route::put('OrderStatusUpdate',[ShopController::class, 'OrderStatusUpdate']);


    Route::get('ShopInfo/{id}',[ShopController::class, 'ShopInfo']);

    Route::post('BookDataForm',[ShopController::class, 'BookDataForm']);

});


// Logout
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthController::class, 'Logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
