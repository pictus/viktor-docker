<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Live Reactions</title>
    </head>
    <body>
        <div class="app">
            <div class="video-container">
                <video 
                    src="https://archive.org/download/BigBuckBunny_124/Content%2Fbig_buck_bunny_720p_surround.mp4"
                    poster="https://archive.org/download/BigBuckBunny_124/BigBuckBunny_124.thumbs/Content/big_buck_bunny_720p_surround_000001.jpg"
                    controls
                    class="video-container__video"
                ></video>
                <div class="live-reaction" x-data="liveReaction()">
                    <template x-for="reaction in config.reactions">
                        <div class="live-reaction__reaction">
                            <div class="effect">
                                <template x-for="fx in getLive(reaction)">
                                    <span class="effect__item button" x-text="fx"></span>
                                </template>
                            </div>
                            <button class="button" x-on:click="sendMessage(reaction, '{{ csrf_token() }}')" x-text="reaction"></button>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </body>

    @include('live-reaction::style')
    @include('live-reaction::script')
</html>