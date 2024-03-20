<?php

namespace Pictus\LaravelLiveReaction\Events;

use Duijker\LaravelMercureBroadcaster\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class LiveReaction implements ShouldBroadcast
{
    public function __construct(
        public string $channel,
        public string $content
    )
    {}


    public function broadcastOn()
    {
        return new Channel($this->channel);
    }
}
