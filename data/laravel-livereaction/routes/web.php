<?php 

use Illuminate\Support\Facades\Route;
use Pictus\LaravelLiveReaction\Events\LiveReaction;
use Pictus\LaravelLiveReaction\Events\WorkerMessage;
use Pictus\LaravelLiveReaction\Jobs\WorkerMessageJob;

Route::get('/live-reaction/', function() {
    return view('live-reaction::live-reaction-demo');
})->middleware('web');

Route::post('/live-reaction/', function() {
    $message = request()->input('message', '');

    if(!$message || !in_array($message, config('live-reaction.allowedNotifications'))) {
        return response()->json(['success' => false]);
    }
    // NOTE: event implements ShouldBroadcastNow, to send Message sync, 
    // you can also use ShouldBroadcast. You may get a small delay but it makes
    // sure you dont break the whole request from client, when Mercure is not responding
    event(new LiveReaction('liveReaction', $message));
})->middleware('web');

Route::get('/run-job', function() {
    // Dispatch a job with 5 seconds Delay, just for example
    // NOTE: the event, that is thrown also implement ShouldBroadcastNow
    // see notes in /live-reaction/ for more information
    WorkerMessageJob::dispatch()->delay(now()->addSeconds(5));
});
