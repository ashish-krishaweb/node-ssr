export default function getHtml({
   children,
   title,
   meta,
   styles,
   page_props,
   inlineStyles,
   scriptTags,
   scriptNonce,
   styleLinks
   // preloadScriptTags,
}) {
   return `<!DOCTYPE html>
   <html lang="en-US">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         ${title}
         ${meta}
         ${styles}
         <!-- ${styleLinks} -->
         ${inlineStyles}
         ${scriptTags}
      </head>
      <body>
         <div id="root">${children}</div>
         ${insertProps(page_props, scriptNonce)}
      </body>
      </html>`
}

function insertProps(props, scriptNonce) {
   if (!props) return ""
   if (Object.keys(props).length > 0) {
      return `<script nonce=${scriptNonce}>window.__data=${JSON.stringify(props)}</script>`
   }
   return ""
}

// ${preloadScriptTags}
