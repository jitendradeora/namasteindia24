export function prepareHtml(html: string) {
  return html
    .replace(/<p[^>]*>\s*<\/p>/g, "")
    .replace(/\sclass="wp-block-[^"]*"/g, "")
    .replaceAll("https://namasteindia24.com", "")
}
