<?php

namespace Pictus\LaravelLiveReaction\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;


class WorkerMessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct()
    {}

    public function handle(): void
    {
        event(
            new \Pictus\LaravelLiveReaction\Events\WorkerMessage('workerMessage', 'worker Sent you a message')
        );
    }
}
