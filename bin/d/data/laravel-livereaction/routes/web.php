<?php 

use Illuminate\Support\Facades\Route;
use Gezeichnet\LaravelLiveReaction\Events\LiveReaction;

Route::get('/live-reaction/', function() {
    return view('live-reaction::live-reaction-demo');
})->middleware('web');

Route::post('/live-reaction/', function() {
    $message = request()->input('message', '');

    if(!$message || !in_array($message, config('live-reaction.allowedNotifications'))) {
        return response()->json(['success' => false]);
    } 
    
    event(new LiveReaction('liveReaction', $message));
})->middleware('web');