<?php

namespace Pictus\LaravelLiveReaction;


class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    private string $configPath = '/../config/live-reaction.php';
    private string $configName = 'live-reaction';

    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.$this->configPath, $this->configName
        );
    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__.$this->configPath => config_path($this->configName . '.php'),
        ]);

        if(config($this->configName . '.enableDemo', true)) {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
            $this->loadViewsFrom(__DIR__.'/../resources/views', $this->configName);
        }
    }
}
