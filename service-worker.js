self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).then(response => {
            // Create a new response object by cloning the original response
            const newResponse = new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });

            // Set or update the Content-Security-Policy header
            newResponse.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'nonce-cuBBENZM+PA7y0syXw3+Bw==' 'unsafe-inline'; object-src 'none';");

            return newResponse;
        })
    );
});

