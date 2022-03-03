// custom typefaces
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"

import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css'

import "./src/css/tailwind.css"
import "./src/css/style.css"

export const onRouteUpdate = () => {
    if (process.env.NODE_ENV === "production") {
        const token = process.env.GATSBY_CLOUDFLARE_ANALYTICS_TOKEN

        if (!token || typeof token != 'string') {
            throw Error('gatsby-plugin-cloudflare-web-analytics: No token provided in gatsby-config.js');
        }

        const head = document.head;
        const script = document.createElement('script');
        script.id = 'cloudflare-web-analytics'
        script.defer = true;
        script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
        script.setAttribute('data-cf-beacon', `{"token": "${token}"}`);

        const existingScript = head.querySelector(`#${script.id}`);
        if (existingScript) {
            head.removeChild(existingScript)
        }

        head.appendChild(script);
    }
}
