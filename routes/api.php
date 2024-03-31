<?php

use App\Http\Controllers\API\ActivityController;
use App\Http\Controllers\API\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;


// Login
Route::post('Login',[AuthController::class, 'Login']);

// Logs
Route::get('Logs/{id}',[ActivityController::class,'Logs']);


// Create Account
Route::post('CreateAccount',[AuthController::class, 'CreateAccount']);



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
});


// Csutomer
Route::middleware(['auth:sanctum','isAPIUser'])->group(function () {
    Route::get('/customer',function() {
        return response()->json([
            "status"        =>      200,
            "role"          =>      auth()->user()->role,
        ],200);
    });


});


// Logout
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout',[AuthController::class, 'Logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
