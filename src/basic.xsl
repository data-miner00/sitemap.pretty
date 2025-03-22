<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet
    version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:date="http://exslt.org/dates-and-times"
    extension-element-prefixes="date"
>
    <xsl:output method="html" doctype-public="XSLT-compat" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>
                    Sitemap
                
                    <xsl:if test="sitemap:sitemapindex">Index</xsl:if>
                </title>

                <link rel="stylesheet" href="tailwind.css" />
                <style>
                    :root {
                        --primary-color: #2563eb;
                        --text-color: #1f2937;
                        --border-color: #e5e7eb;
                        --hover-bg: #f3f4f6;
                        --background: #ffffff;
                    }

                    @media (prefers-color-scheme: dark) {
                        :root {
                            --primary-color: #60a5fa;
                            --text-color: #f3f4f6;
                            --border-color: #374151;
                            --hover-bg: #1f2937;
                            --background: #111827;
                        }
                    }
                </style>
            </head>
            <body class="text-[var(--text-color)] leading-[1.5] max-w-[1200px] my-0 mx-auto p-4 bg-[var(--background)]">
                <header class="border-b border-solid border-[var(--border-color)] pb-4 mb-8">
                    <xsl:variable name="urlCount">
                        <xsl:choose>
                            <xsl:when test="sitemap:urlset">
                                <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                            </xsl:when>
                            <xsl:when test="sitemap:sitemapindex">
                                <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:text>0</xsl:text>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <h1 class="text-[2rem] font-semibold">
                        Sitemap
                        
                        <xsl:if test="sitemap:sitemapindex">Index</xsl:if>
                    </h1>
                    <p>
                        Total URLs: <strong><xsl:value-of select="$urlCount" /></strong>
                    </p>
                </header>

                <main>
                    <xsl:apply-templates />
                </main>

                <footer class="py-6">
                    <p class="text-sm text-[#666]">Sitemap rendered by sitemap.pretty with basic theme.</p>
                </footer>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="sitemap:urlset">
        <ul>
            <xsl:for-each select="sitemap:url">
                <li class="p-4 border-b border-solid border-[var(--border-color)] hover:bg-[var(--hover-bg)]">
                    <a href="{sitemap:loc}" class="text-[var(--primary-color)] font-medium hover:underline">
                        <xsl:value-of select="sitemap:loc"/>
                    </a>
                    <div class="flex gap-4 mt-2 text-sm text-[#666] dark:text-[#888]">
                        <xsl:if test="sitemap:lastmod">
                            <span>
                                Updated: <xsl:call-template name="format-date">
                                    <xsl:with-param name="datetime" select="sitemap:lastmod"/>
                                </xsl:call-template>
                            </span>
                        </xsl:if>

                        <xsl:if test="sitemap:changefreq">
                            <span>
                                <xsl:call-template name="format-changefreq">
                                    <xsl:with-param name="freq" select="sitemap:changefreq"/>
                                </xsl:call-template>
                            </span>
                        </xsl:if>

                        <xsl:if test="sitemap:priority">
                            <span>
                                <xsl:call-template name="format-priority">
                                    <xsl:with-param name="priority" select="sitemap:priority"/>
                                </xsl:call-template>
                            </span>
                        </xsl:if>
                    </div>
                </li>
            </xsl:for-each>
        </ul>
    </xsl:template>

    <!-- Helper templates -->
    <xsl:template name="format-date">
        <xsl:param name="datetime" />
        <xsl:if test="$datetime">
            <time datetime="{$datetime}">
                <xsl:value-of select="concat(
                    substring($datetime, 9, 2),
                    '/',
                    substring($datetime, 6, 2),
                    '/',
                    substring($datetime, 1, 4)
                )" />
            </time>
        </xsl:if>
    </xsl:template>

    <xsl:template name="format-changefreq">
        <xsl:param name="freq"/>
        <div>
            Updates: <xsl:choose>
                <xsl:when test="$freq = 'always'">Continuous</xsl:when>
                <xsl:when test="$freq = 'hourly'">Hourly</xsl:when>
                <xsl:when test="$freq = 'daily'">Daily</xsl:when>
                <xsl:when test="$freq = 'weekly'">Weekly</xsl:when>
                <xsl:when test="$freq = 'monthly'">Monthly</xsl:when>
                <xsl:when test="$freq = 'yearly'">Yearly</xsl:when>
                <xsl:when test="$freq = 'never'">Never</xsl:when>
            </xsl:choose>
        </div>
    </xsl:template>

    <xsl:template name="format-priority">
        <xsl:param name="priority"/>
        <div>
            Priority: <xsl:choose>
                <xsl:when test="$priority &lt; 0.2">Very Low</xsl:when>
                <xsl:when test="$priority &lt; 0.4">Low</xsl:when>
                <xsl:when test="$priority &lt; 0.6">Medium</xsl:when>
                <xsl:when test="$priority &lt; 0.8">High</xsl:when>
                <xsl:otherwise>Very High</xsl:otherwise>
            </xsl:choose>
        </div>
    </xsl:template>

    <xsl:variable name="websiteUrl">
        <xsl:choose>
            <xsl:when test="sitemap:urlset/sitemap:url[1]/sitemap:loc">
                <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:loc"/>
            </xsl:when>
            <xsl:when test="sitemap:sitemapindex/sitemap:sitemap[1]/sitemap:loc">
                <xsl:value-of select="sitemap:sitemapindex/sitemap:sitemap[1]/sitemap:loc"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:text>www.example.com</xsl:text>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>

    <xsl:template match="sitemap:sitemapindex">
        <ul>
            <xsl:for-each select="sitemap:sitemap">
                <xsl:variable name="loc">
                    <xsl:value-of select="sitemap:loc" />
                </xsl:variable>
                <xsl:variable name="pno">
                    <xsl:value-of select="position()" />
                </xsl:variable>

                <li class="p-4 border-b border-solid border-[var(--border-color)] hover:bg-[var(--hover-bg)]">
                    <a href="{$loc}" class="text-[var(--primary-color)] font-medium hover:underline" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                    </a>
                    <div class="flex gap-4 mt-2 text-sm text-[#666] dark:text-[#888]">
                        <xsl:if test="sitemap:lastmod">
                            <span>
                                Updated: <xsl:call-template name="format-date">
                                    <xsl:with-param name="datetime" select="sitemap:lastmod"/>
                                </xsl:call-template>
                            </span>
                        </xsl:if>
                    </div>
                </li> 
            </xsl:for-each> 
        </ul>
    </xsl:template>
</xsl:stylesheet>
