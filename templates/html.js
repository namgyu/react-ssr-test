export default ({ body, title, initialState }) => {
    return `
        <!DOCTYPE html>
            <html>
                <head>
                    <script>window.__INITIAL_STATE__ = ${initialState}</script>
                    <title>${title}</title>
                </head>
        
            <body>
                <div id="root">${body}</div>
            </body>
        
            <script src="/build/bundle.js"></script>
        </html>
    `;
};
