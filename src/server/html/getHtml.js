export default function getHtml({
   children,
   title,
   meta,
   styles,
   page_props,
   inlineStyles,
   scriptTags,
   preloadScriptTags,
}) {
   return `<!DOCTYPE html>
   <html lang="en-US">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         ${title}
         ${meta}
         ${styles}
         ${inlineStyles}
         ${preloadScriptTags}
         </head>
         <body>
         <div id="root">${children}</div>
         ${insertProps(page_props)}
         ${scriptTags}
         </body>
      </html>`
}

function insertProps(props) {
   if (!props) return ""
   if (Object.keys(props).length > 0) {
      return `<script>window.__data=${JSON.stringify(props)}</script>`
   }
   return ""
}
