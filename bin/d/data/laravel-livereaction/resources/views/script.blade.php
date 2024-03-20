<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script>
            
function ssr(channel, callback) {
    var es = new EventSource('/.well-known/mercure?topic=' + encodeURIComponent(channel));
    es.addEventListener('message', (messageEvent) => {
        var eventData = JSON.parse(messageEvent.data);
        callback(eventData, messageEvent);
    });
}


liveReaction = () => ({
    config: {
        // delay messages
        delayMessage: 500,
        // delay until inserted item is removed
        delayRemove: 3000,
        // allowed reactions
        reactions: [':love:', ':thumb-up:', ':thumb-down:', ':hello:'],
    },
    // currently rendered items
    // {':love:' [':love:', ':love:'], ':thumb-up:': []}
    live: {},
    // messageDelay timeout reached
    messageTimeout: false,

    init() {
        ssr('liveReaction', (input) => {
            if(!input.data || !input.data.content) return;
            
            const item = input.data.content;
            this.setReaction(item);
        });
    },

    setReaction(item) {
        if(!this.live[item]) {
            this.live[item] = [];
        }

        this.live[item].push(item);

        window.setTimeout(() => {
            this.live[item].shift();
        }, this.config.delayRemove);
    },

    getLive(key) {
        if(!this.live[key]) return [];

        return this.live[key];
    },

    sendMessage(message, token) {
        if(!this.config.reactions.includes(message)) {
            return false;
        }

        if(!this.messageTimeout) {
            fetch('/live-reaction/', {
                method: 'POST',
                body: JSON.stringify({message, _token: token}),
                headers: {
                    'Content-Type': 'application/json',
                    'accepts': 'application/json',
                }
            });
            
            this.messageTimeout = true;

            window.setTimeout(() => {
                this.messageTimeout = false;
            }, this.config.delayMessage)
        }
        else {
            this.setReaction(message);
        }
    },
});        
</script>
