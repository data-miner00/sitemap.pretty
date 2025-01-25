<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
    version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
>
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>
                    Sitemap
                    
                    <xsl:if test="sitemap:sitemapindex">Index</xsl:if>
                </title>
                <link rel="stylesheet" href="tailwind.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DInter%3Aital%2Copsz%2Cwght%400%2C14..32%2C100..900%3B1%2C14..32%2C100..900%26family%3DOutfit%3Awght%40100..900%26display%3Dswap" rel="stylesheet" />
                <style>
                    body {
                        font-family: "Inter", sans-serif;
                    }
                </style>
            </head>
            <body class="bg-gray-900 text-white">
                <div class="p-12">
                    <header class="mb-12 border-b border-solid border-gray-700 py-8">
                        <div class="text-8xl font-bold uppercase mb-2">
                            Sitemap
                        </div>
                        <p class="text-gray-500 text-lg mb-1">The list of all pages in Example.com</p>

                        <p class="text-lg">
                            <xsl:choose>
                                <xsl:when test="sitemap:sitemapindex">
                                    This index contains
                                    <strong class="font-bold "><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong>
                                    sitemaps.
                                </xsl:when>
                                <xsl:otherwise>
                                    This index contains
                                    <strong class="font-bold"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
                                    URLs.
                                </xsl:otherwise>
                            </xsl:choose>
                        </p>
                    </header>
                    
                    <main>
                        <xsl:apply-templates />
                    </main>
                </div>

                <script type="text/javascript">
                    console.log("Sitemap loaded successfully");
                </script>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="sitemap:sitemapindex">
        <div>Sitemap Index!</div>
    </xsl:template>
    <xsl:template match="sitemap:urlset">
        <div>
            <ul>
                <xsl:for-each select="sitemap:url">
                    <xsl:variable name="loc">
                        <xsl:value-of select="sitemap:loc" />
                    </xsl:variable>
                    <xsl:variable name="pno">
                        <xsl:value-of select="position()" />
                    </xsl:variable>
                    <li class="my-2">
                        <a href="{$loc}" class="text-lg font-semibold mb-1">
                            <xsl:value-of select="sitemap:loc" />
                        </a>
                        <div class="">
                            <xsl:if test="sitemap:lastmod">
                                <span>
                                    • <xsl:value-of select="sitemap:lastmod" />
                                </span>
                            </xsl:if>
                            <xsl:if test="sitemap:priority">
                                <span>
                                    • <xsl:value-of select="sitemap:priority" />
                                </span>
                            </xsl:if>
                            <xsl:if test="sitemap:changefreq">
                                <span>
                                    • <xsl:value-of select="sitemap:changefreq" />
                                </span>
                            </xsl:if>
                        </div>
                    </li>
                </xsl:for-each>
            </ul>
        </div>
    </xsl:template>
</xsl:stylesheet>
