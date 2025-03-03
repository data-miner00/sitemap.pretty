# sitemap.pretty

[sitemap.pretty](/) is a collection of stylesheets for `sitemap.xml` and `sitemapindex.xml` that adheres to the [sitemap protocol](https://www.sitemaps.org/protocol.html).

![thumbnail for the project](images/thumbnail.png)

## Usages

To use the stylesheet, just add the following one liner in the top of your XML file after the XML declaration header.

```xml
<?xml-stylesheet href="..." type="text/xsl"?>
```

The `href` attribute is where it points to the XSLT stylesheet file. Here are the 3 ways you can do that.

1. By CDN.
   ```xml
   <?xml-stylesheet href="https://cdn.jsdelivr.net/npm/@mumk/sitemap.pretty@latest/dist/vogue.xsl" type="text/xsl"?>
   ```
2. By base 64. The digest can be found in `vogue-encoded.txt` that starts with `data:text/xsl;base64` in the release artifact.
   ```xml
   <?xml-stylesheet href="data:text/xsl;base64,PD94b...D4NCg==" type="text/xsl"?>
   ```
3. Host the stylesheet yourself. You can download either `vogue.xsl` or `basic.xsl` and host it in your hosting provider.

## Getting Started

1. Install packages with `npm i`.
2. Build the artifacts with `npm run build`.
3. Run tests with `npm test`
4. Run dev server with `npm run watch:css` and `npm run dev`

## Technologies

- Grunt.js
- TailwindCSS
- XSLT
- HTML

### XSLT

XSLT is the stylesheet for XML files. There are 3 versions:

- [XSLT 1.0](https://www.w3.org/TR/xslt-10/)
- [XSLT 2.0](https://www.w3.org/TR/xslt20/)
- [XSLT 3.0](https://www.w3.org/TR/xslt30/)

Despite the fact that XSLT 3.0 is the latest version, most of the browsers only support XSLT 1.0.

The code below prints the XSLT version when opened in the browser:

```xml
<p>
   XSLT version: <xsl:value-of select="system-property('xsl:version')"/>
</p>
```

Moreover, in Firefox, it can support XSLT extensions like [EXSLT](https://exslt.github.io/) but Chrome does not.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Resources

- [Grunt.js](https://gruntjs.com/)
- [sitemap.org](https://www.sitemaps.org)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [URL Encode and Decode](https://www.urlencoder.org/)
- [XSLT Cheat Sheet](https://www.cheat-sheets.org/saved-copy/XSLT-1.0.pdf)
- [XSLT 2.0 Cheat Sheet](https://cheatography.com/univer/cheat-sheets/xslt-2-0-cheat-sheet)
- [cs16.css](https://cs16.samke.me/)
- [XML Sitemap Stylesheet](https://github.com/pedroborges/xml-sitemap-stylesheet)
- [XSLT User Defined Function](https://stackoverflow.com/questions/18289265/xslt-user-defined-function)
- [Video Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps)
- [XSL Transform](http://xsltransform.net/)
- [Format a date string with XSLT](https://stackoverflow.com/questions/47348406/format-a-date-string-with-xslt)
- [Free Online XSLT Test Tool](https://xslttest.appspot.com/)
- [XSLT Tutorial](https://w3schools.sinsixx.com/xsl/default.asp.htm)
- [Formatting Dates and Times](https://www.oreilly.com/library/view/xslt-2nd-edition/9780596527211/ch04s05.html)
- [XSLT XPath Tutorial](https://www.youtube.com/watch?v=WggVR4YI5oI)
- [Introduction to XSLT and XQuery](https://www.saxonica.com/technology/xslt-and-xquery.xml)
- https://www.w3schools.com/xml/xsl_elementref.asp
