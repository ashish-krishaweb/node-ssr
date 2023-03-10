export default ({ children, extractor, head }) => {
   return (
      <>
         <html lang="en">
            <head>
               <meta charSet="UTF-8" />
               <meta http-equiv="X-UA-Compatible" content="IE=edge" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               {head.title.toString()}
               {head.meta.toString()}
               {extractor.getStyleTags()}
            </head>
            <body>
               <div id="root">{children}</div>
               {extractor.getScriptTags()}
            </body>
         </html>
      </>
   )
}
