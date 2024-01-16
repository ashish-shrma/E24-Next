export function extractTextFromHTML(html: string): string {
    // Remove <script> tags and their content
    const withoutScripts = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove <blockquote> tags and their content
    const withoutBlockquotes = withoutScripts.replace(/<blockquote\b[^<]*(?:(?!<\/blockquote>)<[^<]*)*<\/blockquote>/gi, '');

    // Remove HTML tags and attributes
    const regex = /<[^>]+>/g;
    const cleanedString = withoutBlockquotes.replace(regex, '');

    // Convert HTML entities to their corresponding characters
    const entityMap: { [key: string]: string } = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#039;': "'",
        '&#8217;': `’`,
        '&#8216;': `‘`,
    };

    return cleanedString.replace(/&[a-z]+;/g, (entity) => {
        return entityMap[entity] || entity;
    });
}
