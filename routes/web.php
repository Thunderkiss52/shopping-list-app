<?php

use App\Http\Controllers\Api\V1\ShoppingListsController;
use Illuminate\Support\Facades\Route;

// SPA start page
Route::get('/', function () {
    return view('index');
});

// Session based API
Route::middleware([])->group(function() {
    Route::group(['prefix' => 'api/v1'], function () {
        Route::delete('shopping-list/remove-all', [ShoppingListsController::class, 'removeAll']);
        Route::apiResource('shopping-list', ShoppingListsController::class);
    });
});
