<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

Route::get('/test', [TestController::class, 'test']);
Route::post('/test', [TestController::class, 'store']);
