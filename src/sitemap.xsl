<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
    version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
>
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <xsl:variable name="title">Sitemap</xsl:variable>
        <xsl:variable name="websiteUrl">
            <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:loc"/>
        </xsl:variable>
        <xsl:variable name="websiteUrlWithoutProtocol">
            <xsl:value-of select="substring-before(substring-after($websiteUrl, '://'), '/')" />
        </xsl:variable>
        <xsl:variable name="gitHubUrl">https://github.com/data-miner00/sitemap.pretty</xsl:variable>
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

                    h1 {
                        font-family: "Italiana", serif;
                    }
                </style>
            </head>
            <body class="overflow-x-hidden">
                <div class="w-full lg:w-[1080px] mx-auto py-5 lg:py-10 lg:border-l lg:border-r border-solid border-black">
                    <header class="py-2 md:py-8 relative after:absolute after:-left-full after:-right-full after:h-px after:bg-black after:bottom-0">
                        <div class="flex justify-between items-center px-4">
                            <div id="now">1 Jan 1998</div>
                            <div class="flex gap-4 items-center">
                                <a class="hidden md:block" title="Visit GitHub" href="{$gitHubUrl}" target="_blank">GitHub</a>
                                <div class="hidden md:block">Sitemap version 2</div>
                                <div class="italic hidden md:block">
                                    <xsl:value-of select="$websiteUrlWithoutProtocol"></xsl:value-of>
                                </div> 
                                <a href="{$websiteUrl}" class="block px-3 py-1 bg-black text-white hover:bg-gray-700 transition-colors duration-150">Return to website</a>
                            </div>
                        </div>

                        <h1 class="text-center text-6xl md:text-8xl lg:text-9xl uppercase py-10">
                            Sitemap Vogue
                        </h1>
                    </header>
                    
                    <main class="relative after:absolute after:-left-full after:-right-full after:h-px after:bg-black after:bottom-0">
                        <xsl:apply-templates />
                    </main>

                    <footer class="p-4">
                        <p class="">
                            <xsl:choose>
                                <xsl:when test="sitemap:sitemapindex">
                                    This index contains a total of
                                    <strong class="font-bold"><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong>
                                    sitemaps.
                                </xsl:when>
                                <xsl:otherwise>
                                    This index contains a total of
                                    <strong class="font-bold"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
                                    URLs.
                                </xsl:otherwise>
                            </xsl:choose>
                        </p>
                        <p>
                            This is an XML sitemap, meant for consumption by search engines.<br/>
                            You can find more information about XML sitemaps on <a href="https://sitemaps.org" target="_blank" class="font-bold relative after:absolute after:-bottom-px after:h-px after:left-0 after:right-0 after:bg-black hover:after:h-1 hover:after:-bottom-1 after:transition-all after:duration-150">sitemaps.org</a>.
                        </p>
                    </footer>
                </div>

                <script type="text/javascript">
                    var dateElement = document.querySelector("#now");
                    dateElement.innerHTML = new Intl.DateTimeFormat("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    }).format(new Date());
                </script>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="sitemap:sitemapindex">
        <div class="p-4">
            <p class="mb-4">An index for sitemaps</p>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Location</th>
                        <th>Last modified</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:for-each select="sitemap:sitemap">
                        <tr>
                            <xsl:variable name="loc">
                                <xsl:value-of select="sitemap:loc" />
                            </xsl:variable>
                            <xsl:variable name="pno">
                                <xsl:value-of select="position()" />
                            </xsl:variable>

                            <td>
                                <xsl:value-of select="$pno" />
                            </td>
                            <td>
                                <xsl:value-of select="$loc" />
                            </td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="sitemap:lastmod">
                                        <xsl:value-of select="sitemap:lastmod" />
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:text>Last updated unknown</xsl:text>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each> 
                </tbody>
            </table>
        </div>
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
                    <xsl:variable name="lastmod">
                        <xsl:value-of select="sitemap:lastmod" />
                    </xsl:variable>
                    <li class="border-b border-solid border-black flex-col md:flex-row flex md:h-36 items-center last-of-type:border-b-0">
                        <div class="md:basis-36 grid place-items-center h-full border-b md:border-b-0 md:border-r border-solid border-black">
                            <div class="text-3xl font-mono">
                                <xsl:choose>
                                    <xsl:when test="$pno &lt; 10">
                                        <xsl:text>0</xsl:text>
                                        <xsl:value-of select="$pno" />
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="$pno" />
                                    </xsl:otherwise>
                                </xsl:choose>
                            </div>
                        </div>
                        
                        <div class="flex-1 px-6">
                            <div class="mb-1">
                                <a href="{$loc}" class="text-xl font-serif">
                                    <xsl:value-of select="sitemap:loc" />
                                </a>     
                            </div>

                            <div class="flex items-center gap-2">
                                <div>
                                    <xsl:choose>
                                        <xsl:when test="sitemap:lastmod">
                                            <span>
                                                Updated at
                                                <time datetime="{$lastmod}">
                                                    <xsl:value-of select="sitemap:lastmod" />
                                                </time>
                                            </span>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <span class="text-gray-400">
                                                Unknown last modification
                                            </span>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </div>

                                <div class="text-gray-400">/</div> 
                                
                                <div>
                                    <xsl:choose>
                                        <xsl:when test="sitemap:priority">
                                            <xsl:choose>
                                                <xsl:when test="sitemap:priority &lt; 0.2">
                                                    <span>
                                                        Super low priority
                                                    </span>
                                                </xsl:when>
                                                <xsl:when test="sitemap:priority &lt; 0.4">
                                                    <span>
                                                        Low priority
                                                    </span>
                                                </xsl:when>
                                                <xsl:when test="sitemap:priority &lt; 0.6">
                                                    <span>
                                                        Medium priority
                                                    </span>
                                                </xsl:when>
                                                <xsl:when test="sitemap:priority &lt; 0.8">
                                                    <span>
                                                        High priority
                                                    </span>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <span>
                                                        Super high priority
                                                    </span>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <span class="text-gray-400">
                                                Unknown priority
                                            </span>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </div>

                                <div class="text-gray-400">/</div> 
                                
                                <div>
                                    <xsl:choose>
                                        <xsl:when test="sitemap:changefreq">
                                            <span>
                                                Purportedly changes every <xsl:value-of select="sitemap:changefreq" />
                                            </span>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <span class="text-gray-400">
                                                Unknown change frequency
                                            </span>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </div>
                            </div>
                        </div>
                    </li>
                </xsl:for-each>
            </ul>
        </div>
    </xsl:template>
</xsl:stylesheet>
